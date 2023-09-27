import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";
import CloseIcon from "../Commons/Icons/CloseIcon";

const StyledDialogOverlay = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 157px 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(35, 35, 35, 0.918051);
  mix-blend-mode: normal;
  opacity: 0.89;
  backdrop-filter: blur(12.2323px);
  overflow: auto;
`;

const StyledDialogContainer = styled.div`
  background: #232323;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.07),
    0 10px 20px rgba(0, 0, 0, 0.05), 0 10px 50px rgba(0, 0, 0, 0.05);
`;

const StyledDialogHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 30px 11px 30px;
`;

const StyledCloseButton = styled.button` // }) //   "data-testid": "close-modal-button", // .attrs({
  background: none;
  box-shadow: none;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 20.77px;
  height: 20.77px;
`;

const StyledDialogContent = styled.div`
  padding: 0 60px 60px 60px;
`;

const Dialog = (props) => (
  <>
    {props.isOpened && (
      <Portal>
        <StyledDialogOverlay>
          <StyledDialogContainer>
            <StyledDialogHeader>
              <StyledCloseButton
                data-testid="close-modal-button"
                onClick={props.onCloseButtonClick}
              >
                <StyledCloseIcon />
                {props.title}
              </StyledCloseButton>
            </StyledDialogHeader>
            <StyledDialogContent>{props.children}</StyledDialogContent>
          </StyledDialogContainer>
        </StyledDialogOverlay>
      </Portal>
    )}
  </>
);

export default Dialog;
