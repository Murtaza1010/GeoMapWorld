import styled from "styled-components/macro";
import ScrollbarStyles from "./ScrollbarStyle";

export const SBDisplay = styled.div`
  z-index: 0;
  
  
`;
export const CloseSlideOut = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;
  transform: translateX(100vw);
  opacity: 0;

  &.open {
    transform: translateX(0);
  }
`;

export const SideSlideOutContainer = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  box-sizing: border-box;
  padding: 1rem 0 1rem 0;
  width: 30vw;
  height: 90.2vh;
  display: grid;
  grid-template-rows: auto 8fr auto;
  backdrop-filter: blur(11px) saturate(162%);
  -webkit-backdrop-filter: blur(11px) saturate(162%);
  background-color: rgba(0, 0, 0, 0.75);
  transform: translateX(512px);
  transition: transform 750ms ease;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1024px) {
    width: 50vw;
    transform: translateX(50vw);
  }
  @media (max-width: 820px) {
    width: 50vw;
    transform: translateX(50vw);
  }
  @media (max-width: 400px) {
    width: 70vw;
    right: 1rem;
    transform: translateX(50vw);
  }
  &.open {
    transform: translateX(0);
  }

  .icon {
    width: auto;
    height: 35px;
    svg {
      height: 100%;
      width: auto;
      fill: white;
      padding: 0;
    }
  }
`;

export const SlideOutButton = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-items: center;
  
`;

export const HeadingContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0rem 1rem 1rem 1rem;
  background-color: snow;
`;

export const ContentContainer = styled.div`
  padding: 1rem;
  margin-bottom: 10px;
  overflow-y: auto;
  ${ScrollbarStyles}
  background-color: 	snow;
 
  
`;
