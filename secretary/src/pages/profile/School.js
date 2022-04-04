import React from "react";

import { useDispatch } from "react-redux";

import {
  Autocomplete,
  Button,
  CardActions,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";

// project imports
import SubCard from "@src/components/cards/SubCard";
import { gridSpacing } from "@src/store/constant";
import { activities, categories } from "@src/store/constant";
import { getCities } from "@src/api/getCities";
import { EDIT_USER, SNACKBAR_OPEN } from "@src/store/actions";
import { states } from "@src/store/constant";
import TextMaskCExpDate from "@src/utils/Mask";
// import { updateProfile } from "@src/api";

import useAuth from "@src/hooks/useAuth";

const Company = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const [city, setCity] = React.useState(null);
  const [cities, setCities] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleSubmit = async (action) => {
    const data = {
      id: user?.id,
      action: action,
      activity: user?.activity,
      city: user?.city,
      cnpj: user?.cnpj,
      contacts: user?.contacts,
      complemento: user?.complemento,
      description: user?.description,
      district: user?.district,
      fantasia: user?.fantasia,
      number: user?.number,
      categories: user?.categories,
      state: user?.state,
      street: user?.street,
      zip: user?.zip,
    };
    // const response = await updateProfile(data);
    if ("response.status" === 200) {
      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message: "Atualização realizada com sucesso!",
        variant: "alert",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        alertSeverity: "success",
        close: true,
      });
    } else {
      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message: "response.message",
        variant: "alert",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        alertSeverity: "error",
        close: true,
      });
    }
  };

  const handleStateChange = async (_, value) => {
    dispatch({
      type: EDIT_USER,
      payload: {
        user: {
          ...user,
          state: value?.value,
        },
      },
    });

    setCity(null);

    const cityList = await getCities(value?.value);
    setCities(cityList);
  };

  const handleSelectCity = (_, value) => {
    setCity(value);
    dispatch({
      type: EDIT_USER,
      payload: {
        user: {
          ...user,
          city: value,
        },
      },
    });
  };

  const handleActivity = (_, value) => {
    dispatch({
      type: EDIT_USER,
      payload: {
        user: {
          ...user,
          activity: value?.value,
        },
      },
    });
  };

  const handleCategories = (_, value) => {
    dispatch({
      type: EDIT_USER,
      payload: {
        user: {
          ...user,
          categories: value,
        },
      },
    });
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item sm={12} md={12}>
        <SubCard title="Empresa">
          <form>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="fantasia"
                  fullWidth
                  disabled={isDisabled}
                  autoComplete="none"
                  label="Nome da Empresa"
                  variant="outlined"
                  value={user?.fantasia || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          fantasia: event.target.value,
                        },
                      },
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  autoSelect={true}
                  disabled={isDisabled}
                  id="activity"
                  style={{ marginBottom: 8 }}
                  options={activities}
                  getOptionLabel={(uf) => uf.label}
                  getOptionSelected={(option, value) =>
                    option.value === value.value
                  }
                  onChange={handleActivity}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder={user?.activity || "Atividade Principal"}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="cnpj"
                  fullWidth
                  disabled={isDisabled}
                  autoComplete="none"
                  label="CNPJ"
                  variant="outlined"
                  value={user?.cnpj || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          cnpj: event.target.value,
                        },
                      },
                    })
                  }
                  inputProps={{
                    mask: [
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
                      "/",
                      /[0-9]/,
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
              <Grid item xs={12} md={6}>
                <Autocomplete
                  multiple
                  disabled={isDisabled}
                  options={categories}
                  getOptionLabel={(option) => option}
                  onChange={handleCategories}
                  renderInput={(params) => (
                    <TextField {...params} label={"Categorias *"} />
                  )}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      pr: "30px !important",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  id="description"
                  maxLength="10"
                  fullWidth
                  disabled={isDisabled}
                  autoComplete="none"
                  label="Breve descrição"
                  variant="outlined"
                  value={user?.description || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          description: event.target.value,
                        },
                      },
                    })
                  }
                  inputProps={{ maxLength: 100 }}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <SubCard title={"Endereço"}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={10}>
                      <TextField
                        id="street"
                        fullWidth
                        disabled={isDisabled}
                        autoComplete="none"
                        label="Endereço"
                        variant="outlined"
                        value={user?.street || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                street: event.target.value,
                              },
                            },
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        id="number"
                        fullWidth
                        disabled={isDisabled}
                        autoComplete="none"
                        label="Número"
                        variant="outlined"
                        value={user?.number || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                number: event.target.value,
                              },
                            },
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="complement"
                        fullWidth
                        disabled={isDisabled}
                        autoComplete="none"
                        label="Complemento"
                        variant="outlined"
                        value={user?.complemento || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                complemento: event.target.value,
                              },
                            },
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="district"
                        fullWidth
                        disabled={isDisabled}
                        autoComplete="none"
                        label="Bairro"
                        variant="outlined"
                        value={user?.district || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                district: event.target.value,
                              },
                            },
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="zip"
                        disabled={isDisabled}
                        fullWidth
                        autoComplete="none"
                        label="Cep"
                        variant="outlined"
                        value={user?.zip || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                zip: event.target.value,
                              },
                            },
                          })
                        }
                        inputProps={{
                          mask: [
                            /[0-9]/,
                            /[0-9]/,
                            ".",
                            /[0-9]/,
                            /[0-9]/,
                            /[0-9]/,
                            "-",
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
                    <Grid item xs={12} md={4}>
                      <Autocomplete
                        autoSelect={true}
                        disabled={isDisabled}
                        id="stateComnpany"
                        style={{ marginBottom: 8 }}
                        options={states}
                        getOptionLabel={(uf) => uf.label}
                        getOptionSelected={(option, value) =>
                          option.value === value.value
                        }
                        onChange={handleStateChange}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            placeholder={user?.state}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Autocomplete
                        autoSelect={true}
                        disabled={isDisabled}
                        id="cityCompany"
                        options={cities}
                        getOptionLabel={(value) => value}
                        getOptionSelected={(option, value) => option === value}
                        value={city}
                        onChange={handleSelectCity}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder={user?.city}
                            variant="outlined"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </SubCard>
              </Grid>
            </Grid>
            <Divider style={{ marginTop: "20px" }} />
            <CardActions>
              <Grid
                item
                xs={12}
                md={12}
                display="flex"
                flexDirection="row-reverse"
              >
                {isDisabled ? (
                  <Grid item xs={2}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setIsDisabled(!isDisabled);
                      }}
                    >
                      Editar
                    </Button>
                  </Grid>
                ) : (
                  <Grid
                    item
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    spacing={2}
                  >
                    <Grid item xs={2}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setIsDisabled(!isDisabled);
                        }}
                      >
                        Cancelar
                      </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        onClick={() => {
                          setIsDisabled(!isDisabled);
                          handleSubmit("company");
                        }}
                      >
                        Salvar
                      </Button>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </CardActions>
          </form>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default Company;
