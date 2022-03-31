import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  TextField,
  Link,
} from "@material-ui/core";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

// project imports
import useScriptRef from "@src/hooks/useScriptRef";
import { strengthColor, strengthIndicator } from "@src/utils/password-strength";
import Mask from "@src/utils/Mask";
import { SNACKBAR_OPEN } from "@src/store/actions";
import { profiles } from "@src/store/constant";
import config from "@src/config";
import { createUser } from "@src/api";
import { filterUser } from "@src/utils/createUser";

// assets
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// style constant
const useStyles = makeStyles((theme) => ({
  redButton: {
    fontSize: "1rem",
    fontWeight: 500,
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border: "1px solid",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.light + 20
        : theme.palette.grey[100],
    color: theme.palette.grey[700],
    textTransform: "none",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? theme.palette.dark.light + 20
          : theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  signDivider: {
    flexGrow: 1,
  },
  signText: {
    cursor: "unset",
    margin: theme.spacing(2),
    padding: "5px 56px",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.light + 20 + " !important"
        : theme.palette.grey[100] + " !important",
    color: theme.palette.grey[900] + "!important",
    fontWeight: 500,
  },
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

//===========================|| JWT - REGISTER ||===========================//

const FormRegister = ({ ...others }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useStyles();
  const scriptedRef = useScriptRef();

  const [showPassword, setShowPassword] = React.useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = React.useState(false);
  const [checkdTerms, setCheckedTerms] = React.useState(false);

  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState("");

  const registerSubmit = async (values) => {
    const data = {
      consents: {
        privacy: checkedPrivacy,
        terms: checkdTerms,
      },
      cpf: values.cpf,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      job: values.profession,
    };
    if (
      checkdTerms &&
      checkedPrivacy &&
      data.profession !== "" &&
      values.confirmPassword === data.password
    ) {
      const user = filterUser(data);
      const response = await createUser(user);

      if (response.status === 201) {
        dispatch({
          type: SNACKBAR_OPEN,
          open: true,
          message: response.data.message,
          variant: "alert",
          anchorOrigin: { vertical: "top", horizontal: "center" },
          alertSeverity: "success",
          close: false,
        });
        setTimeout(() => navigate("/"), 1000);
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
    } else {
      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message:
          "É preciso estar de acordo com nossas políticas e preencher todos os dados.",
        variant: "alert",
        anchorOrigin: { vertical: "top", horizontal: "center" },
        alertSeverity: "warning",
        close: false,
      });
    }
  };

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

  useEffect(() => {
    changePassword("123456");
  }, []);

  return (
    <React.Fragment>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid>
          <Divider className={classes.signDivider} orientation="horizontal" />
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box mb={2}>
            <Typography variant="subtitle1">Preencha todos dados</Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          cpf: "",
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          profession: "",
          submit: null,
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          profession: Yup.string().required("Indique seu perfil"),
          cpf: Yup.string().min(14).max(14).required("CPF é obrigatório"),
          email: Yup.string()
            .email("O email deve ser válido")
            .max(255)
            .required("Email é obrigatório"),
          firstName: Yup.string()
            .max(20)
            .required("Digite o seu primeiro nome"),
          lastName: Yup.string().max(20).required("Digite o seu último nome"),
          password: Yup.string().max(255).required("Senha é obrigatória"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            registerSubmit(values);
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
          setFieldValue,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.firstName && errors.firstName)}
                  className={classes.loginInput}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-firstName-register">
                    Primeiro Nome
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-firstName-register"
                    name="firstName"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    autoComplete="off"
                  />
                  {touched.firstName && errors.firstName && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-name--register"
                    >
                      {" "}
                      {errors.firstName}{" "}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.firstName && errors.firstName)}
                  className={classes.loginInput}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-lastName-register">
                    Primeiro Nome
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-lastName-register"
                    name="lastName"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {touched.lastName && errors.lastName && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-lastName--register"
                    >
                      {" "}
                      {errors.lastName}{" "}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <FormControl
              fullWidth
              error={Boolean(touched.profession && errors.profession)}
              className={classes.loginInput}
              variant="outlined"
            >
              <Autocomplete
                id="outlined-adornment-profession-register"
                fullWidth
                options={profiles}
                name={"profession"}
                inputValue={values.profession || ""}
                getOptionSelected={(option, value) =>
                  option.value === value.value
                }
                onChange={(e, value) =>
                  setFieldValue("profession", value ? value.value : "")
                }
                onBlur={handleBlur}
                renderInput={(params) => (
                  <TextField {...params} label={"Área de atuação"} />
                )}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    pr: "30px !important",
                  },
                }}
              />
              {touched.profession && errors.profession && (
                <FormHelperText
                  error
                  id="standard-weight-helper-profession--register"
                >
                  {" "}
                  {errors.profession}{" "}
                </FormHelperText>
              )}
            </FormControl>
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
                <FormHelperText
                  error
                  id="standard-weight-helper-text--register"
                >
                  {" "}
                  {errors.cpf}{" "}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              className={classes.loginInput}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-email-register">
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text--register"
                >
                  {" "}
                  {errors.email}{" "}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              className={classes.loginInput}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password-register">
                Senha
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
            <FormControl
              fullWidth
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              className={classes.loginInput}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-confirmPassword-register">
                Confirmar Senha
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-confirmPassword-register"
                type={showPassword ? "text" : "password"}
                value={values.confirmPassword}
                name="confirmPassword"
                label="Confirmar Senha"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
                }}
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

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedPrivacy}
                      onChange={(event) =>
                        setCheckedPrivacy(event.target.checked)
                      }
                      name="checked"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="subtitle1">
                      Concordo com a &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        href={`${config.orisistem}/politica-de-privacidade`}
                        target="_blank"
                      >
                        Política de Privacidade.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkdTerms}
                      onChange={(event) =>
                        setCheckedTerms(event.target.checked)
                      }
                      name="checked"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="subtitle1">
                      Concordo com os &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        href={`${config.orisistem}/termos-de-uso`}
                        target="_blank"
                      >
                        Termos de Uso.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
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
                Registrar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default FormRegister;
