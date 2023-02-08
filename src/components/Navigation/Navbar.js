import React, { useEffect } from "react";
import { useState } from "react";

import { Nav, DropdownMenu, Select } from "./Navbar.elements";

import countryNames from "../../resources/countryBorders.json";
const Navbar = () => {
  const [listOfCountries, setListOfCountries] = useState([]);

  const features = countryNames.features;
  useEffect(() => {
    setListOfCountries(features.map((element) => element.properties));


  }, [features]);


  // OnClick 

  return (
    <DropdownMenu>
      <option disabled >
        Select a Country...
      </option>

      {
        listOfCountries &&
        listOfCountries.sort().map((element, index) => (
          <option key={index} value={element.name}>
            {element.name} ({element.iso_a2})
          </option>
        ))
      }
    </DropdownMenu >
  );
};

export default Navbar;
