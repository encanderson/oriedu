import React from "react";
import { useHistory } from "react-router-dom";

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

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// project imports
import useScriptRef from "@src/hooks/useScriptRef";
import Mask from "@src/utils/Mask";
import { dispatchMessage } from "@src/utils";

import { AuthServices } from "@src/services";

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

  const navigate = useHistory();

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaToken, setRecaptchaToken] = React.useState("");
  const handleReCaptchaVerify = React.useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha();

    setRecaptchaToken(token);
  }, [executeRecaptcha]);

  React.useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  async function handlerSend(cpf) {
    if (recaptchaToken) {
      const response = await AuthServices.recoveryPassword(cpf, navigate);
      if (response) {
        dispatch(
          dispatchMessage("Verifique se os dados estão corretos.", "error")
        );
      }
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
