import styled from "styled-components/macro";

export const Table = styled.div`
  background-color: snow;
  padding: 1em;
  margin: 0 1em;
  font-weight: bolder;
  font-size: larger;
  width: 80%;

  border-radius: 2em;

  transition: all 0.1s ease-out;
  border: 2px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-family: Georgia, "Times New Roman", Times, serif;
`;
export const Title = styled.div`
  letter-spacing: 2px;
  font-weight: bolder;
  font-size: 40px;
  font-size: larger;
  line-height: 1;
  text-shadow: 1em #85d2f1;
  /* margin: 5px 5px;
 padding: 5px; */
  text-shadow: 1px #85d2f1;

  border: 2px dashed #85d2f1;
  border-spacing: 0.5em;
  border-style: solid dotted;
  border-bottom-width: 5px;
  border-radius: 1em;
  backface-visibility: visible;
  word-spacing: 1em;
`;
export const ReactCountryFlag = styled.div`


`
export const Image = styled.div`
  border-radius: 1em;


`;


export const Data = styled.tbody`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  /* width: 100%; */
  background-color: #f4f7f7;

  border: 1px dashed #85d2f1;
  border-spacing: 0.5em;
  border-style: solid dotted;
  border-bottom-width: 2px;
  border-radius: 1em;
  backface-visibility: visible;
  line-height: 0.5em;
  padding: 0.5em;
  margin: 0.2em;
  
  
  tr:nth-child(even) {
    background-color: #85d2f1;

    border: 1px dashed #f4f7f7;
    border-spacing: 0.5em;
    border-style: solid dotted;
    border-bottom-width: 2px;
    border-radius: 1em;
  }

  th {
 
  }
  td {

  }
`;
