import React from "react";

import { useDispatch } from "react-redux";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Button, Grid, TextField, Typography } from "@material-ui/core";

// project imports
import SubCard from "@src/components/cards/SubCard";
import ProfileDialog from "../components/DialogProfile";

import { gridSpacing } from "@src/store/constant";
import { saveImage } from "@src/utils/Images";
import { EDIT_USER } from "@src/store/actions";
import { initUserService } from "../services";
import { initAuthService } from "@src/apps/services";
import { dispatchMessage } from "@src/utils";

import { useAuth } from "@src/hooks";

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
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handlerImage = (e) => {
    const files = e.target.files[0];

    const reader = saveImage(files);

    if (reader) {
      reader.onload = async () => {
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
        const { service } = await initAuthService(null, "PUT");
        const response = await service.update({ picture: base64 });

        if (response.status !== 204) {
          dispatch(
            dispatchMessage(
              "Atualização falhou, por favor tente mais tarde.",
              "error"
            )
          );
        }
        dispatch(
          dispatchMessage("Atualização realizada com sucesso!", "success")
        );
      };
    }
  };

  const handleSubmit = async (action) => {
    const { service } = await initUserService(null, "PUT");
    const response = await service.update({ job: user?.job });

    if (response.status !== 204) {
      dispatch(
        dispatchMessage(
          "Atualização falhou, por favor tente mais tarde.",
          "error"
        )
      );
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleCloseDialog = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (!user?.new) {
      setOpen(true);
    }
  }, [user]);

  return (
    <Grid container spacing={gridSpacing}>
      <ProfileDialog open={open} handleClose={handleCloseDialog} />
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
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid item sm={6} md={8}>
        <SubCard>
          <form>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic1"
                  autoComplete="none"
                  fullWidth
                  disabled={true}
                  label="Nome"
                  variant="outlined"
                  value={user?.name || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          name: event.target.value,
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
                          job: event.target.value,
                        },
                      },
                    })
                  }
                  label="Cargo"
                  variant="outlined"
                  value={user?.job || ""}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autoComplete="none"
                  id="outlined-basic3"
                  fullWidth
                  disabled={true}
                  label="Email"
                  variant="outlined"
                  value={user?.email || ""}
                  onChange={(event) =>
                    dispatch({
                      type: EDIT_USER,
                      payload: {
                        user: {
                          ...user,
                          email: event.target.value,
                        },
                      },
                    })
                  }
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
                  <Grid item xs={12} md={2}>
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
                    <Grid item xs={12} md={2}>
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
                    <Grid item xs={12} md={2}>
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
