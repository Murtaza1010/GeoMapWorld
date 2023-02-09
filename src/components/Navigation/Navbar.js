import React, { useEffect } from "react";
import { useState } from "react";

import { DropdownMenu } from "./Navbar.elements";

import countryNames from "../../resources/countryBorders.json";
import { useDispatch } from "react-redux";
import {
  addCurrentCountry,
  addCurrentIso,
} from "../features/CountryInfo/currentCountrySlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [listOfCountries, setListOfCountries] = useState([]);
  const [currentCountry, setCurrrentCountry] = useState({});

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

  // function that handles when dropdown menu is changed
  function updateMyStore(event) {
    event.preventDefault();

    let name; // this is array ["Afghanistan", "Af"]
    if (event.target.value && event.target.value !== null) {
      name = event.target.value.split(",");
    }
    dispatch(addCurrentCountry(name[0]));
    dispatch(addCurrentIso(name[1]));

    // make Api Request for country info 


    // save the value return from that API call into redux 



  }

  return (
    <DropdownMenu onChange={(event) => updateMyStore(event)}>
      <option disabled>Select a Country...</option>

      {listOfCountries &&
        listOfCountries.map((element, index) => (
          <option key={index} value={`${element.name},${element.iso_a2}`}>
            {element.name} ({element.iso_a2})
          </option>
        ))}
    </DropdownMenu>
  );
};

export default Navbar;
// the dropdown menu takes in name/iso-a2 properties from json data array
//
