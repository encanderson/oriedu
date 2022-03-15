import React from "react";

// material-ui
import { Grid, Typography, useMediaQuery, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

//-----------------------|| FOOTER - AUTHENTICATION 2 & 3 ||-----------------------//

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Grid
      sx={{ mb: "-20px", display: { xs: "none", sm: "flex" } }}
      item
      container
      justifyContent={matchDownSM ? "center" : "space-between"}
      direction={matchDownSM ? "column" : "row"}
      alignItems="center"
      spacing={matchDownSM ? 2 : 0}
    >
      <Grid item>
        <Typography variant="subtitle2">
          <Button
            style={{ fontSize: 24 }}
            color="primary"
            component={RouterLink}
            to="/"
          >
            OriSistem
          </Button>
        </Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default AuthFooter;
