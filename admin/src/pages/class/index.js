import React from "react";
import { useDispatch } from "react-redux";

import { Grid, TextField, Button } from "@material-ui/core";

import MainCard from "@src/components/cards/MainCard";
import { gridSpacing } from "@src/store/constant";
import AutoComplete from "@src/components/AutoComplete";
import { SNACKBAR_OPEN } from "@src/store/actions";
import useAuth from "@src/hooks/useAuth";
import { shifts, elementary, kindergarten } from "@src/store/constant";

import { SchoolServices } from "@src/services";

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
        dispatch({
          type: SNACKBAR_OPEN,
          open: true,
          message: "Por favor, verifique todos os dados",
          variant: "alert",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          alertSeverity: "error",
          close: false,
        });

        verify = false;
      }
    });

    if (verify) {
      const resp = await SchoolServices.createClass(data);
      if (resp) {
        setClasses({
          modality: "",
          shift: "",
          class: "",
          school_id: user?.school_id,
          subjects: [],
        });
        dispatch({
          type: SNACKBAR_OPEN,
          open: true,
          message: "Turma adicionada",
          variant: "alert",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          alertSeverity: "success",
          close: false,
        });
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
              label={"Modalidade de Ensino"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AutoComplete
              options={shifts}
              handleChange={handleShift}
              label={"Turno"}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              autoComplete="none"
              label="Série/Turma"
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
          <Grid item xs={2}>
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
