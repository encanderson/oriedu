import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Grid, TextField } from "@material-ui/core";
import { PlusOne, BookmarkAdd } from "@material-ui/icons";

import SubCard from "@src/components/cards/SubCard";
import { gridSpacing, ADD_STUDENT } from "@src/store";
import ButtonSecondary from "@src/components/buttons/ButtonSecondary";
import AutoComplete from "@src/components/AutoComplete";
import SecondaryAction from "@src/components/cards/CardSecondaryAction";
import HistoryComponent from "./components/HistoryComponent";
import { dispatchMessage, validateNext } from "@src/utils";
import ConfirmComponent from "@src/components/ConfirmComponent";

const SchoolHistory = ({ handleForms, handleBack }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);

  const [years, setYears] = React.useState(student?.history || []);
  const [year, setYear] = React.useState(null);
  const [discipline, setDiscipline] = React.useState(null);

  const handleYear = () => {
    const verify = validateNext(year, ["school", "year", "class", "situation"]);

    if (!verify) {
      dispatch(dispatchMessage("Preencha todos os dados", "error"));

      return;
    }

    if (!year?.disciplines?.length) {
      dispatch(dispatchMessage("Adicione as disciplinas", "error"));

      return;
    }

    setYears([...years, year]);

    setYear(null);
  };

  const handleDisciplines = () => {
    if (!year) {
      dispatch(dispatchMessage("Preencha os dados 'Série/Turma'", "error"));

      return;
    }
    const verify = validateNext(discipline, ["name", "score"]);

    if (!verify) {
      dispatch(
        dispatchMessage("Preencha o nome da disciplina e a nota", "error")
      );

      return;
    }

    const array = { ...year };

    if (array?.disciplines) {
      array.disciplines = [...array.disciplines, discipline];
    } else {
      array.disciplines = [discipline];
    }

    setYear(array);

    setDiscipline(null);
  };

  const handleWithoutHistory = () => {
    dispatch({
      type: ADD_STUDENT,
      payload: {
        forms: {
          ...student,
          history: [],
        },
      },
    });

    handleForms();
  };

  const handleNext = () => {
    if (!years?.length) {
      setOpen(true);
      return;
    }

    dispatch({
      type: ADD_STUDENT,
      payload: {
        forms: {
          ...student,
          history: years,
        },
      },
    });

    handleForms();
  };

  const [open, setOpen] = React.useState(false);
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <form>
      <ConfirmComponent
        open={open}
        handleCloseDialog={handleCloseDialog}
        message={"Nenhum histórico a ser adicionado?"}
        handleAction={handleWithoutHistory}
      />
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={12}>
          <SubCard
            title={"Nova Série/Turma"}
            secondary={
              <SecondaryAction
                title={"Adicionar"}
                icon={<PlusOne />}
                handleAction={() => handleYear()}
              />
            }
          >
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={12}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Escola"
                  variant="outlined"
                  value={year?.school || ""}
                  onChange={(event) => {
                    setYear({
                      ...year,
                      school: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Ano"
                  variant="outlined"
                  value={year?.year || ""}
                  onChange={(event) => {
                    setYear({
                      ...year,
                      year: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Série/Turma"
                  variant="outlined"
                  value={year?.class || ""}
                  onChange={(event) => {
                    setYear({
                      ...year,
                      class: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <AutoComplete
                  options={["Aprovado", "Reprovado"]}
                  handleChange={(_, value) => {
                    setYear({
                      ...year,
                      situation: value,
                    });
                  }}
                  value={year?.situation}
                  placeholder={year?.situation || "Situação"}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <SubCard
                  title={"Adicionar Disciplina"}
                  secondary={
                    <SecondaryAction
                      title={"Adicionar"}
                      icon={<BookmarkAdd />}
                      handleAction={() => handleDisciplines()}
                    />
                  }
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                      <TextField
                        autoComplete="none"
                        fullWidth
                        label="Disciplina"
                        variant="outlined"
                        value={discipline?.name || ""}
                        onChange={(event) => {
                          setDiscipline({
                            ...discipline,
                            name: event.target.value,
                          });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        autoComplete="none"
                        fullWidth
                        label="Nota"
                        variant="outlined"
                        value={discipline?.score || ""}
                        onChange={(event) => {
                          setDiscipline({
                            ...discipline,
                            score: event.target.value,
                          });
                        }}
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
                        value={discipline?.comments || ""}
                        onChange={(event) => {
                          setDiscipline({
                            ...discipline,
                            comments: event.target.value,
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
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            {years.length ? (
              years.map((item, index) => {
                return (
                  <Grid item xs={12} md={4} key={index}>
                    <HistoryComponent
                      item={item}
                      array={years}
                      setState={setYears}
                      setYear={setYear}
                      index={index}
                    />
                  </Grid>
                );
              })
            ) : (
              <div></div>
            )}
          </Grid>
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
