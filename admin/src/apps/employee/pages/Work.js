import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Grid, TextField } from "@material-ui/core";

// project imports
import SubCard from "@src/components/cards/SubCard";
import { gridSpacing } from "@src/store/constant";
import AutoCompleteClasses from "./AutoCompleteClasses";
import AutoComplete from "@src/components/AutoComplete";
import TextMaskCExpDate from "@src/utils/Mask";
import { ADD_EMPLOYEE } from "@src/store/actions";
import { jobs } from "@src/store/constant";

import useAuth from "@src/hooks/useAuth";
import { SchoolServices } from "@src/services";

//-----------------------|| PROFILE 3 - PROFILE ||-----------------------//

const WorkInfo = ({ handleForms, handleBack }) => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee.employee);

  const { user } = useAuth();
  const [turmas, setTurmas] = React.useState([]);

  const [form, setForm] = React.useState(null);
  const [job, setJob] = React.useState("");

  React.useEffect(() => {
    (async () => {
      if (user?.school_id) {
        const response = await SchoolServices.getClasses(user.school_id);

        if (response.status === 200) {
          setTurmas(response.data);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleJob = (_, value) => {
    setJob(value);

    dispatch({
      type: ADD_EMPLOYEE,
      payload: {
        forms: {
          ...employee,
          job: value,
        },
      },
    });
    setForm({
      ...form,
      job: value,
    });
  };

  const handleClass = (_, value) => {
    const data = value.map((item) => {
      return item.id;
    });

    console.log(data);

    dispatch({
      type: ADD_EMPLOYEE,
      payload: {
        forms: {
          ...employee,
          classes: data,
        },
      },
    });
    setForm({
      ...form,
      classes: data,
    });
  };

  return (
    <form>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={12} lg={12}>
          <SubCard title={"Dados de Pagamentos"}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Banco"
                  variant="outlined"
                  value={employee?.bank || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          bank: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      bank: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Agência"
                  variant="outlined"
                  value={employee?.agency || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          agency: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      agency: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Conta"
                  variant="outlined"
                  value={employee?.count || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          count: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      count: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Salário"
                  variant="outlined"
                  value={employee?.salary || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          salary: event.target.value.replace(",", "."),
                        },
                      },
                    });
                    setForm({
                      ...form,
                      salary: event.target.value.replace(",", "."),
                    });
                  }}
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item sm={6} md={12}>
          <SubCard>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={4}>
                <AutoComplete
                  options={jobs}
                  label={"Cargo"}
                  handleChange={handleJob}
                  placeholder={employee?.job}
                />
              </Grid>
              {job === "Professor" ? (
                <>
                  <Grid item xs={12} md={4}>
                    <AutoCompleteClasses
                      options={turmas}
                      handleChange={handleClass}
                      label={"Série/Turma"}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <SubCard>
                      <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={12}>
                          <TextField
                            fullWidth
                            autoComplete="none"
                            label="Formação - Curso"
                            variant="outlined"
                            value={employee?.course || ""}
                            onChange={(event) => {
                              dispatch({
                                type: ADD_EMPLOYEE,
                                payload: {
                                  forms: {
                                    ...employee,
                                    course: event.target.value,
                                  },
                                },
                              });
                              setForm({
                                ...form,
                                course: event.target.value,
                              });
                            }}
                          />{" "}
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            fullWidth
                            autoComplete="none"
                            label="Data de Conclusão"
                            variant="outlined"
                            value={employee?.finished || ""}
                            onChange={(event) => {
                              dispatch({
                                type: ADD_EMPLOYEE,
                                payload: {
                                  forms: {
                                    ...employee,
                                    finished: event.target.value,
                                  },
                                },
                              });
                              setForm({
                                ...form,
                                finished: event.target.value,
                              });
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
                </>
              ) : (
                <div></div>
              )}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Data de contratação"
                  variant="outlined"
                  value={employee?.hired || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          hired: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      hired: event.target.value,
                    });
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
        <Grid item xs={12}>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Button
                variant="contained"
                color="orange"
                onClick={() => {
                  handleBack();
                }}
              >
                Voltar
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleForms(form, [
                    "bank",
                    "agency",
                    "count",
                    "job",
                    "classes",
                    "course",
                    "finished",
                    "hired",
                  ]);
                }}
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default WorkInfo;
