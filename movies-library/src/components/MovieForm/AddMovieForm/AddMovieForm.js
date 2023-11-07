import React from "react";
import InputText from "../../Commons/InputField/InputField";
import GenreSelect from "../GenreSelector/GenreSelector";
import { Formik } from "formik";
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

export const StyledError = styled.div`
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #f65261;
`;

const genreOptions = ["Crime", "Documentary", "Horror", "Comedy"];

const FormMovieAdd = ({ initialData, title, handleSubmit: _handleSubmit }) => {
  const handleValidate = (values) =>
    Object.keys(values).reduce((errors, key) => {
      if (!values[key]) {
        errors[key] = "Required";
      }
      return errors;
    }, {});

  const handleSubmit = (values, { setSubmitting }) => {
    _handleSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialData}
      validate={handleValidate}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        resetForm,
      }) => (
        <StyledFormWrapper>
          <StyledFormTitle>{title}</StyledFormTitle>
          <StyledForm onSubmit={handleSubmit}>
            <StyledFormRows>
              <StyledFormRow>
                <StyledFormLabelLeft htmlFor="title" title="TITLE">
                  <InputText
                    id="title"
                    value={values.title}
                    onChange={(e) =>
                      setFieldValue("title", e.target.value, true)
                    }
                  />
                  {errors.title && (
                    <StyledError>
                      <>{errors.title}</>
                    </StyledError>
                  )}
                </StyledFormLabelLeft>
                <StyledFormLabelRight
                  htmlFor="release_date"
                  title="RELEASE DATE"
                >
                  <InputText
                    id="release_date"
                    value={values.release_date}
                    // icon={(<CalendarIcon />)}
                    placeholder="Select Date"
                    onChange={(e) =>
                      setFieldValue("release_date", e.target.value, true)
                    }
                  />
                  {errors.releaseDate && (
                    <StyledError>{String(errors.releaseDate)}</StyledError>
                  )}
                </StyledFormLabelRight>
              </StyledFormRow>
              <StyledFormRow>
                <StyledFormLabelLeft htmlFor="poster_path" title="MOVIE URL">
                  <InputText
                    id="poster_path"
                    value={values.poster_path}
                    placeholder="https://"
                    onChange={(e) =>
                      setFieldValue("poster_path", e.target.value, true)
                    }
                  />
                  {errors.movieUrl && (
                    <StyledError>{String(errors.movieUrl)}</StyledError>
                  )}
                </StyledFormLabelLeft>
                <StyledFormLabelRight htmlFor="vote_average" title="RATING">
                  <InputText
                    id="vote_average"
                    value={values.vote_average}
                    placeholder="7.8"
                    onChange={(e) =>
                      setFieldValue(
                        "vote_average",
                        Number(e.target.value),
                        true
                      )
                    }
                  />
                  {errors.vote_average && (
                    <StyledError>{String(errors.vote_average)}</StyledError>
                  )}
                </StyledFormLabelRight>
              </StyledFormRow>
              <StyledFormRow>
                <StyledFormLabelLeft htmlFor="genre" title="GENRE">
                  <GenreSelect
                    genres={genreOptions}
                    onSelect={(e) => setFieldValue("genres", e, true)}
                  />
                  {errors.genre && (
                    <StyledError>{errors.genre.toString()}</StyledError>
                  )}
                </StyledFormLabelLeft>
                <StyledFormLabelRight htmlFor="runtime" title="RUNTIME">
                  <InputText
                    id="runtime"
                    value={values.runtime}
                    placeholder="minutes"
                    onChange={(e) =>
                      setFieldValue("runtime", Number(e.target.value), true)
                    }
                  />
                  {errors.runtime && (
                    <StyledError>{String(errors.runtime)}</StyledError>
                  )}
                </StyledFormLabelRight>
              </StyledFormRow>
              <StyledFormRow>
                <StyledFormLabelTextarea htmlFor="overview" title="OVERVIEW">
                  <StyledTextarea
                    id="overview"
                    value={values.overview}
                    placeholder="Movie description"
                    onChange={(e) =>
                      setFieldValue("overview", e.target.value, true)
                    }
                  />
                  {errors.overview && (
                    <StyledError>{String(errors.overview)}</StyledError>
                  )}
                </StyledFormLabelTextarea>
              </StyledFormRow>
            </StyledFormRows>
            <StyledFormButtons>
              <StyledFormButtonReset type="reset" onClick={() => resetForm()}>
                RESET
              </StyledFormButtonReset>
              <StyledFormButtonSubmit type="submit" disabled={isSubmitting}>
                SUBMIT
              </StyledFormButtonSubmit>
            </StyledFormButtons>
          </StyledForm>
        </StyledFormWrapper>
      )}
    </Formik>
  );
};

export default FormMovieAdd;
