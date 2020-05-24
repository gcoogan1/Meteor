import React from 'react';
import styled from 'styled-components';


//TO CHANGE LOADER GRAB CSS FROM 'https://loading.io/css/'

const StyledLoader = styled.div`
  display: flex;
  transform: translateZ(1px);
  justify-content: center;
  height: 100vh;
  align-items:center;
  & div{
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 8px;
    border-radius: 50%;
    background: var(--purple-color);
    border: 62px solid white;
    border-color: white transparent white transparent;
    animation: lds-hourglass 1.2s infinite  
  }
  @keyframes lds-hourglass  {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}`


function Loader() {
    return (
        <StyledLoader>
          <div/>
        </StyledLoader>
    )
}

export default Loader;