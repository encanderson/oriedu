import React from "react";

// material-ui
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
  Link,
} from "@material-ui/core";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// project imports
import { gridSpacing } from "@src/store/constant";
import useScriptRef from "@src/hooks/useScriptRef";
import { sendContact } from "@src/api";
import TextMaskCExpDate from "@src/utils/Mask";
import config from "@src/config";
import { dispatchMessage } from "@src/utils";

// assets
import mailImg from "@src/assets/images/landing/img-contact-mail.svg";

// style constant
const useStyles = makeStyles((theme) => ({
  mailImg: {
    marginBottom: "-5px",
    position: "absolute",
    bottom: "-90px",
    right: "0",
    width: "400px",
    maxWidth: "100%",
    animation: "5s wings ease-in-out infinite",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

//===========================|| CONTACT CARD - FORMS ||===========================//

const ContactCard = ({ ...others }) => {
  const theme = useTheme();
  const classes = useStyles();

  const scriptedRef = useScriptRef();
  const dispatch = useDispatch();

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

  const handlerSend = async (values) => {
    const form = {
      email: values.email,
      name: values.name,
      phone: values.phone,
      message: values.message,
    };
    if (recaptchaToken) {
      const response = await sendContact(form);
      if (response.status === 204) {
        dispatch(dispatchMessage("Em breve entraremos em contato!", "success"));
      } else {
        dispatch(
          dispatchMessage(
            "Ocorreu um erro, por favor tente novamente!",
            "error"
          )
        );
      }
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container justifyContent="center" spacing={gridSpacing}>
          <Grid
            item
            sm={10}
            md={7}
            sx={{
              mt: "100px",
              mb: "50px",
              [theme.breakpoints.down("sm")]: { mt: "116px", mb: "20px" },
            }}
          >
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Typography
                  variant="h1"
                  color="white"
                  component="div"
                  sx={{
                    fontSize: "56px",
                    fontWeight: "900",
                    lineHeight: "60px",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "29px",
                      lineHeight: "36px",
                    },
                  }}
                >
                  Olá, Seja Bem Vindo
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontWeight: "400",
                    lineHeight: "32px",
                    [theme.breakpoints.up("md")]: { m: "0 100px" },
                  }}
                  color="white"
                >
                  Faremos o possível para responder as suas dúvidas
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ position: "relative" }}>
            <img src={mailImg} alt="Berry" className={classes.mailImg} />
          </Grid>

          <Grid item xs={10} sx={{ mb: "-300px" }}>
            <Card sx={{ mb: "50px" }} elevation={4}>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                  submit: null,
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("O email deve ser válido")
                    .max(255)
                    .required("Email é obrigatório"),
                  name: Yup.string().max(255).required("Digite o seu nome"),
                  phone: Yup.string()
                    .min(13)
                    .max(13)
                    .required("Digite um  número válido!"),
                  message: Yup.string()
                    .max(250)
                    .required("Qual a sua questão?"),
                })}
                onSubmit={async (
                  values,
                  { setErrors, setStatus, setSubmitting, resetForm }
                ) => {
                  try {
                    handlerSend(values);

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
                    <CardContent sx={{ p: 4 }}>
                      <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={12}>
                          <FormControl
                            fullWidth
                            error={Boolean(touched.name && errors.name)}
                            className={classes.loginInput}
                            variant="outlined"
                          >
                            <InputLabel>Nome</InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-name-register"
                              name="name"
                              value={values.name}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              inputProps={{
                                classes: {
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />
                            {touched.name && errors.name && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-name--register"
                              >
                                {" "}
                                {errors.name}{" "}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            fullWidth
                            error={Boolean(touched.email && errors.email)}
                            className={classes.loginInput}
                            variant="outlined"
                          >
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-email-register"
                              name="email"
                              value={values.email}
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
                                id="standard-weight-helper-email--register"
                              >
                                {" "}
                                {errors.email}{" "}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            fullWidth
                            error={Boolean(touched.phone && errors.phone)}
                            className={classes.loginInput}
                            variant="outlined"
                          >
                            <InputLabel htmlFor="outlined-adornment-phone-register">
                              Telefone
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-phone-register"
                              fullWidth
                              value={values.phone}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              name="phone"
                              inputProps={{
                                mask: [
                                  /[0-9]/,
                                  /[0-9]/,
                                  "-",
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
                              }}
                              inputComponent={TextMaskCExpDate}
                            />
                            {touched.phone && errors.phone && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text--register"
                              >
                                {" "}
                                {errors.phone}{" "}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl
                            fullWidth
                            error={Boolean(touched.message && errors.message)}
                            className={classes.loginInput}
                            variant="outlined"
                          >
                            <InputLabel htmlFor="outlined-adornment-message-register">
                              Mensagem
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-message-register"
                              value={values.message}
                              name="message"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              multiline={true}
                              rows={4}
                              inputProps={{
                                classes: {
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
                            />
                            {touched.message && errors.message && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text--register"
                              >
                                {" "}
                                {errors.message}{" "}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                          <Grid container spacing={gridSpacing}>
                            <Grid item sm zeroMinWidth>
                              <Typography align="left" variant="body2">
                                Não permanecemos com os seus dados, em acordo
                                com nossa
                                <Typography
                                  variant="subtitle1"
                                  component={Link}
                                  target="_blank"
                                  href={`${config.orisistem}/politica-de-privacidade`}
                                  color="primary"
                                  sx={{ mx: 0.5 }}
                                >
                                  Política de Privacidade
                                </Typography>
                              </Typography>
                            </Grid>
                            <Grid>
                              <Grid
                                item
                                zeroMinWidth
                                style={{ marginTop: 15 }}
                                sx={{
                                  [theme.breakpoints.down("sm")]: {
                                    justifyContent: "flex-start",
                                  },
                                }}
                              ></Grid>
                            </Grid>
                            {errors.submit && (
                              <Box mt={3}>
                                <FormHelperText error>
                                  {errors.submit}
                                </FormHelperText>
                              </Box>
                            )}
                            <Grid item>
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
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </form>
                )}
              </Formik>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ContactCard;
