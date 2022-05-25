import React from "react";

import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";

const CheckComponent = ({ check, setCheck, title }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={check}
          onChange={(event) => {
            setCheck();
          }}
          name="checked"
          color="primary"
        />
      }
      label={<Typography variant="subtitle1">{title}</Typography>}
    />
  );
};

export default CheckComponent;
