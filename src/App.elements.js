import styled from "styled-components/macro";

export const AppContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 5px;
  height: auto;
  overflow: hidden;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

export const Navigation = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: snow;
  /* padding: 16px; */
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
  position: relative;
  transform: translate(5px);
  border-radius: 10px;
  z-index: 20;
  box-shadow: 0px 3px 5px #e4e4e4;
  gap: 2rem;
  


  // media Queries for tablet
  // @media screen and (max-width: 768px) {
  // rules go here
  // }
  // media Queries for phone
`;

export const CountriesList = styled.div`

`
export const CountriesInfo = styled.div`
 height: 3rem;
 width: 3rem;
 align-items: center;

 margin: 0.2rem;
  /* z-index: 2; */

  svg {
    height: 3rem;
    width: 4rem;
  }
`
export const MapContainerMine = styled.div`
  z-index: 0;
`;

export const MyHeader = styled.h1``;
export const Myparagrpjh = styled.p``;
