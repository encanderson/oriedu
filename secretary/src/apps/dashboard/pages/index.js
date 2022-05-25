import React from "react";

// material-ui
import { Grid } from "@material-ui/core";

import { gridSpacing } from "@src/store/constant";
import UnderConstruction from "@src/pages/underConstruction";

const Analytics = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} lg={12} md={12}>
        <UnderConstruction />
      </Grid>
    </Grid>
  );
};

export default Analytics;
