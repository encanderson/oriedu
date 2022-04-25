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
import { EDIT_USER, SNACKBAR_OPEN } from "@src/store/actions";
import { states } from "@src/store/constant";
import TextMaskCExpDate from "@src/utils/Mask";
import { SchoolServices } from "@src/services";

import useAuth from "@src/hooks/useAuth";

const Company = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const [city, setCity] = React.useState(null);
  const [cities, setCities] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleSubmit = async (action) => {
    const data = {
      userId: user?.userId,
      cnpj: user?.school?.cnpj,
      contacts: user?.contacts,
      fantasia: user?.school?.fantasia,
      address: user?.address,
    };

    const response = await SchoolServices.update(data);

    if (response) {
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
        message: "Ocorreu um erro, por favor, tente mais tarde",
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
                  disabled={isDisabled}
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
                        id="street"
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
                        id="number"
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
                        id="complement"
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
                        id="district"
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
                        id="zip"
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
                        id="cityCompany"
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
