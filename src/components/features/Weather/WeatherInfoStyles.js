import styled from "styled-components/macro";


export const WidgetContainer = styled.div`
    padding: 1rem;
    margin: 0 1em;
    font-weight: bold;
    font-size: large;
    transform: translate(5px);
    border-radius: 2em;
    border-color: white;
    transition: all 0.1s ease-out;
    width: 85%;
    height: 70vh;
    display: flex;
    justify-content: center;
    border: 2px solid lightgray;
    
 
`
export const TextContainer = styled.div`
    margin-top: 50px;
    width: 100%;
    text-align: center;
    position: relative;
    margin: 10px;
    

`
export const Temperature = styled.div`
  color: #4F787D;
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
    &:before {
          content: '+24';
  animation: degreesTextAnimation 20s ease infinite;
  -webkit-animation: degreesTextAnimation 20s linear infinite;
    }

@keyframes degreesTextAnimation {
    32% { content: '+24';}
    33% { content: '-13'; }
    62% { content: '-13'; }
    63% { content: '+32'; }
    99% { content: '+32'; }
}

@-webkit-keyframes degreesTextAnimation {
    32% { content: '+24';}
    33% { content: '-13'; }
    62% { content: '-13'; }
    63% { content: '+32'; }
    99% { content: '+32'; }
}

 `
export const CountryCode = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #694c6d;
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

 &:before{
  content: 'Madrid';
  animation: placeTextAnimation 20s ease infinite;
  -webkit-animation: placeTextAnimation 20s linear infinite;
}

@keyframes placeTextAnimation {
    32% { content: 'Madrid';}
    33% { content: 'Moscow'; }
    62% { content: 'Moscow'; }
    63% { content: 'Ankara'; }
    99% { content: 'Ankara'; }
}

@-webkit-keyframes placeTextAnimation {
    32% { content: 'Madrid';}
    33% { content: 'Moscow'; }
    62% { content: 'Moscow'; }
    63% { content: 'Ankara'; }
    99% { content: 'Ankara'; }
}

 `
export const WeatherCondition = styled.div`
    color: blueviolet;
 &:before{
  content: 'Clear';
  animation: weatherTextAnimation 20s ease infinite;
  /* -webkit-animation: weatherTextAnimation 20s linear infinite; */
}

@keyframes weatherTextAnimation {
    32% { content: 'Clear';}
    33% { content: 'Frosty'; }
    62% { content: 'Frosty'; }
    63% { content: 'Hot'; }
    99% { content: 'Hot'; }
}

/* @-webkit-keyframes weatherTextAnimation {
    32% { content: 'Clear';}
    33% { content: 'Frosty'; }
    62% { content: 'Frosty'; }
    63% { content: 'Hot'; }
    99% { content: 'Hot'; }
} */

`
export const Humidity = styled.div`
content: '61';
`
    
export const DateTime = styled.div`
content: ;
`
export const Clouds = styled.div`
    color: blueviolet;
 &:before{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  content: '\f095';
  animation: weatherTextAnimation 20s ease infinite;
  -webkit-animation: weatherTextAnimation 20s linear infinite;
}

@keyframes weatherTextAnimation {
    32% { content: 'frosty'}
    33% { content: 'Frosty'; }
    62% { content: 'Frosty'; }
    63% { content: 'Hot'; }
    99% { content: 'Hot'; }
}

@-webkit-keyframes weatherTextAnimation {
    32% { content: 'Clear';}
    33% { content: 'Frosty'; }
    62% { content: 'Frosty'; }
    63% { content: 'Hot'; }
    99% { content: 'Hot'; }
}
`
export const StationName = styled.div`
content: attr(FaTimes);
`
