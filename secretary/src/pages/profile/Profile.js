import React from "react";

import { useDispatch } from "react-redux";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Autocomplete,
  Avatar,
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

// project imports
import SubCard from "@src/components/cards/SubCard";
import { gridSpacing } from "@src/store/constant";
import { saveImage } from "@src/utils/Images";
import { states } from "@src/store/constant";
import { getCities } from "@src/api/getCities";
import { EDIT_USER, SNACKBAR_OPEN } from "@src/store/actions";
// import { updateProfile } from "@src/api";
import TextMaskCExpDate from "@src/utils/Mask";
import useAuth from "@src/hooks/useAuth";

// style constant
const useStyles = makeStyles((theme) => ({
  accountAvatar: {
    width: "100px",
    height: "100px",
    margin: "0 auto",
  },
  accountContent: {
    textAlign: "center",
  },
  fileUpload: {
    borderRadius: "1px",
    display: "inline-block",
    paddingTop: "6px 12 px",
  },
}));

//-----------------------|| PROFILE 3 - PROFILE ||-----------------------//

const ProfileData = () => {
  const dispatch = useDispatch();
  const hiddenFileInput = React.useRef(null);
  const classes = useStyles();

  const { user } = useAuth();

  const [city, setCity] = React.useState(null);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [cities, setCities] = React.useState([]);

  const handleStateChange = async (_, value) => {
    setCity(null);

    const cityList = await getCities(value?.value);
    setCities(cityList);

    dispatch({
      type: EDIT_USER,
      payload: {
        user: {
          ...user,
          state: value?.value,
        },
      },
    });
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

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handlerImage = (e) => {
    const files = e.target.files[0];

    const reader = saveImage(files);

    if (reader) {
      reader.onload = () => {
        var base64 = reader.result.split(",")[1];

        dispatch({
          type: EDIT_USER,
          payload: {
            user: {
              ...user,
              picture: base64,
            },
          },
        });
      };
    }
  };

  const handleSubmit = async (action) => {
    // const response = await updateProfile({
    //   ...user,
    //   action: action,
    // });
    if ("response.status" === 200) {
      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message: "Atualização realizada com sucesso.",
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

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item sm={6} md={4}>
        <SubCard title="Foto do Perfil" contentClass={classes.accountContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Avatar
                alt="User 1"
                src={
                  user?.picture ? `data:image/png;base64,${user?.picture}` : ""
                }
                className={classes.accountAvatar}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="center">
                Upload/Troque sua foto
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                textAling: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={handleClick}
                variant="contained"
                color="primary"
                size="small"
              >
                Imagem
              </Button>
              <input
                ref={hiddenFileInput}
                accept="image/*"
                style={{ display: "none" }}
                type="file"
                onChange={handlerImage}
                id="input"
              />

              <Button
                onClick={() => {
                  handleSubmit("picture");
                }}
                variant="contained"
                color="success"
                size="small"
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid item sm={6} md={8}>
        <SubCard title="Detalhes &nbsp;&nbsp; - &nbsp;&nbsp; Perfis completos são mais facilmente encontrados">
          <form>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic1"
                  autoComplete="none"
                  fullWidth
                  disabled={isDisabled}
                  label="Nome"
                  variant="outlined"
                  value={user?.name || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          name: user?.name,
                        },
                      },
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic2"
                  fullWidth
                  disabled={isDisabled}
                  autoComplete="none"
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          username: event.target.value,
                        },
                      },
                    })
                  }
                  label="username"
                  variant="outlined"
                  value={user?.username || ""}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  id="outlined-basic7"
                  fullWidth
                  disabled={isDisabled}
                  label="Profissão"
                  variant="outlined"
                  value={user?.job || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          job: event.target.value,
                        },
                      },
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  id="outlined-basic8"
                  fullWidth
                  disabled={isDisabled}
                  label="Especialidades"
                  variant="outlined"
                  value={user?.specialties?.join() || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          specialties: event.target.value.split(","),
                        },
                      },
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  id="outlined-basic3"
                  fullWidth
                  disabled={isDisabled}
                  label="Email"
                  variant="outlined"
                  value={user?.email || ""}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  autoComplete="none"
                  id="outlined-basic4"
                  disabled={isDisabled}
                  label="Telefone"
                  variant="outlined"
                  value={user?.contacts || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          contacts: event.target.value,
                        },
                      },
                    })
                  }
                  inputProps={{
                    mask: [
                      "(",
                      /[0-9]/,
                      /[0-9]/,
                      ")",
                      " ",
                      /[0-9]/,
                      /[0-9]/,
                      /[0-9]/,
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
                <Autocomplete
                  autoSelect={true}
                  id="state"
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
                      placeholder={user?.state || "Estado"}
                      value={user?.state}
                      variant="outlined"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  autoSelect={true}
                  id="city"
                  disabled={isDisabled}
                  options={cities}
                  getOptionLabel={(value) => value}
                  getOptionSelected={(option, value) => option === value}
                  value={city}
                  onChange={handleSelectCity}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder={user?.city || "Cidade"}
                      variant="outlined"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
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
                          handleSubmit("profile");
                        }}
                      >
                        Salvar
                      </Button>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </form>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default ProfileData;
