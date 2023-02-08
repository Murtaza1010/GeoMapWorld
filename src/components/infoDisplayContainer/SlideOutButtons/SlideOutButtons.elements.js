import styled from "styled-components/macro";


export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-bottom: 0.5px solid silver;
    border-bottom-left-radius: 2em;
    border-bottom-right-radius: 0.8em;
    

  button {
    background-color: #40c7e9;
    border-radius: 5px;
    padding: 0.5em;
    margin: 0.1em;
    font-weight: bold;
    font-size: larger;
    transform: translate(5px);
    border-radius: 1em;
    border-color: white;
    transition: all 0.1s ease-out;
    &:hover {
      background-color: #85d2f1;
    }

  
  }

`
export const GeoInfo = styled.button`

 &::before{

content: 'Geo Info ';
}
`
export const Weather = styled.button`
 &::before{

content: 'Weather ';
}

`
export const Covid = styled.button`
 &::before{

content: 'Covid-19 ';
}

`
