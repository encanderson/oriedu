import React from "react";
import { useDispatch } from "react-redux";

import { Grid, TextField, Button } from "@material-ui/core";

import MainCard from "@src/components/cards/MainCard";
import { gridSpacing } from "@src/store/constant";
import AutoComplete from "@src/components/AutoComplete";
import useAuth from "@src/hooks/useAuth";
import { shifts, elementary, kindergarten } from "@src/store/constant";

import { initClassService } from "../services";
import { dispatchMessage } from "@src/utils";

const ClassRegister = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [modalities, setModalities] = React.useState([]);
  const [classes, setClasses] = React.useState({
    modality: "",
    shift: "",
    class: "",
    school_id: user?.school_id,
    subjects: [],
  });

  React.useEffect(() => {
    (() => {
      setModalities(user?.modalities);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModality = (_, value) => {
    setClasses({
      ...classes,
      modality: value,
    });
  };

  const handleShift = (_, value) => {
    setClasses({
      ...classes,
      shift: value,
    });
  };

  const handleSubmit = async () => {
    let data = {};
    if (classes.modality === "Ensino Infantil") {
      data = {
        ...classes,
        subjects: kindergarten,
      };
    } else {
      data = {
        ...classes,
        subjects: elementary,
      };
    }

    let verify = true;
    Object.keys(data).forEach((key) => {
      if (!data[key]) {
        dispatch(
          dispatchMessage("Por favor, verifique todos os dados", "error")
        );

        verify = false;
      }
    });

    if (verify) {
      const { service } = await initClassService(null, "POST");

      const response = await service.create(data);

      if (response.status === 204) {
        setClasses({
          modality: "",
          shift: "",
          class: "",
          school_id: user?.school_id,
          subjects: [],
        });
        dispatch(dispatchMessage("Turma adicionada", "success"));
      } else {
        dispatch(dispatchMessage(response.data.message), "error");
      }
    }
  };

  return (
    <MainCard title={"Registrar turma"}>
      <form>
        <Grid
          container
          spacing={gridSpacing}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={6}>
            <AutoComplete
              options={modalities}
              handleChange={handleModality}
              placeholder={classes.modality || "Modalidade de Ensino"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoComplete
              options={shifts}
              handleChange={handleShift}
              placeholder={classes.shift || "Turno"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              autoComplete="none"
              label="S??rie/Turma"
              variant="outlined"
              value={classes.class || ""}
              onChange={(event) => {
                setClasses({
                  ...classes,
                  class: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default ClassRegister;
