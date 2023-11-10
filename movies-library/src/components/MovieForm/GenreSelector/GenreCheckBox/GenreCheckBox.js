"use client";
import React from "react";
import styled from "styled-components";

export const StyledContainer = styled.div``;

export const StyledInput = styled.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  position: relative;
  height: 16px;
  width: 16px;
  display: inline-block;

  &:before {
    content: "";
    -webkit-appearance: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    height: 100%;
    width: 100%;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #e6e8ed;
    border-radius: 2px;
    box-sizing: border-box;
  }
`;

export const StyledLabelChecked = styled.label`
  position: relative;
  height: 16px;
  width: 16px;
  display: inline-block;

  &:before {
    content: "";
    -webkit-appearance: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    height: 100%;
    width: 100%;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #e6e8ed;
    border-radius: 2px;
    box-sizing: border-box;
  }

  &:before {
    background: #e64c5a;
    border: solid #e64c5a;
    border-radius: 2px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 60%;
    left: 50%;
    width: 4px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

const InputCheckbox = (props) => (
  <StyledContainer className={props.className}>
    <StyledInput
      data-testid="checkbox"
      type="checkbox"
      value={String(props.value)}
      onChange={(e) => props.onChange(!!e.target.value)}
    />
    {props.isChecked ? <StyledLabelChecked /> : <StyledLabel />}
  </StyledContainer>
);

export default InputCheckbox;
