import React from 'react'
import CountryInfo from '../../features/CountryInfo/CountryInfo';
import WeatherInfo from '../../features/Weather/WeatherInfo';
import CovidInfo from '../../features/Covid/CovidInfo';


const SlideOutContent = ({geoInfo, weatherInfo, covidInfo}) => {
  console.log(geoInfo)
  return (
    <>
      {geoInfo ? <CountryInfo/> : null }
      {weatherInfo && <WeatherInfo/>}
      {covidInfo && <CovidInfo />}  
    </>
  )
}

export default SlideOutContent