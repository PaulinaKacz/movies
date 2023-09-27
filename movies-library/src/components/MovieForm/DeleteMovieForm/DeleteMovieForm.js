import React from "react";
import styled from "styled-components";

const StyledFormMovieDeleteWrapper = styled.div`
  width: 600px;
`;

const StyledFormMovieDeleteTitle = styled.div`
  margin-bottom: 37px;
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`;

const StyledFormMovieDeleteWarning = styled.div`
  margin-bottom: 52px;
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const StyledFormMovieDeleteFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;

const StyledFormMovieDeleteSubmitButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  appearance: none;
  padding: 17px 36px;
  background: #f65261;
  border-radius: 4px;
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

const FormMovieDelete = (props) => (
  <StyledFormMovieDeleteWrapper className={props.className}>
    <StyledFormMovieDeleteTitle>DELETE MOVIE</StyledFormMovieDeleteTitle>
    <StyledFormMovieDeleteWarning>
      Are you sure you want to delete this movie?
    </StyledFormMovieDeleteWarning>
    <StyledFormMovieDeleteFooter>
      <StyledFormMovieDeleteSubmitButton
        data-testid="CONFIRM"
        onClick={props.onConfirm}
      >
        CONFIRM
      </StyledFormMovieDeleteSubmitButton>
    </StyledFormMovieDeleteFooter>
  </StyledFormMovieDeleteWrapper>
);

export default FormMovieDelete;
