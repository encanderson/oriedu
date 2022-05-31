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
import { getCities } from "@src/api/getCities";
import { EDIT_USER } from "@src/store/actions";
import { states } from "@src/store/constant";
import TextMaskCExpDate from "@src/utils/Mask";
import { schoolModalities } from "@src/store/constant";
import { initSchoolService } from "../../services/SchoolServices";
import { dispatchMessage } from "@src/utils";

import { useAuth, useApp } from "@src/hooks";

const Company = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();
  const { handleSetProfile } = useApp();

  const [city, setCity] = React.useState(null);
  const [cities, setCities] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleSubmit = async () => {
    const data = {
      contacts: user?.contacts,
      address: user?.address,
      school_id: user?.school_id,
    };

    const { service } = await initSchoolService(null, "PUT");

    const response = await service.update(data);

    if (response) {
      dispatch(
        dispatchMessage("Atualização realizada com sucesso!", "success")
      );
      window.localStorage.setItem("profile", true);
      handleSetProfile();
    } else {
      dispatch(
        dispatchMessage("Ocorreu um erro, por favor, tente mais tarde", "error")
      );
    }
  };

  const handleStateChange = async (_, value) => {
    dispatch({
      type: EDIT_USER,
      payload: {
        user: {
          ...user,
          address: {
            ...user.address,
            state: value?.value,
          },
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
          address: {
            ...user.address,
            city: value,
          },
        },
      },
    });
  };

  const handleModalities = async (_, value) => {
    if (!value.length) {
      return;
    }

    const data = {
      contacts: user?.contacts,
      address: user?.address,
      school_id: user?.school_id,
      modalities: value,
    };

    const { service } = await initSchoolService(null, "PUT");

    await service.update(data);
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
                  disabled={true}
                  autoComplete="none"
                  label="Nome da Escola"
                  variant="outlined"
                  value={user?.school?.fantasia || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          school: {
                            ...user.school,
                            fantasia: event.target.value,
                          },
                        },
                      },
                    })
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  id="cnpj"
                  fullWidth
                  disabled={true}
                  autoComplete="none"
                  label="CNPJ"
                  variant="outlined"
                  value={user?.school?.cnpj || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          school: {
                            ...user.school,
                            cnpj: event.target.value,
                          },
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

              <Grid item xs={12} md={12} lg={6}>
                <SubCard title={"Endereço"}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={10}>
                      <TextField
                        fullWidth
                        disabled={isDisabled}
                        autoComplete="none"
                        label="Endereço"
                        variant="outlined"
                        value={user?.address?.street || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                address: {
                                  ...user.address,
                                  street: event.target.value,
                                },
                              },
                            },
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <TextField
                        fullWidth
                        disabled={isDisabled}
                        autoComplete="none"
                        label="Número"
                        variant="outlined"
                        value={user?.address?.number || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                address: {
                                  ...user.address,
                                  number: event.target.value,
                                },
                              },
                            },
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        disabled={isDisabled}
                        autoComplete="none"
                        label="Complemento"
                        variant="outlined"
                        value={user?.address?.complemento || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                address: {
                                  ...user.address,
                                  complemento: event.target.value,
                                },
                              },
                            },
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        disabled={isDisabled}
                        autoComplete="none"
                        label="Bairro"
                        variant="outlined"
                        value={user?.address?.district || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                address: {
                                  ...user.address,
                                  district: event.target.value,
                                },
                              },
                            },
                          })
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        disabled={isDisabled}
                        fullWidth
                        autoComplete="none"
                        label="Cep"
                        variant="outlined"
                        value={user?.address?.zip || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                address: {
                                  ...user.address,
                                  zip: event.target.value,
                                },
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
                            placeholder={user?.address?.state}
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
                        options={cities}
                        getOptionLabel={(value) => value}
                        getOptionSelected={(option, value) => option === value}
                        value={city}
                        onChange={handleSelectCity}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder={user?.address?.city}
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
              <Grid item xs={12} md={12} lg={6}>
                <SubCard title={"Contatos"}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <TextField
                        fullWidth
                        disabled={isDisabled}
                        autoComplete="none"
                        label="email"
                        variant="outlined"
                        value={user?.contacts?.email || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                contacts: {
                                  ...user.contacts,
                                  email: event.target.value,
                                },
                              },
                            },
                          })
                        }
                      />
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <TextField
                        disabled={isDisabled}
                        fullWidth
                        autoComplete="none"
                        label="Telefone"
                        variant="outlined"
                        value={user?.contacts?.phone || ""}
                        onChange={(event) =>
                          dispatch({
                            type: EDIT_USER,
                            payload: {
                              user: {
                                ...user,
                                contacts: {
                                  ...user.contacts,
                                  phone: event.target.value,
                                },
                              },
                            },
                          })
                        }
                        inputProps={{
                          mask: [
                            /[0-9]/,
                            /[0-9]/,
                            " ",
                            /[0-9]/,
                            /[0-9]/,
                            /[0-9]/,
                            /[0-9]/,
                            " ",
                            /[0-9]/,
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

              <Grid item xs={12} md={12} lg={6}>
                <Autocomplete
                  hidden={isDisabled}
                  multiple
                  disabled={isDisabled}
                  options={schoolModalities}
                  getOptionLabel={(option) => option}
                  onChange={handleModalities}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={
                        "Quais as modalidades de ensino? * Pode escolher mais de uma"
                      }
                    />
                  )}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      pr: "30px !important",
                    },
                  }}
                />
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
                          handleSubmit();
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
