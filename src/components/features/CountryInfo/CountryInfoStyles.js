import styled from "styled-components/macro";

export const Table = styled.div`
    background-color: snow;
    padding: 1em;
    margin: 0 1em;
    font-weight: bold;
    font-size: large;
    width: 82%;
    max-height: fit-content;
    line-break: loose;
    transform: translate();
    border-radius: 2em;
    text-align: left;
    transition: all 0.1s ease-out;
    border: 2px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

      




`
export const Title = styled.div`
letter-spacing: 2px;
font-weight: bolder;
font-size: 40px;
font-size: larger;
 line-height: 1;
 text-shadow: 1em #85d2f1;
 /* margin: 5px 5px;
 padding: 5px; */
 text-shadow: 1px  #85d2f1;
 background-color: ;
 border: 2px dashed #85d2f1;
 border-spacing: 0.5em;
 border-style: solid dotted;
 border-bottom-width: 5px;
 border-radius: 1em;
 backface-visibility: visible;
 word-spacing: 1em;
 
 
`

export const Image = styled.div`
  border: 1px solid #ddd;
  border-radius: 1em;
  padding: 5px;
   border: 1px double #85d2f1;
  border-spacing: 0.5em;
  backface-visibility: visible;
position: relative;

`
export const Data = styled.div`
word-spacing: 0.2em;
letter-spacing: 0.1em;

tr:nth-child(even) {
  background-color: #85d2f1;
  
  
}

th {


   
}
td {
    padding: 6.5px;
    margin: 10px;
    
}
`