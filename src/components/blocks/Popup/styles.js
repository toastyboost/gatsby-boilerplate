import styled from "styled-components";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const StyledWindow = styled.div`
  top: auto;
  height: auto;
  position: relative;
  margin: 16px;
  width: calc(100% - 32px);
  border-radius: 3px;
  max-height: calc(100vh - 10%);
  background-color: #fff;
  max-width: 1024px;
  min-width: 300px;
  min-height: 56px;
  z-index: 1001;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const closeStyles = `
  content: '';
  position: absolute;
  display: block;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 20px;
  height: 0;
`;

const CloseButton = styled.div`
  position: absolute;
  z-index: 1002;
  height: 25px;
  width: 25px;
  transition: 0.3s;
  cursor: pointer;

  ${({ isFullscreen, isInside }) =>
    isFullscreen
      ? `
        right: 18px;
        top: 18px;
        opacity: 0.7;
        &:before,
        &:after {
          border-top: 2px solid var(--text-color);
        }
        `
      : isInside
      ? `
        opacity: 0.15;
        right: 25px;
        top: 25px;

        &:before,
        &:after {
          border-top: 3px solid var(--text-color);
        }
      `
      : `
        right: -2px;
        top: -36px;
        opacity: 0.7;
        
        &:before,
        &:after {
          border-top: 2px solid #fff;
        }
      `}

  &:before {
    ${closeStyles};
    transform: rotate(45deg);
  }

  &:after {
    ${closeStyles};
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 1;
  }
`;

export { StyledOverlay, StyledWindow, CloseButton };
