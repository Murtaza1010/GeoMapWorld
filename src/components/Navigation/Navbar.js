// Libraries
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Element
import { DropdownMenu } from "./Navbar.elements";

// Data
import countryNames from "../../resources/countryBorders.json";
import {
  addCurrentCountry,
  addCurrentIso,
  addCurrentIso3,
  selectedCountryName,
  selectedIso2,
  updateCountryInfo,
  selectCountryInfo,
  addCapital,
} from "../features/CountryInfo/currentCountrySlice";
import api from "../../api/api";

const Navbar = ({ setShowSlideOutMenu }) => {
  const countryGeneralInfo = useSelector(selectCountryInfo);
  // console.log(countryGeneralInfo);
  const countryIso = useSelector(selectedIso2);
  const countryName = useSelector(selectedCountryName);
  // console.log(countryIso);
  const dispatch = useDispatch();
  const [listOfCountries, setListOfCountries] = useState([]);

  const features = countryNames.features;
  useEffect(() => {
    function getAndSortCountries() {
      // initialization
      const countryArr = features.map((element) => element.properties);
      //https://www.freecodecamp.org/news/destructure-object-properties-using-array-map-in-react/
      countryArr.sort((a, b) => a.name.localeCompare(b.name)); // sorting array based on countryname
      setListOfCountries(countryArr);
    }
    getAndSortCountries(); // decalartion
  }, [features]);

  // Run the api Call at least once and then on change of countyrISO2
  useEffect(() => {
    async function runApiCall() {
      if (countryIso) {
        // make Api Request for country info
        const resp = await api.countryGeneralInfo.byCountry(countryIso);
        if (resp) {
          dispatch(updateCountryInfo(resp.geonames[0]));
        }
      }
    }
    runApiCall();
  }, [countryIso, countryNames]);

  // API Call the feed the lat and lng to the weather api 
  // the Api should be called only if there is a lat and lng data 
  // the Api call should be called on every country change 


  //if countryName has a value then get geoCoding for the selected Country's capital
  useEffect(() => {
    async function getCapitalCity() {

      if (countryGeneralInfo && countryName) {
        const resp = await api.countryGeneralInfo.geoCodeCapital(countryGeneralInfo.capital);
        if (resp) {
          dispatch(addCapital(resp[0]))

        }
      }

    }
    getCapitalCity();
  }, [countryGeneralInfo, countryName]);



  // function that handles when dropdown menu is changed
  async function updateMyStore(event) {
    event.preventDefault();

    let name; // this is array ["Afghanistan", "Af"]
    if (event.target.value && event.target.value !== null) {
      name = event.target.value.split(",");
    }
    dispatch(addCurrentCountry(name[0]));
    dispatch(addCurrentIso(name[1]));
    dispatch(addCurrentIso3(name[2]));
    setShowSlideOutMenu(true)
  }

  return (
    <DropdownMenu onChange={(event) => updateMyStore(event)} >
      <option disabled>Select a Country...</option>

      {listOfCountries &&
        listOfCountries.map((element, index) => (
          <option key={index} value={`${element.name},${element.iso_a2},${element.iso_a3}`}>
            {element.name} ({element.iso_a2})
          </option>
        ))}
    </DropdownMenu>
  );
};

export default Navbar;
// the dropdown menu takes in name/iso-a2 properties from json data array
//
