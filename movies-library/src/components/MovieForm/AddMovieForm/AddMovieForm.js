import { useState } from "react";
import React from "react";
import InputText from "../../Commons/InputField/InputField";
import GenreSelect from "../GenreSelector/GenreSelector";

import styled from "styled-components";
import Label from "../../Commons/Label/Label";
import InputTextarea from "../../Commons/TextArea/TextArea";

const StyledFormWrapper = styled.div`
  width: 860px;
`;

const StyledFormTitle = styled.div`
  margin-bottom: 38px;
  font-family: "Montserrat", serif;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`;

const StyledForm = styled.form``;

const StyledFormRows = styled.div`
  margin-bottom: 60px;
`;

const StyledFormRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 30px;
`;

const StyledFormLabelLeft = styled(Label)`
  width: 525px;
  margin-right: 30px;
  color: ${(props) => (props.htmlFor ? "white" : "#F65261")};
`;

const StyledFormLabelRight = styled(Label)`
  width: 301px;
`;

const StyledFormLabelTextarea = styled(Label)`
  width: 100%;
`;

const StyledTextarea = styled(InputTextarea)`
  height: 197px;
  width: 100%;
`;

const StyledFormButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

const StyledFormButtonReset = styled.button`
  cursor: pointer;
  padding: 16px 57px;
  border: 1.5px solid #f65261;
  border-radius: 4px;
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #f65261;
  margin-right: 13px;
  background: transparent;
`;

const StyledFormButtonSubmit = styled.button`
  cursor: pointer;
  padding: 16px 48px;
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
  border: none;
`;

const genreOptions = [
  { name: "Crime" },
  { name: "Documentary" },
  { name: "Horror" },
  { name: "Comedy" },
];

const FormMovieAdd = ({ initialData, title, handleSubmit: _handleSubmit }) => {
  const [model, setModel] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    _handleSubmit(model);
  };

  return (
    <StyledFormWrapper>
      <StyledFormTitle>{title}</StyledFormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormRows>
          <StyledFormRow>
            <StyledFormLabelLeft htmlFor="title" title="TITLE">
              <InputText
                id="title"
                value={model.title}
                onChange={(e) => setModel({ ...model, title: e.target.value })}
              />
            </StyledFormLabelLeft>
            <StyledFormLabelRight htmlFor="release-date" title="RELEASE DATE">
              <InputText
                id="release-date"
                value={model.releaseDate}
                placeholder="Select Date"
                onChange={(e) =>
                  setModel({ ...model, releaseDate: e.target.value })
                }
              />
            </StyledFormLabelRight>
          </StyledFormRow>
          <StyledFormRow>
            <StyledFormLabelLeft htmlFor="movie-url" title="MOVIE URL">
              <InputText
                id="movie-url"
                value={model.movieUrl}
                placeholder="https://"
                onChange={(e) =>
                  setModel({ ...model, movieUrl: e.target.value })
                }
              />
            </StyledFormLabelLeft>
            <StyledFormLabelRight htmlFor="rating" title="RATING">
              <InputText
                id="rating"
                value={model.rating}
                placeholder="7.8"
                onChange={(e) => setModel({ ...model, rating: e.target.value })}
              />
            </StyledFormLabelRight>
          </StyledFormRow>
          <StyledFormRow>
            <StyledFormLabelLeft htmlFor="genre" title="GENRE">
              <GenreSelect
                genres={genreOptions}
                onSelect={(e) => setModel({ ...model, genre: e })}
              />
            </StyledFormLabelLeft>
            <StyledFormLabelRight htmlFor="runtime" title="RUNTIME">
              <InputText
                id="runtime"
                value={model.runtime}
                placeholder="minutes"
                onChange={(e) =>
                  setModel({ ...model, runtime: e.target.value })
                }
              />
            </StyledFormLabelRight>
          </StyledFormRow>
          <StyledFormRow>
            <StyledFormLabelTextarea htmlFor="overview" title="OVERVIEW">
              <StyledTextarea
                id="overview"
                value={model.overview}
                placeholder="Movie description"
                onChange={(e) =>
                  setModel({ ...model, overview: e.target.value })
                }
              />
            </StyledFormLabelTextarea>
          </StyledFormRow>
        </StyledFormRows>
        <StyledFormButtons>
          <StyledFormButtonReset>RESET</StyledFormButtonReset>
          <StyledFormButtonSubmit>SUBMIT</StyledFormButtonSubmit>
        </StyledFormButtons>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default FormMovieAdd;
