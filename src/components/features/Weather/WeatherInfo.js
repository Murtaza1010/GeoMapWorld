import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../api/api';
import { selectWeatherInfo, selectCapital, selectedCountryName, addCountryAstronomy, selectCountryAstronomy } from '../CountryInfo/currentCountrySlice';
import { addWeather } from '../CountryInfo/currentCountrySlice';

import {
    WidgetContainer,
    TextContainer,
    Temperature,
    CountryCode,
    WeatherCondition,
    Humidity,
    DateTime,
    Clouds,
    StationName,
    AstronomyContainer,
    Sunrise,
    Sunset,
    Moonrise,
    Moonset,


} from './WeatherInfoStyles';
import SunriseIcon from '../../../resources/images/sun.gif';
import NightIcon from '../../../resources/images/night.gif';
import MoonriseIcon from '../../../resources/images/moonrise.gif';
import MoonsetIcon from '../../../resources/images/moonset.png';





const WeatherInfo = () => {
    const weatherData = useSelector(selectWeatherInfo)
    const countryName = useSelector(selectedCountryName)
    const capitalData = useSelector(selectCapital)
    const dispatch = useDispatch()
    const countryAstronomy = useSelector(selectCountryAstronomy)



    useEffect(() => {
        async function weatherApiCall() {
            if (countryName && capitalData) {
                const resp = await api.countryGeneralInfo.weatherByCapitalLatLong(capitalData.lat, capitalData.lon)
                if (resp) {
                    dispatch(addWeather(resp.weatherObservation))
                }
            }
        }
        weatherApiCall()
    }, [countryName, capitalData])

    useEffect(() => {
        async function countryAstronomyApiCall() {
            if (countryName && capitalData) {
                const resp = await api.countryGeneralInfo.countryAstronomy(capitalData.lat, capitalData.lon)
                console.log(resp)
                if (resp) {
                    dispatch(addCountryAstronomy(resp))
                }
            }
        }
        countryAstronomyApiCall()
    }, [countryName, capitalData])


    return (

        <WidgetContainer>
            <TextContainer>
                <Temperature> {weatherData?.temperature || ''}<span>&ordm;</span></Temperature>
                <CountryCode>{weatherData?.countryCode || ''}</CountryCode>
                <WeatherCondition>{weatherData?.weatherCondition || ''}</WeatherCondition>
                <Humidity>Humidity: {weatherData?.humidity || ''}</Humidity>
                <DateTime>{weatherData?.datetime || ''}</DateTime>
                <Clouds>Clouds: {weatherData?.clouds || ''}</Clouds>
                <StationName>{weatherData?.stationName || ''} </StationName>
                <AstronomyContainer>
                    <Sunrise><img src={SunriseIcon}></img> {countryAstronomy?.sunrise || ''}</Sunrise>
                    <Sunset><img src={NightIcon}></img>{countryAstronomy?.sunset || ''}</Sunset>
                    <Moonrise><img src={MoonriseIcon}></img>{countryAstronomy?.moonrise || ''}</Moonrise>
                    <Moonset><img src={MoonsetIcon}></img>{countryAstronomy?.moonset || ''}</Moonset>
                </AstronomyContainer>

            </TextContainer>
        </WidgetContainer>


    )
}

export default WeatherInfo