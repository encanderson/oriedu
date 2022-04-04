import React from "react";

import { useDispatch } from "react-redux";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Grid,
  OutlinedInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton,
  InputLabel,
  Typography,
} from "@material-ui/core";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// project imports
import useScriptRef from "@src/hooks/useScriptRef";
import { gridSpacing } from "@src/store/constant";
import { strengthColor, strengthIndicator } from "@src/utils/password-strength";
// import { updateProfile } from "@src/api";
import { SNACKBAR_OPEN } from "@src/store/actions";

// style constant
const useStyles = makeStyles((theme) => ({
  loginIcon: {
    marginRight: "16px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "8px",
    },
  },
  loginInput: {
    ...theme.typography.customInput,
  },
}));

const Security = ({ ...others }) => {
  const scriptedRef = useScriptRef();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);

  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState("");

  const handleSend = async (action, values) => {
    if (values.newPassword === values.confirmPassword) {
      const data = {
        password: values.password,
        newPassword: values.newPassword,
        action: action,
      };
      // const response = await updateProfile(data);
      if ("response.status" === 200) {
        dispatch({
          type: SNACKBAR_OPEN,
          open: true,
          message: "Atualização realizada com sucesso",
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
    } else {
      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message: "O valor da nova senha não coincide",
        variant: "alert",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        alertSeverity: "error",
        close: false,
      });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          password: "",
          newPassword: "",
          confirmPassword: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().max(255).required("Senha é obrigatória"),
          newPassword: Yup.string().max(255).required("Digite uma nova senha!"),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("newPassword"), null],
            "Campos devem ser iguais"
          ),
        })}
        onSubmit={async (
          values,
          { setErrors, setStatus, setSubmitting, resetForm }
        ) => {
          try {
            await handleSend("password", values);

            setTimeout(function () {
              resetForm();
            }, 500);
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  className={classes.loginInput}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password-register">
                    Senha Atual
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-register"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-register"
                    >
                      {" "}
                      {errors.password}{" "}
                    </FormHelperText>
                  )}
                </FormControl>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.newPassword && errors.newPassword)}
                  className={classes.loginInput}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-newPassword-register">
                    Nova Senha
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-newPassword-register"
                    type={showNewPassword ? "text" : "password"}
                    value={values.newPassword}
                    name="newPassword"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowNewPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showNewPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {touched.newPassword && errors.newPassword && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-newPassword-register"
                    >
                      {" "}
                      {errors.newPassword}{" "}
                    </FormHelperText>
                  )}
                </FormControl>
                {strength !== 0 && (
                  <FormControl fullWidth>
                    <Box mb={2}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Box
                            width={85}
                            height={8}
                            borderRadius={7}
                            backgroundColor={level.color}
                          ></Box>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" fontSize="0.75rem">
                            {level.label}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </FormControl>
                )}
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  className={classes.loginInput}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-confirmPassword-register">
                    Confirmar Senha
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-confirmPassword-register"
                    value={values.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    label="Password"
                    onBlur={handleBlur}
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-confirmPassword-register"
                    >
                      {" "}
                      {errors.confirmPassword}{" "}
                    </FormHelperText>
                  )}
                </FormControl>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Confirmar
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default Security;
