import React from "react";

import { Grid, Typography } from "@material-ui/core";

const InformationComponent = ({ primary, secondary }) => {
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="subtitle1">{primary}</Typography>
      <Typography variant="subtitle2">{secondary}</Typography>
    </Grid>
  );
};

export default InformationComponent;
