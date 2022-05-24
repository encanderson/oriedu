import React from "react";

import { Grid, Typography } from "@material-ui/core";

const DetailComponent = ({ item, subtitle }) => {
  return (
    <Grid item xs={12} md={4}>
      <Typography align="center" variant="h4">
        {item}
      </Typography>
      <Typography align="center" variant="subtitle2">
        {subtitle}
      </Typography>
    </Grid>
  );
};

export default DetailComponent;
