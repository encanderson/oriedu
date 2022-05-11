import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Grid, TextField } from "@material-ui/core";

// project imports
import SubCard from "@src/components/cards/SubCard";
import { gridSpacing } from "@src/store/constant";
import TextMaskCExpDate from "@src/utils/Mask";
import AutoComplete from "@src/components/AutoComplete";
import { ethnic, gender } from "@src/store/constant";
import { convertToDate, formatDate } from "@src/utils";
import { ADD_EMPLOYEE } from "@src/store/actions";
// import useAuth from "@src/hooks/useAuth";

//-----------------------|| PROFILE 3 - PROFILE ||-----------------------//

const Identification = ({ handleForms }) => {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee.employee);
  const [birthday, setBirthday] = React.useState(
    formatDate(employee?.birthday)
  );

  const handleEthnic = (_, value) => {
    dispatch({
      type: ADD_EMPLOYEE,
      payload: {
        forms: {
          ...employee,
          ethnic: value,
        },
      },
    });
  };

  const handleGender = (_, value) => {
    dispatch({
      type: ADD_EMPLOYEE,
      payload: {
        forms: {
          ...employee,
          gender: value,
        },
      },
    });
  };

  return (
    <form>
      <Grid container spacing={gridSpacing}>
        <Grid item sm={6} md={8}>
          <SubCard>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={8}>
                <TextField
                  autoComplete="none"
                  fullWidth
                  label="Nome"
                  variant="outlined"
                  value={employee?.name || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          name: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  label="Nascimento"
                  variant="outlined"
                  value={birthday || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          birthday: convertToDate(event.target.value),
                        },
                      },
                    });
                    setBirthday(event.target.value);
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
              <Grid item xs={12} md={6}>
                <AutoComplete
                  options={ethnic}
                  handleChange={handleEthnic}
                  placeholder={employee?.ethnic || "Raça ou Cor"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AutoComplete
                  options={gender}
                  handleChange={handleGender}
                  placeholder={employee?.gender || "Gênero"}
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
                  label="CPF"
                  variant="outlined"
                  value={employee?.cpf || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          cpf: event.target.value,
                        },
                      },
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
                  value={employee?.rg || ""}
                  onChange={(event) => {
                    dispatch({
                      type: ADD_EMPLOYEE,
                      payload: {
                        forms: {
                          ...employee,
                          rg: event.target.value,
                        },
                      },
                    });
                  }}
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleForms(employee, [
                    "name",
                    "birthday",
                    "ethnic",
                    "gender",
                    "cpf",
                    "rg",
                  ]);
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

export default Identification;
