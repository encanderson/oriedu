import React from "react";

import {
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";

const ListButton = ({ onClick, Icon, title }) => {
  return (
    <>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>{Icon}</ListItemIcon>
        <ListItemText
          primary={<Typography variant="subtitle1">{title}</Typography>}
        />
      </ListItemButton>
      <Divider />
    </>
  );
};

export default ListButton;
