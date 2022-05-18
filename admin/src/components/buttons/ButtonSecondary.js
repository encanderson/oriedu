import React from "react";

import { useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const ButtonSecondary = ({ onClick, title }) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      color={theme.palette.buttonColor}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ButtonSecondary;
