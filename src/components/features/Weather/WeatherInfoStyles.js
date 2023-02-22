import styled from "styled-components/macro";


export const WidgetContainer = styled.div`
    padding: 1rem;
    margin: 0.1em;
    font-weight: bold;
    font-size: large;
    transform: translate(5px);
    border-radius: 2em;
    border-color: white;
    transition: all 0.1s ease-out;
    width: 85%;
    
    display: flex;
    justify-content: center;
    border: 2px solid lightgray;
    animation: textsAnimation 20s ease infinite;
  -webkit-animation: textsAnimation 20s linear infinite;


@keyframes textsAnimation {
    32% { background-color: lightskyblue; }
    33% { background-color: lightskyblue; }
    62% { background-color: lightgoldenrodyellow; }
    63% { background-color: blueviolet; }
    99% { background-color: green; }
}
@-webkit-keyframes textsAnimation {
    32% { background-color: lightskyblue; }
    33% { background-color: lightskyblue; }
    62% { background-color: lightgoldenrodyellow; }
    63% { background-color: blueviolet; }
    99% { background-color: green; }
}
    
    
 
`
export const TextContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    text-align: center;
    position: relative;
    margin: 2em;
    column-gap: 2em;

    

`
export const Temperature = styled.div`
  
  display: block;
  text-indent: -5px;
  font-size: 100px;
  font-weight: bold;
  position: relative;
  animation: degreesAnimation 20s ease infinite;
  -webkit-animation: degreesAnimation 20s linear infinite;


@keyframes degreesAnimation {
    32% { color: #4F787D; }
    33% { color: #a8ddff; }
    62% { color: #a8ddff; }
    63% { color: #fff5b8; }
    99% { color: #fff5b8; }
}
@-webkit-keyframes degreesAnimation {
    32% { color: #4F787D; }
    33% { color: #a8ddff; }
    62% { color: #a8ddff; }
    63% { color: #fff5b8; }
    99% { color: #fff5b8; }
}


 `
export const CountryCode = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  animation: placeAnimation 20s ease infinite;
  -webkit-animation: placeAnimation 20s linear infinite;
@keyframes placeAnimation {
    32% { color: #694c6d; }
    33% { color: #4497bf; }
    62% { color: #4497bf; }
    63% { color: #f7a526; }
    99% { color: #f7a526; }
}

@-webkit-keyframes placeAnimation {
    32% { color: #694c6d; }
    33% { color: #4497bf; }
    62% { color: #4497bf; }
    63% { color: #f7a526; }
    99% { color: #f7a526; }
}

 `
export const WeatherCondition = styled.div`
    margin-bottom: 1em;
    color: blueviolet;
 /* &:before{
  content: 'Clear';
  animation: weatherTextAnimation 20s ease infinite;
  /* -webkit-animation: weatherTextAnimation 20s linear infinite; */
} */


`
export const Humidity = styled.div`

`

export const DateTime = styled.div`
margin-bottom: 1em;
`
export const Clouds = styled.div`
    

`
export const StationName = styled.div`

`
export const AstronomyContainer = styled.div`
`

export const Sunrise = styled.div`


`
export const Sunset = styled.div`
`

export const Moonrise = styled.div`
`
export const Moonset = styled.div`
`
