"use client";
import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 16px 18px;
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

const InputTextarea = (props) => (
  <StyledTextarea
    id={props.id}
    className={props.className}
    placeholder={props.placeholder}
    rows={props.rows}
    value={props.value}
    onChange={props.onChange}
  />
);

export default InputTextarea;
