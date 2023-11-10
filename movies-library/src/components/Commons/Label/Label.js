"use client";

import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  position: relative;
  display: flex;
  flex-flow: column;
`;

const StyledLabelTitle = styled.div`
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  color: #f65261;
  margin-bottom: 13px;
`;

const StyledLabelContent = styled.div`
  width: 100%;
`;

const Label = (props) => (
  <StyledLabel className={props.className} htmlFor={props.htmlFor}>
    <StyledLabelTitle>{props.title}</StyledLabelTitle>
    <StyledLabelContent>{props.children}</StyledLabelContent>
  </StyledLabel>
);

export default Label;
