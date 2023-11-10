"use client";
import React from "react";
import styled from "styled-components";
import SuccessIcon from "../../Commons/Icons/SuccessTick";

const StyledMessageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const StyledMessageIcon = styled(SuccessIcon)`
  margin-bottom: 51px;
`;

const StyledMessageTitle = styled.div`
  margin-bottom: 30px;
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`;

const StyledContent = styled.div`
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
`;

const SuccessfullMessage = (props) => (
  <StyledMessageWrapper className={props.className}>
    <StyledMessageIcon />
    <StyledMessageTitle>{props.title}</StyledMessageTitle>
    <StyledContent>{props.children}</StyledContent>
  </StyledMessageWrapper>
);

export default SuccessfullMessage;
