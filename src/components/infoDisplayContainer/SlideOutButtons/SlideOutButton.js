import React, { useState } from 'react'
import {
    ButtonGroup,
    GeoInfo,
    Weather,
    Covid,
} from './SlideOutButtons.elements'
import CountryInfo from '../../features/CountryInfo/CountryInfo';
import { WiDayRainMix } from 'react-icons/wi';
import { ImFlag } from 'react-icons/im'
import { MdOutlineCoronavirus } from 'react-icons/md';

export default function SlideOutButton({ setGeoInfo, setWeatherInfo, setCovidInfo }) {





    const handleGeoClick = () => {
        setGeoInfo(true)
        setWeatherInfo(false)
        setCovidInfo(false)


    }
    const handleWeatherClick = () => {
        setGeoInfo(false)
        setWeatherInfo(true)
        setCovidInfo(false)
    }
    const handleCovidClick = () => {
        setCovidInfo(true)
        setGeoInfo(false)
        setWeatherInfo(false)
    }


    return (
        <ButtonGroup>
            <GeoInfo onClick={handleGeoClick}> <ImFlag /></GeoInfo>
            <Weather onClick={handleWeatherClick}><WiDayRainMix /></Weather>
            <Covid onClick={handleCovidClick}><MdOutlineCoronavirus /></Covid>
        </ButtonGroup>
    )
}
