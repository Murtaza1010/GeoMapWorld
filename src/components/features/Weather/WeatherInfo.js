import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../api/api';
import { selectWeatherInfo, selectCapital, selectedCountryName } from '../CountryInfo/currentCountrySlice';
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

} from './WeatherInfoStyles';





const WeatherInfo = () => {
    const weatherData = useSelector(selectWeatherInfo)
    const countryName = useSelector(selectedCountryName)
    const capitalData = useSelector(selectCapital)
    const dispatch = useDispatch()



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


    return (

        <WidgetContainer>
            <TextContainer>
                <Temperature> {weatherData?.temperature || ''}<span>&ordm;</span></Temperature>
                <CountryCode>{weatherData?.countryCode || ''}</CountryCode>
                <WeatherCondition>{weatherData?.weatherCondition || ''}</WeatherCondition>
                <Humidity>Humidity: {weatherData?.humidity || ''}</Humidity>
                <DateTime>{weatherData?.datetime || ''}</DateTime>
                <Clouds>Clouds: {weatherData?.clouds || ''}</Clouds>
                <StationName>{weatherData?.stationName || ''}</StationName>
            </TextContainer>
        </WidgetContainer>


    )
}

export default WeatherInfo