import styled from 'styled-components/macro'

export const CovidInfoContainer = styled.div`
    background-color: snow;
    padding: 1em;
    margin: 0 1em;
    font-weight: bold;
    font-size: large;
    width: 82%;
 
    
    transform: translate(5px);
    border-radius: 2em;
    text-align: left;
    transition: all 0.1s ease-out;
    border: 2px solid lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* flex-wrap: wrap; */
  --text-base: 0, 100%, 100%;
  --text-hover: 9, 100%, 64%, 0.2;
  --shadow-start: 52deg, 100%, 72%;
  --shadow-end: 282deg, 90%, 50%;
  --shadow-inner: 10deg, 90%, 62%;
  
`

export const Title = styled.div`
  /* display: flex;
  justify-content: center;
  position: relative;
  transform: translate(5px);
  border-radius: 20px;
  background-color: #f4f7f7;
  box-shadow: 10px #0006; */
`

export const SubHeadingButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #40c7e9;
   
    padding: 0.2em;
    margin: 0.1em;
    
    transform: translate(5px);
    border-radius: 1em;
    border-color: white;
    transition: all 0.1s ease-out;
    letter-spacing: 2px; 
    border: 2px dashed white;
    border-spacing: 0.5em;
    border-style: solid dotted;
    border-bottom-width: 5px;
    border-radius: 1em;
    backface-visibility: visible;
    word-spacing: 1em;
 
 

  
  

`
export const Cases = styled.button`

  
  color: hsla(var(--text-base), 1);
  font: 700 1.125rem/1.2 Raleway, sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.5em;
  max-width: 100%;
 
  background: inherit;
 
  border: 5px solid hsla(var(--text-base), 1);
  border-radius: 1.5em;
  cursor: pointer;
  position: relative;
  transition: 0.25s ease-out;
 
 &:hover, &:focus {
  color: hsla(var(--text-hover), 1);
  border-color: transparent;
  box-shadow: inset 0.5em 1em 1em hsla(var(--shadow-inner), 0.1), inset 0 0 1.4em  hsla(var(--shadow-inner), 0.32), 0 1px 1px hsla(var(--shadow-inner), 0.32);
}


`
export const Deaths = styled.button`
  
  color: hsla(var(--text-base), 0);
  font: 700 1.125rem/1.2 Raleway, sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.5em;
  max-width: 100%;
 
  background: inherit;
 
  border: 5px solid hsla(var(--text-base), 1);
  border-radius: 1.5em;
  cursor: pointer;
  position: relative;
  transition: 0.25s ease-out;
 
 &:hover, &:focus {
  color: hsla(var(--text-hover), 1);
  border-color: transparent;
  box-shadow: inset 0.5em 1.4em 1em hsla(var(--shadow-inner), 0.1), inset 0 0 1.4em hsla(var(--shadow-inner), 0.32), 0 1px 1px hsla(var(--shadow-inner), 0.32);
}

`
export const Tests = styled.button`
  color: hsla(var(--text-base), 1);
  font: 700 1.125rem/1.2 Raleway, sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.5em;
  max-width: 100%;
 
  background: inherit;
 
  border: 5px solid hsla(var(--text-base), 1);
  border-radius: 1.5em;
  cursor: pointer;
  position: relative;
  transition: 0.25s ease-out;
 
 &:hover, &:focus {
  color: hsla(var(--text-hover), 1);
  border-color: transparent;
  box-shadow: inset 0.5em 1.4em 1em hsla(var(--shadow-inner), 0.1), inset 0 0 1.4em hsla(var(--shadow-inner), 0.32), 0 1px 1px hsla(var(--shadow-inner), 0.32);
}

`

export const Row = styled.div`
height: max-content;
  
`

export const Column = styled.div`
  float: left;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4f7f7;
  width: 80%;
 border: 1px dashed #85d2f1;
 border-spacing: 0.5em;
 border-style: solid dotted;
 border-bottom-width: 2px;
 border-radius: 1em;
 backface-visibility: visible;
 word-spacing: 1em;
 line-height: 5px;

  & p {
    margin: px;
  }
`


// export const Death = styled.div`
//   &::before {
//     content: 'Deaths:';
//   }
// `
// export const Test = styled.div``
