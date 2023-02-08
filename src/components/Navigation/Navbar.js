import React, { useEffect } from "react";
import { useState } from "react";

import { Nav, DropdownMenu, Select } from "./Navbar.elements";

import countryNames from "../../resources/countryBorders.json";
const Navbar = () => {
  const [listOfCountries, setListOfCountries] = useState([]);

  const features = countryNames.features;
  useEffect(() => {
    function getAndSortCountries() {
      const countryArr = features.map((element) => element.properties)
      countryArr.sort((a, b) => a.name.localeCompare(b.name))
      setListOfCountries(countryArr);
    }
    getAndSortCountries()
  }, [features]);


  // OnClick 

  return (
    <DropdownMenu>
      <option disabled >
        Select a Country...
      </option>

      {
        listOfCountries &&
        listOfCountries.map((element, index) => (
          <option key={index} value={element.name}>
            {element.name} ({element.iso_a2})
          </option>
        ))
      }
    </DropdownMenu >
  );
};

export default Navbar;
