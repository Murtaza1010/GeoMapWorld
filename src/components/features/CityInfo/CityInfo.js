import React, { useState } from 'react'


import {
    CityInfoContainer,
    Top,
    Body,
    Titles,
    Coords,
}
    from './CityInfoStyles';
import populationIcon from '../../../resources/images/populationIcon.png';
import countryIcon from '../../../resources/images/country.png'
import { useSelector } from 'react-redux';
import { selectCities } from '../CountryInfo/currentCountrySlice';
import { useEffect } from 'react';



const CityInfo = ({ city }) => {
    console.log(city)

    return (
        <CityInfoContainer>
            <Top>
                <img src={countryIcon} />{city?.name}

            </Top>
            <Body>

                <Titles>
                    <h2>{city?.countrycode}</h2>
                    <img src={populationIcon}></img>{city?.population}

                </Titles>
                <Coords>
                    <h3>Lat:  {city?.lat}</h3>
                    <h3>Lng: {city?.lng}</h3>
                    <p>wikipedia: {city?.wikipedia}</p>
                </Coords>




            </Body>
        </CityInfoContainer>
    )
}

export default CityInfo