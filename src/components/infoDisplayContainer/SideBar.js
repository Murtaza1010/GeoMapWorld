import React from "react";
import { useState } from "react";
import { FaBars} from "react-icons/fa";


import SlideOutButton from "./SlideOutButtons/SlideOutButton";
import SlideOutContent from "./SlideOutContent/SlideOutContent";

import SBContents from './SBContents/SBContents'



export const SideBar = ({ setOpen, open, close }) => {

  const [geoInfo, setGeoInfo] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState(false);
  const [covidInfo, setCovidInfo] = useState(false);

  return (



    <SBContents 
      icon={<FaBars />}
      isOpen={open}
      CloseFromOutSide={setOpen}
      headingContent={<SlideOutButton setGeoInfo={setGeoInfo} setWeatherInfo={setWeatherInfo} setCovidInfo={setCovidInfo}/>}
      
      contentStyle={{ padding: "0 0 1rem 0" }}
      headingStyle={{ padding: "0 1rem 1rem 0" }}
      hideButton
      mainContent={<SlideOutContent geoInfo={geoInfo} weatherInfo={weatherInfo} covidInfo={covidInfo}/>}

    />
  );
};
