import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, TextField } from "@material-ui/core";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { dispatchMessage } from "@src/utils";

import { AuthServices } from "@src/services";

// style constant
const useStyles = makeStyles((theme) => ({
  loginInput: {
    ...theme.typography.customInput,
    "& > div > input": {
      padding: "16px !important",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        padding: "12px !important",
      },
    },
  },
}));

//=======================|| FIREBASE - CODE VERIFICATION ||=======================//

const FormVerification = () => {
  const classes = useStyles();
  const { token } = useParams();
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

  const [code, setCode] = React.useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });

  const handleChange = (event, name) => {
    const re = /^[0-9\b]+$/;
    if (
      event.target.value.length < 2 &&
      (event.target.value === "" || re.test(event.target.value))
    ) {
      setCode({ ...code, [name]: event.target.value });
    }
  };

  async function verifyCode() {
    const codeData =
      code.code1 +
      code.code2 +
      code.code3 +
      code.code4 +
      code.code5 +
      code.code6;

    if (recaptchaToken) {
      const response = await AuthServices.isUser(codeData, token, navigate);

      if (response) {
        dispatch(dispatchMessage("Código não corresponde", "error"));
      }
    }
  }

  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Grid item xs={2}>
          <TextField
            fullWidth
            margin="normal"
            name="fname1"
            type="text"
            value={code.code1}
            variant="outlined"
            className={classes.loginInput}
            placeholder="9"
            onChange={(e) => handleChange(e, "code1")}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            margin="normal"
            name="fname2"
            type="text"
            value={code.code2}
            variant="outlined"
            className={classes.loginInput}
            placeholder="9"
            onChange={(e) => handleChange(e, "code2")}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            margin="normal"
            name="fname3"
            type="text"
            value={code.code3}
            variant="outlined"
            className={classes.loginInput}
            placeholder="9"
            onChange={(e) => handleChange(e, "code3")}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            margin="normal"
            name="fname4"
            type="text"
            value={code.code4}
            variant="outlined"
            className={classes.loginInput}
            placeholder="9"
            onChange={(e) => handleChange(e, "code4")}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            margin="normal"
            name="fname5"
            type="text"
            value={code.code5}
            variant="outlined"
            className={classes.loginInput}
            placeholder="9"
            onChange={(e) => handleChange(e, "code5")}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            margin="normal"
            name="fname6"
            type="text"
            value={code.code6}
            variant="outlined"
            className={classes.loginInput}
            placeholder="9"
            onChange={(e) => handleChange(e, "code6")}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button
          disableElevation
          fullWidth
          size="large"
          type="button"
          onClick={verifyCode}
          variant="contained"
          color="secondary"
        >
          Continuar
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default FormVerification;
