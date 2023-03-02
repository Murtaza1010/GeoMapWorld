import styled from "styled-components/macro";

export const WidgetContainer = styled.div`
  padding: 0.5em;
  margin: 0.5em; 
  font-weight: bold;
  font-size: larger;
  transform: translate(5px);
  border-radius: 1em;
  border-color: white;
  transition: all 0.1s ease-out;
  width: 90%;
  /* height: 71vh; */

  border: 2px solid lightgray;
  animation: textsAnimation 20s ease infinite;
  -webkit-animation: textsAnimation 20s linear infinite;

  @keyframes textsAnimation {
    32% {
      background-color: lightskyblue;
    }
    33% {
      background-color: lightskyblue;
    }
    62% {
      background-color: lightgoldenrodyellow;
    }
    63% {
      background-color: blueviolet;
    }
    99% {
      background-color: green;
    }
  }
  @-webkit-keyframes textsAnimation {
    32% {
      background-color: lightskyblue;
    }
    33% {
      background-color: lightskyblue;
    }
    62% {
      background-color: lightgoldenrodyellow;
    }
    63% {
      background-color: blueviolet;
    }
    99% {
      background-color: green;
    }
  }
`;
export const TextContainer = styled.div`
 
font-family: Georgia, 'Times New Roman', Times, serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column ;
  margin: 0.5em;

`;
export const Temperature = styled.div`
 
  font-size: 100px;
  font-weight: bold;
  position: relative;
  animation: degreesAnimation 20s ease infinite;
  -webkit-animation: degreesAnimation 20s linear infinite;
  &::before {
  }

  @keyframes degreesAnimation {
    32% {
      color: #4f787d;
    }
    33% {
      color: #a8ddff;
    }
    62% {
      color: #a8ddff;
    }
    63% {
      color: #fff5b8;
    }
    99% {
      color: #fff5b8;
    }
  }
  @-webkit-keyframes degreesAnimation {
    32% {
      color: #4f787d;
    }
    33% {
      color: #a8ddff;
    }
    62% {
      color: #a8ddff;
    }
    63% {
      color: #fff5b8;
    }
    99% {
      color: #fff5b8;
    }
  }
`;
export const CountryCode = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
`;
export const WeatherCondition = styled.div`
  margin-bottom: 1em;
`;
export const Humidity = styled.div`
 
`;

export const DateTime = styled.div`
  margin-bottom: 1em;
`;
export const Clouds = styled.div`

`;
export const StationName = styled.div``;
export const AstronomyContainer = styled.div`
padding: 0.5em;
 margin: 0.5em; 
 font-size: larger;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 flex-flow: row wrap;
  width: 80%;
  


  transform: translate(5px);

  transition: all 0.1s ease-out;
background-color: snow;
border-radius: 1.5em;
/* border: 0 5px 5px 0 solid #85d2f1; */
  /* border-radius: 2em;
  border: 2px solid lightgray;
  background-color: snow; */


`;

export const Sunrise = styled.div`
 padding: 0.25em;
 /* margin: 0.25em; */
 font-size: larger;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
border-block-end: thick inset #85d2f1;
border-bottom-left-radius: 1em;


  &:before {
    content: " Sunrise ";
  }
`;
export const Sunset = styled.div`
 padding: 0.25em;

 font-size: larger;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
border-block-end: thick inset #85d2f1;
border-bottom-right-radius: 1em;

  &:before {
    content: " Sunset ";
  }
`;

export const Moonrise = styled.div`
 padding: 0.25em;

 font-size: larger;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
border-block-end: thick inset #85d2f1;
border-bottom-left-radius: 1em;
  &:before {
    content: " Moonrise ";
  }
`;
export const Moonset = styled.div`
 padding: 0.15em;
  margin-block-end: 7px;
 font-size: larger;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
border-block-end: thick inset #85d2f1;
border-bottom-right-radius: 1em;
margin-block-end: 7px;
  &:before {
    content: "Moonset";
  }
`;
