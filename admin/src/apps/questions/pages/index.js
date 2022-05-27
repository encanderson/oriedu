import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";

// project imports
import { gridSpacing } from "@src/store/constant";

import useAuth from "@src/hooks/useAuth";

//===========================|| CONTACT CARD - FORMS ||===========================//

const ContactCard = () => {
  const { user } = useAuth();

  const [errorMessage, setErrorMessage] = React.useState("");
  const [message, setMessage] = React.useState({
    name: user?.name,
    subject: "",
    message: "",
    email: user?.email,
    school_id: user?.school_id,
  });

  const handleMessage = () => {
    if (message.subject && message.message) {
      console.log(message);
      setErrorMessage("");
      setMessage({
        ...message,
        subject: "",
        message: "",
      });
    } else {
      setErrorMessage("Preencha todos os campos");
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container justifyContent="center" spacing={gridSpacing}>
          <Grid item xs={12} sx={{ mb: "-300px" }} md={10}>
            <Card sx={{ mb: "50px" }} elevation={4}>
              <CardContent sx={{ p: 4 }}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12} md={12}>
                    <InputLabel>Assunto</InputLabel>
                    <OutlinedInput
                      fullWidth
                      value={message.subject}
                      onChange={(event) =>
                        setMessage({
                          ...message,
                          subject: event.target.value,
                        })
                      }
                      inputProps={{
                        autoComplete: "none",
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel htmlFor="outlined-adornment-message-register">
                      Mensagem
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      value={message.message}
                      onChange={(event) =>
                        setMessage({
                          ...message,
                          message: event.target.value,
                        })
                      }
                      inputProps={{
                        autoComplete: "none",
                      }}
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      container
                      spacing={gridSpacing}
                      justifyContent={"space-between"}
                    >
                      <Grid item>
                        {errorMessage ? (
                          <Box>
                            <FormHelperText error>
                              {errorMessage}
                            </FormHelperText>
                          </Box>
                        ) : (
                          <div></div>
                        )}
                      </Grid>

                      <Grid item>
                        <Box mt={2}>
                          <Button
                            disableElevation
                            fullWidth
                            onClick={handleMessage}
                            size="large"
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
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ContactCard;
