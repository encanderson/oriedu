import React from "react";
import { useNavigate, useParams } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

// project imports
import useScriptRef from "@src/hooks/useScriptRef";
import { strengthColor, strengthIndicator } from "@src/utils/password-strength";

import { SNACKBAR_OPEN } from "@src/store/actions";

// assets
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { resetPassword } from "@src/api";

// style constant
const useStyles = makeStyles((theme) => ({
  loginInput: {
    ...theme.typography.customInput,
  },
}));

//========================|| FIREBASE - RESET PASSWORD ||========================//

const FormResetPassword = ({ ...others }) => {
  const classes = useStyles();
  const scriptedRef = useScriptRef();
  const [showPassword, setShowPassword] = React.useState(false);
  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { token } = useParams();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  async function handlerSubmit(password) {
    const response = await resetPassword({
      password: password,
      token: token,
    });
    if (response.status === 204) {
      navigate("/login");
    } else {
      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message: response.data.message,
        variant: "alert",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        alertSeverity: "warning",
        close: false,
      });
    }
  }

  return (
    <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().max(255).required("A senha é obrigatória"),
        confirmPassword: Yup.string().when("password", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Senhas devem coincidir!"
          ),
        }),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await handlerSubmit(values.password);

          if (scriptedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
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
          <FormControl
            fullWidth
            error={Boolean(touched.password && errors.password)}
            className={classes.loginInput}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password-reset">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-reset"
              type={showPassword ? "text" : "password"}
              value={values.password}
              name="password"
              onBlur={handleBlur}
              onChange={(e) => {
                handleChange(e);
                changePassword(e.target.value);
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
          </FormControl>
          {touched.password && errors.password && (
            <FormControl fullWidth>
              <FormHelperText error id="standard-weight-helper-text-reset">
                {" "}
                {errors.password}{" "}
              </FormHelperText>
            </FormControl>
          )}
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

          <FormControl
            fullWidth
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            className={classes.loginInput}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-confirm-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-confirm-password"
              type="password"
              value={values.confirmPassword}
              name="confirmPassword"
              label="Confirm Password"
              onBlur={handleBlur}
              onChange={handleChange}
              inputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </FormControl>

          {touched.confirmPassword && errors.confirmPassword && (
            <FormControl fullWidth>
              <FormHelperText
                error
                id="standard-weight-helper-text-confirm-password"
              >
                {" "}
                {errors.confirmPassword}{" "}
              </FormHelperText>
            </FormControl>
          )}

          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}
          <Box mt={1}>
            <Button
              disableElevation
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
            >
              Confirmar
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default FormResetPassword;
