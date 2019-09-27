import React from "react";
import ReactDOM from "react-dom";
import isClickedOutside from "click-outside-hook";

import { StyledOverlay, StyledWindow, CloseButton } from "./styles";

const Portal = ({ children }) =>
  typeof document !== "undefined" && ReactDOM.createPortal(children, document.getElementById("___gatsby"));

export const Popup = ({ children, toggle, isOpen, closeInside }) => {
  const ref = isClickedOutside(() => toggle(false));

  return (
    <Portal>
      {isOpen && (
        <StyledOverlay>
          <StyledWindow ref={ref}>
            <CloseButton isInside={closeInside} onClick={() => toggle(false)} />
            {children}
          </StyledWindow>
        </StyledOverlay>
      )}
    </Portal>
  );
};
