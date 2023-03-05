import styled from "styled-components/macro";

export const TimeContainer = styled.div`
  background-color: #40c7e9;
  font-size: x-small;
  font-family: Georgia, "Times New Roman", Times, serif;
  border-radius: 1em;
  border: 2px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`
export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  position: relative;
  text-transform: uppercase;
    margin: 0.7em;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
`