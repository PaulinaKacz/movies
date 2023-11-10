"use client";
import { useState } from "react";
import React from "react";
import styled from "styled-components";
import ArrowIcon from "../../../Commons/Icons/ArrowIcon";
import InputCheckbox from "../GenreCheckBox/GenreCheckBox";

export const StyledContainer = styled.div`
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 18px 23px 15px 18px;
  position: relative;
  user-select: none;
  z-index: 9999;
`;

export const StyleSelectInput = styled.select`
  display: none;
`;

export const StyledDropDown = styled.div`
  background: rgba(35, 35, 35, 0.918051);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.1), 0 10px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.5914px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 4px;
  padding: 16px 18px 28px 18px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column;

  & > * {
    padding-bottom: 18px;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const StyledDropdownItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const StyledInputCheckbox = styled(InputCheckbox)`
  margin-right: 7px;
`;

const InputSelect = ({ className, name, options, value, onChange }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleContainerClick = () => setIsOpened(!isOpened);

  const handleOptionSelect = (option) =>
    onChange(
      value.includes(option)
        ? value.filter((item) => item !== option)
        : [...value, option]
    );

  return (
    <StyledContainer className={className} onClick={handleContainerClick}>
      <StyleSelectInput name={name} value={value} multiple={true}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyleSelectInput>
      <span>Select Genre</span>
      <ArrowIcon />
      {isOpened && (
        <StyledDropDown onClick={(e) => e.stopPropagation()}>
          {options.map((option) => (
            <StyledDropdownItem
              role="option"
              key={option}
              onClick={() => handleOptionSelect(option)}
            >
              <StyledInputCheckbox
                value={value.includes(option)}
                onChange={() => null}
                isChecked={value.includes(option)}
              />
              {option}
            </StyledDropdownItem>
          ))}
        </StyledDropDown>
      )}
    </StyledContainer>
  );
};

export default InputSelect;
