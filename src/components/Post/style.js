import styled, { keyframes } from 'styled-components';

const changeColor = keyframes`
  0% {
    background-color: #9c9c9c;
  }
  50% {
    background-color: #0275d8;
  }
  100% {
    background-color: #9c9c9c;
  }
`;

export const Container = styled.div`
  height: 61px;
  width: 100%;
`;

export const Title = styled.div`
  height: 21px;
  width: ${props => props.randomWidth + 50 + '%'};
  background-color: #333333;
  animation: ${changeColor} 4s infinite;
`;

export const Item = styled.div`
  height: 21px;
  width: ${props => props.randomWidth + 50 + 'px'};
  background-color: #333333;
  animation: ${changeColor} 4s infinite;
`;