import React from 'react';
import { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import './infoContainer.css';

import { MenuHeading, MenuItems, LinkItems } from './SideBar.elements';

export const SideBar = () => {
  const [geoInfo, setGeoInfo] = useState(false)
  const [weatherInfo, setWeatherInfo] = useState(false)

  const handleGeoClick = () => {
    setGeoInfo(true);
    setWeatherInfo(false)
  }

  const handleWeatherClick = () => {
    setGeoInfo(false);
    setWeatherInfo(true)
  }
  return (
    <div className='pills-container'>
      <MenuHeading pills className='mb-3'>
        <MenuItems onClick={handleGeoClick}>
          <LinkItems> Geo Info</LinkItems>
        </MenuItems>
        <MenuItems onClick={handleWeatherClick}>
          <LinkItems> Weather </LinkItems>
        </MenuItems>

      </MenuHeading>

      <MDBTabsContent>
        {geoInfo && (<><h1>Hey this is some general Geo information </h1>
          <h3>Hey this is another Info and a placeholder that should defo be changed</h3>
        </>)}
        {weatherInfo && (<><h1>Hey this is some Weather  Weather Weather </h1>
          <h3>Hey this is Weather Info Weatherand a Weather that Weather defo be changed</h3>
        </>)}
      </MDBTabsContent>


    </div>
  )
}
