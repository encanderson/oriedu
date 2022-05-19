import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Button, Typography, TextField } from "@material-ui/core";

import { gridSpacing, ADD_STUDENT } from "@src/store";
import SubCard from "@src/components/cards/SubCard";
import AutoCompleteClass from "./components/ClassesComponent";
import ButtonSecondary from "@src/components/buttons/ButtonSecondary";
import AutoComplete from "@src/components/AutoComplete";

import useAuth from "@src/hooks/useAuth";
import { initClassService } from "@src/apps/class/services";
import { validateNext, dispatchMessage } from "@src/utils";

const YearSituation = ({ handleForms, handleBack }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  const { user } = useAuth();

  const [modality, setModality] = React.useState("Escolha uma Turma");
  const [classes, setClasses] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      if (user?.school_id) {
        const { service } = await initClassService(user.school_id, "GET");

        const response = await service.getClasses();

        if (response.status === 200) {
          setClasses(response.data);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClass = (_, value) => {
    if (value?.class) {
      const index = classes.findIndex((item) => {
        return item.class === value.class;
      });

      setModality(classes[index].modality);

      dispatch({
        type: ADD_STUDENT,
        payload: {
          forms: {
            ...student,
            modality: classes[index].modality,
            class: value.class,
            classId: classes[index].id,
          },
        },
      });
    } else {
      setModality("Escolha uma Turma");

      dispatch({
        type: ADD_STUDENT,
        payload: {
          forms: {
            ...student,
            modality: null,
            class: null,
          },
        },
      });
    }
  };

  const handleNext = () => {
    const obj = validateNext(student, ["class", "fee", "modality"]);

    if (!obj) {
      dispatch(dispatchMessage("Preencha todos os campos", "error"));
    } else {
      handleForms();
    }
  };

  return (
    <form>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={12}>
          <SubCard>
            <Grid container spacing={2} justifyContent={"space-between"}>
              <Grid item xs={12} md={6}>
                {classes.length ? (
                  <AutoCompleteClass
                    options={classes}
                    handleChange={handleClass}
                    placeholder={student?.class || "Série/Turma"}
                  />
                ) : (
                  <div></div>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Valor da Mensalidade"
                  variant="outlined"
                  value={student?.fee || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          fee: event.target.value.replace(",", "."),
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">{modality}</Typography>
                <Typography variant="subtitle2">
                  Modalidade de Ensino
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <AutoComplete
                  options={["Manhã", "Tarde"]}
                  handleChange={(_, value) => {
                    dispatch({
                      type: ADD_STUDENT,
                      payload: {
                        forms: {
                          ...student,
                          shift: value,
                        },
                      },
                    });
                  }}
                  placeholder={student?.shift || "Turno"}
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

export default YearSituation;
