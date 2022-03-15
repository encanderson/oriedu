import React from "react";
import { useNavigate } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

// project imports
import useScriptRef from "@src/hooks/useScriptRef";
import Mask from "@src/utils/Mask";
import { SNACKBAR_OPEN } from "@src/store/actions";

import { recoveryPassword } from "@src/api";

// style constant
const useStyles = makeStyles((theme) => ({
  loginInput: {
    ...theme.typography.customInput,
  },
}));

//========================|| JWT - FORGOT PASSWORD ||========================//

const ForgotPasswordForm = ({ ...others }) => {
  const classes = useStyles();
  const scriptedRef = useScriptRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function handlerSend(cpf) {
    const response = await recoveryPassword({ cpf: cpf });
    if (response.status === 200) {
      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message: response.data.message,
        variant: "alert",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        alertSeverity: "success",
        close: false,
      });
      navigate("/");
    } else {
      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message: "Verifique se seus dados estão corretos.",
        variant: "alert",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        alertSeverity: "error",
        close: false,
      });
    }
  }

  return (
    <Formik
      initialValues={{
        cpf: "",
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        cpf: Yup.string().min(14).max(14).required("CPF é obrigatório"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await handlerSend(values.cpf);

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
            error={Boolean(touched.cpf && errors.cpf)}
            className={classes.loginInput}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-cpf-register">
              CPF
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-cpf-register"
              fullWidth
              value={values.cpf}
              onBlur={handleBlur}
              onChange={handleChange}
              name="cpf"
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
              }}
              inputComponent={Mask}
            />
            {touched.cpf && errors.cpf && (
              <FormHelperText error id="standard-weight-helper-text--register">
                {" "}
                {errors.cpf}{" "}
              </FormHelperText>
            )}
          </FormControl>

          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}

          <Box mt={2}>
            <Button
              disableElevation
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
            >
              Enviar
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
