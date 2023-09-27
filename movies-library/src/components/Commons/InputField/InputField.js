import React from "react";
import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 60px 16px 18px;
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  border: none;
  appearance: none;
  outline: none;
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  ::placeholder {
    opacity: 0.3;
  }
`;

export const StyledIcon = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  fill: red;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const InputText = (props) => (
  <StyledInputWrapper>
    <StyledInput
      id={props.id}
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
    {props.icon && <StyledIcon component={props.icon} />}
  </StyledInputWrapper>
);

export default InputText;
