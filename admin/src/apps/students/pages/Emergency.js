import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Grid, TextField } from "@material-ui/core";

import SubCard from "@src/components/cards/SubCard";
import { gridSpacing, ADD_STUDENT } from "@src/store";
import AutoComplete from "@src/components/AutoComplete";
import { bloodType } from "@src/store";
import TextMaskCExpDate from "@src/utils/Mask";
import ButtonSecondary from "@src/components/buttons/ButtonSecondary";

import { validateNext, dispatchMessage } from "@src/utils";

const Emergency = ({ handleForms, handleBack }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);

  const handleNext = () => {
    const obj = validateNext(student, [
      "securityHealth",
      "blood",
      "rhFactor",
      "goHomeAlone",
      "responsible",
      "contact",
    ]);

    if (!obj) {
      dispatch(dispatchMessage("Preencha todos os campos", "error"));
    } else {
      if (typeof student.dietaryRestrictions === "string") {
        const dietaryRestrictions = student.dietaryRestrictions
          .split(",")
          .map((item) => {
            return item.trim();
          });
        dispatch({
          type: ADD_STUDENT,
          payload: {
            forms: {
              ...student,
              dietaryRestrictions: dietaryRestrictions,
            },
          },
        });
      }

      if (typeof student.medicationRestrictions === "string") {
        const medicationRestrictions = student.medicationRestrictions
          .split(",")
          .map((item) => {
            return item.trim();
          });
        dispatch({
          type: ADD_STUDENT,
          payload: {
            forms: {
              ...student,
              medicationRestrictions: medicationRestrictions,
            },
          },
        });
      }

      handleForms();
    }
  };

  const handleBlood = (_, value) => {
    dispatch({
      type: ADD_STUDENT,
      payload: {
        forms: {
          ...student,
          blood: value,
        },
      },
    });
  };

  return (
    <form>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Seguro de Saúde"
                  variant="outlined"
                  value={student?.securityHealth || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          securityHealth: event.target.value,
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
                  label="Restrinções Alimentares *"
                  variant="outlined"
                  value={student?.dietaryRestrictions || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          dietaryRestrictions: event.target.value,
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
                  label="Restrinções Medicamentosa *"
                  variant="outlined"
                  value={student?.medicationRestrictions || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          medicationRestrictions: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AutoComplete
                  options={bloodType}
                  handleChange={handleBlood}
                  label={"Tipo Sanguíneo"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AutoComplete
                  options={["-", "+"]}
                  handleChange={(_, value) =>
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          rhFactor: value,
                        },
                      },
                    })
                  }
                  label={"Fator RH"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AutoComplete
                  options={["Sim", "Não"]}
                  handleChange={(_, value) =>
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          goHomeAlone: value,
                        },
                      },
                    })
                  }
                  label={"Pode ir para casa sozinho?"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Contato de Emergência - Nome"
                  variant="outlined"
                  value={student?.responsible || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          responsible: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Telefone"
                  variant="outlined"
                  value={student?.contact || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          contact: event.target.value,
                        },
                      },
                    });
                  }}
                  inputProps={{
                    mask: [
                      /[0-9]/,
                      /[0-9]/,
                      " ",
                      /[0-9]/,
                      /[0-9]/,
                      /[0-9]/,
                      /[0-9]/,
                      /[0-9]/,
                      " ",
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

export default Emergency;
