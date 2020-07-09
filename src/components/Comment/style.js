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

export const Title = styled.div`
  height: 21px;
  width: ${props => props.randomWidth + 150 + 'px'};
  background-color: #333333;
  animation: ${changeColor} 4s infinite;
`;

export const Paragraph = styled.p`
  height: 21px;
  width: ${props => props.randomWidth + props.startWidth + '%'};
  background-color: #333333;
  animation: ${changeColor} 4s infinite;
`;