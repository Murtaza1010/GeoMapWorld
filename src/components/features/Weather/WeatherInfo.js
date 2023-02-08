import React from 'react'
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
    return (
        
            <WidgetContainer>
                <TextContainer>
                    <Temperature><span>&ordm;</span></Temperature>
                    <CountryCode></CountryCode>
                    <WeatherCondition>n/a</WeatherCondition>
                    <Humidity></Humidity>
                    <DateTime>2023-02-06 16:50:00</DateTime>
                    <Clouds>clouds and visibility OK</Clouds>
                    <StationName></StationName>
                </TextContainer>
            </WidgetContainer>

        
    )
}

export default WeatherInfo