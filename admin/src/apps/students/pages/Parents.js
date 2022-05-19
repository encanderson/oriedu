import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Grid, TextField } from "@material-ui/core";

import SubCard from "@src/components/cards/SubCard";
import TextMaskCExpDate from "@src/utils/Mask";
import { gridSpacing, ADD_STUDENT } from "@src/store";
import CheckComponent from "@src/components/CheckBox";
import AutoComplete from "@src/components/AutoComplete";
import ParentComponent from "./components/ParentComponent";
import ButtonSecondary from "@src/components/buttons/ButtonSecondary";
import { schooling } from "@src/store/constant";
import { validateNext, dispatchMessage } from "@src/utils";

const Parents = ({ handleForms, handleBack }) => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  const [divorced, setDivorced] = React.useState(false);
  const [socialProgram, setSocialProgram] = React.useState(false);
  const [parents, setParents] = React.useState([]);
  const [parent, setParent] = React.useState({
    name: "",
    job: "",
    workplace: "",
    phone: "",
    email: "",
    schooling: "",
    cpf: "",
    rg: "",
    contract: false,
  });

  React.useEffect(() => {
    dispatch({
      type: ADD_STUDENT,
      payload: {
        forms: {
          ...student,
          divorced: false,
          socialProgram: false,
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckDivorced = () => {
    setDivorced(!divorced);
    dispatch({
      type: ADD_STUDENT,
      payload: {
        forms: {
          ...student,
          divorced: !divorced,
        },
      },
    });
  };

  const handleCheckSocial = () => {
    setSocialProgram(!socialProgram);

    dispatch({
      type: ADD_STUDENT,
      payload: {
        forms: {
          ...student,
          socialProgram: !socialProgram,
        },
      },
    });
  };

  const handleSchooling = (_, value) => {
    setParent({
      ...parent,
      schooling: value,
    });
  };

  const handleContract = () => {
    setParent({
      ...parent,
      contract: !parent.contract,
    });
  };

  const handleNext = () => {
    if (student?.parents?.length > 0) {
      handleForms();
    } else {
      dispatch(dispatchMessage("Preencha todos os campos", "error"));
    }
  };

  const handleParents = () => {
    const obj = validateNext(parent, [
      "name",
      "job",
      "workplace",
      "phone",
      "email",
      "schooling",
      "cpf",
      "rg",
    ]);

    if (obj) {
      setParents([...parents, parent]);
      dispatch({
        type: ADD_STUDENT,
        payload: {
          forms: {
            ...student,
            parents: [...parents, parent],
          },
        },
      });

      setParent({
        name: "",
        job: "",
        workplace: "",
        phone: "",
        email: "",
        schooling: "",
        cpf: "",
        rg: "",
        contract: false,
      });
    } else {
      dispatch(dispatchMessage("Preencha todos os campos", "error"));
    }
  };

  return (
    <>
      <form>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item>
                <CheckComponent
                  check={divorced}
                  setCheck={handleCheckDivorced}
                  title={"Pais divorciados?"}
                />
              </Grid>
              <Grid item>
                <CheckComponent
                  check={socialProgram}
                  setCheck={handleCheckSocial}
                  title={"Beneficiário de Programa Social?"}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <SubCard>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="none"
                    fullWidth
                    label="Nome"
                    variant="outlined"
                    value={parent.name || ""}
                    onChange={(event) => {
                      setParent({
                        ...parent,
                        name: event.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    autoComplete="none"
                    fullWidth
                    label="Profissão"
                    variant="outlined"
                    value={parent.job || ""}
                    onChange={(event) => {
                      setParent({
                        ...parent,
                        job: event.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    autoComplete="none"
                    fullWidth
                    label="Local de Trabalho"
                    variant="outlined"
                    value={parent.workplace || ""}
                    onChange={(event) => {
                      setParent({
                        ...parent,
                        workplace: event.target.value,
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
                    value={parent.phone || ""}
                    onChange={(event) => {
                      setParent({
                        ...parent,
                        phone: event.target.value,
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
                <Grid item xs={12} md={6}>
                  <TextField
                    autoComplete="none"
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={parent.email || ""}
                    onChange={(event) => {
                      setParent({
                        ...parent,
                        email: event.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AutoComplete
                    options={schooling}
                    handleChange={handleSchooling}
                    placeholder={parent?.schooling || "Escolaridade"}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CheckComponent
                    check={parent.contract}
                    setCheck={handleContract}
                    title={"Responsável pelo contrato?"}
                  />
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <SubCard>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    fullWidth
                    autoComplete="none"
                    label="CPF"
                    variant="outlined"
                    value={parent.cpf || ""}
                    onChange={(event) => {
                      setParent({
                        ...parent,
                        cpf: event.target.value,
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
                    value={parent.rg || ""}
                    onChange={(event) => {
                      setParent({
                        ...parent,
                        rg: event.target.value,
                      });
                    }}
                  />
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
          <Grid item xs={12}>
            <Grid item marginBottom={5} justifyContent={"flex-end"}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleParents}
              >
                Adicionar
              </Button>
            </Grid>
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Próximo
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {parents.length ? (
            parents.map((item, index) => {
              return (
                <Grid item xs={12} md={6} key={index}>
                  <ParentComponent
                    item={item}
                    index={index}
                    array={parents}
                    setState={setParents}
                  />
                  ;
                </Grid>
              );
            })
          ) : (
            <div></div>
          )}
        </Grid>
      </form>
    </>
  );
};
export default Parents;
