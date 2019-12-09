import { keyframes } from "styled-components";

export const clockwise = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const donutRotate = keyframes`
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-140deg);
  }
  100% {
    transform: rotate(0);
  }
`;
