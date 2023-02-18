import React from 'react'
import CountryInfo from '../../features/CountryInfo/CountryInfo';
import WeatherInfo from '../../features/Weather/WeatherInfo';
import CovidInfo from '../../features/Covid/CovidInfo';


const SlideOutContent = ({ geoInfo, weatherInfo, covidInfo }) => {

  return (
    <>
      {geoInfo && <CountryInfo />}
      {weatherInfo && <WeatherInfo />}
      {covidInfo && <CovidInfo />}
    </>
  )
}

export default SlideOutContent