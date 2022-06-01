import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Grid, TextField } from "@material-ui/core";

// project imports
import SubCard from "@src/components/cards/SubCard";
import { gridSpacing } from "@src/store/constant";
import TextMaskCExpDate from "@src/utils/Mask";
import AutoComplete from "@src/components/AutoComplete";
import AutoCompleteOptions from "@src/components/AuCompleteOptions";
import ButtonSecondary from "@src/components/buttons/ButtonSecondary";
import { ADD_EMPLOYEE } from "@src/store/actions";
import { states } from "@src/store/constant";

import { getCities } from "@src/api";
import { validateNext, dispatchMessage } from "@src/utils";

//-----------------------|| PROFILE 3 - PROFILE ||-----------------------//

const Contacts = ({ handleForms, handleBack }) => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee.employee);

  const [cities, setCities] = React.useState([]);
  const [city, setCity] = React.useState(null);
  const [form, setForm] = React.useState(null);

  const handleState = async (_, value) => {
    setCity(null);

    dispatch({
      type: ADD_EMPLOYEE,
      payload: {
        forms: {
          ...employee,
          state: value.value,
        },
      },
    });

    setForm({
      ...form,
      state: value.value,
    });

    const response = await getCities(value?.value);

    if (response) {
      setCities(response);
    }
  };

  const handleCity = (_, value) => {
    setCity(value);

    dispatch({
      type: ADD_EMPLOYEE,
      payload: {
        forms: {
          ...employee,
          city: value,
        },
      },
    });

    setForm({
      ...form,
      city: value,
    });
  };

  const handleNext = () => {
    const obj = validateNext(employee, [
      "street",
      "number",
      "zip",
      "district",
      "city",
      "state",
      "email",
      "phone",
    ]);

    if (!obj) {
      dispatch(dispatchMessage("Preencha todos os campos", "error"));
    } else {
      handleForms();
    }
  };

  return (
    <form>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={12} lg={8}>
          <SubCard title={"Endereço"}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={10}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Endereço"
                  variant="outlined"
                  value={employee?.street || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          street: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      street: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Número"
                  variant="outlined"
                  value={employee?.number || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          number: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      number: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Complemento"
                  variant="outlined"
                  value={employee?.complemento || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          complemento: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      complemento: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Bairro"
                  variant="outlined"
                  value={employee?.district || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          district: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      district: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Cep"
                  variant="outlined"
                  value={employee?.zip || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          zip: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      zip: event.target.value,
                    });
                  }}
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
                <AutoCompleteOptions
                  handleChange={handleState}
                  options={states}
                  placeholder={employee?.state || "Estado"}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <AutoComplete
                  handleChange={handleCity}
                  options={cities}
                  value={city}
                  placeholder={employee?.city || "Cidade"}
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item sm={6} md={4}>
          <SubCard>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Email"
                  variant="outlined"
                  value={employee?.email || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          email: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
                      email: event.target.value,
                    });
                  }}
                />{" "}
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Telefone"
                  variant="outlined"
                  value={employee?.phone || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          phone: event.target.value,
                        },
                      },
                    });
                    setForm({
                      ...form,
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
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleNext();
                }}
              >
                Próximo
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Contacts;
