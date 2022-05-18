import React from "react";

import { Button, Grid, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import SubCard from "@src/components/cards/SubCard";
import TextMaskCExpDate from "@src/utils/Mask";
import ButtonSecondary from "@src/components/buttons/ButtonSecondary";
import { gridSpacing, ADD_STUDENT } from "@src/store";
import {
  convertToDate,
  formatDate,
  validateNext,
  dispatchMessage,
} from "@src/utils";

const Docs = ({ handleForms, handleBack }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  const [dateRegister, setDateRegister] = React.useState(
    formatDate(student?.dateRegister)
  );

  const handleNext = () => {
    const obj = validateNext(student, [
      "page",
      "term",
      "number",
      "registry",
      "dateRegister",
      "cpf",
      "rg",
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
          <SubCard title={"Registro de Nascimento"}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={4}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Número da Folha"
                  variant="outlined"
                  value={student?.page || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          page: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Termo"
                  variant="outlined"
                  value={student?.term || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          term: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Número do Livro"
                  variant="outlined"
                  value={student?.number || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          number: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Cartório"
                  variant="outlined"
                  value={student?.registry || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          registry: event.target.value,
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
                  label="Data de Registro"
                  variant="outlined"
                  value={dateRegister || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          dateRegister: convertToDate(event.target.value),
                        },
                      },
                    });
                    setDateRegister(event.target.value);
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
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <SubCard>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="CPF"
                  variant="outlined"
                  value={student?.cpf || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          cpf: event.target.value,
                        },
                      },
                    });
                  }}
                  inputProps={{
                    mask: [
                      /[0-9]/,
                      /[0-9]/,
                      /[0-9]/,
                      ".",
                      /[0-9]/,
                      /[0-9]/,
                      /[0-9]/,
                      ".",
                      /[0-9]/,
                      /[0-9]/,
                      /[0-9]/,
                      "-",
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
              <Grid item xs={12} md={12}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="RG"
                  variant="outlined"
                  value={student?.rg || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          rg: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="NIS"
                  variant="outlined"
                  value={student?.nis || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          nis: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="INEP"
                  variant="outlined"
                  value={student?.inep || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          inep: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <ButtonSecondary
                onClick={() => {
                  handleBack();
                }}
                title={"Voltar"}
              />
            </Grid>
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

export default Docs;
