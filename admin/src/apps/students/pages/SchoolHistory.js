import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Grid, TextField } from "@material-ui/core";
import { PlusOne, BookmarkAdd } from "@material-ui/icons";

import SubCard from "@src/components/cards/SubCard";
import { gridSpacing, ADD_STUDENT } from "@src/store";
import ButtonSecondary from "@src/components/buttons/ButtonSecondary";
import AutoComplete from "@src/components/AutoComplete";
import SecondaryAction from "@src/components/cards/CardSecondaryAction";

const SchoolHistory = ({ handleForms, handleBack }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);

  const handleNext = () => {};

  return (
    <form>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={12}>
          <SubCard
            title={"Nova Série/Turma"}
            secondary={
              <SecondaryAction
                title={"Adicionar"}
                icon={<PlusOne />}
                handleAction={() => console.log("first")}
              />
            }
          >
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Ano"
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
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Série/Turma"
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
              <Grid item xs={12} md={12}>
                <SubCard
                  title={"Adicionar Disciplina"}
                  secondary={
                    <SecondaryAction
                      title={"Adicionar"}
                      icon={<BookmarkAdd />}
                      handleAction={() => console.log("first")}
                    />
                  }
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        autoComplete="none"
                        fullWidth
                        label="Disciplina"
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
                    <Grid item xs={12} md={3}>
                      <TextField
                        autoComplete="none"
                        fullWidth
                        label="Nota"
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
                    <Grid item xs={12} md={3}>
                      <AutoComplete
                        options={["Aprovado", "Reprovado"]}
                        handleChange={(_, value) => {
                          console.log(value);
                        }}
                        placeholder={student?.approved || "Situação"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="none"
                        fullWidth
                        multiline
                        maxRows={15}
                        minRows={3}
                        label="Observações"
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
                  </Grid>
                </SubCard>
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

export default SchoolHistory;
