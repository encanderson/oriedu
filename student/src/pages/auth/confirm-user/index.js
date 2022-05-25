import React from "react";
// import { Link as RouterLink } from "react-router-dom";

// material-ui
import { useTheme } from "@material-ui/core";
import {
  // Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

// project imports
import AuthWrapper1 from "@src/components/extended/AuthWrapper1";
import AuthCardWrapper from "@src/components/extended/AuthCardWrapper";
import FormCodeVerification from "./Form";

//===========================|| AUTH3 - CODE VERIFICATION ||===========================//

const CodeVerification = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AuthWrapper1>
      <Grid
        container
        justifyContent={matchDownSM ? "center" : "space-between"}
        alignItems="flex-start"
      >
        <Grid item xs={12} sx={{ minHeight: "100vh", height: "100%" }}>
          <Grid
            sx={{
              minHeight: "100vh",
              height: "100%",
              p: matchDownSM ? 0 : "0 80px",
            }}
            container
            direction="column"
            alignItems={matchDownSM ? "center" : "flex-start"}
            spacing={matchDownSM ? 3 : 6}
            justifyContent={matchDownSM ? "center" : "space-between"}
          >
            <Grid item></Grid>
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              alignItems="center"
            >
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                          >
                            Insira o Código de Verificação
                          </Typography>
                          <Typography variant="subtitle1" fontSize="1rem">
                            Enviado por Email.
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <FormCodeVerification />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default CodeVerification;
