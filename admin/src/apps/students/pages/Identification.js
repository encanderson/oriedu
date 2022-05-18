import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Grid, TextField } from "@material-ui/core";

import SubCard from "@src/components/cards/SubCard";
import TextMaskCExpDate from "@src/utils/Mask";
import { gridSpacing, ADD_STUDENT, ethnic, gender } from "@src/store";
import { convertToDate, formatDate } from "@src/utils";
import AutoComplete from "@src/components/AutoComplete";

import { validateNext, dispatchMessage } from "@src/utils";

const Identification = ({ handleForms }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  const [birthday, setBirthday] = React.useState(formatDate(student?.birthday));

  const handleEthnic = (_, value) => {
    dispatch({
      type: ADD_STUDENT,
      payload: {
        forms: {
          ...student,
          ethnic: value,
        },
      },
    });
  };

  const handleGender = (_, value) => {
    dispatch({
      type: ADD_STUDENT,
      payload: {
        forms: {
          ...student,
          gender: value,
        },
      },
    });
  };

  const handleNext = () => {
    const obj = validateNext(student, [
      "name",
      "birthday",
      "ethnic",
      "gender",
      "nationality",
      "naturalness",
    ]);

    if (!obj) {
      dispatch(dispatchMessage("Preencha todos os campos", "error"));
    } else {
      handleForms();
    }
  };

  return (
    <form>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={8}>
          <SubCard>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={8}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Nome"
                  variant="outlined"
                  value={student?.name || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          name: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Nascimento"
                  variant="outlined"
                  value={birthday || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          birthday: convertToDate(event.target.value),
                        },
                      },
                    });
                    setBirthday(event.target.value);
                  }}
                  inputProps={{
                    mask: [
                      /[0-9]/,
                      /[0-9]/,
                      "-",
                      /[0-9]/,
                      /[0-9]/,
                      "-",
                      /[0-9]/,
                      /[0-9]/,
                      /[0-9]/,
                      /[0-9]/,
                    ],
                    showMask: false,
                  }}
                  InputProps={{
                    defaultValue: "",
                    inputComponent: TextMaskCExpDate,
                  }}
                />{" "}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Nacionalidade"
                  variant="outlined"
                  value={student?.nationality || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          nationality: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Naturalidade"
                  variant="outlined"
                  value={student?.naturalness || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          naturalness: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <SubCard>
            <Grid item xs={12} md={12}>
              <AutoComplete
                options={ethnic}
                handleChange={handleEthnic}
                placeholder={student?.ethnic || "Raça ou Cor"}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <AutoComplete
                options={gender}
                handleChange={handleGender}
                placeholder={student?.gender || "Gênero"}
              />
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleNext}>
                Próximo
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Identification;
