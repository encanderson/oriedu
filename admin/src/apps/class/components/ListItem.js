import React from "react";

import {
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";

const ListItem = ({ Icon, title }) => {
  return (
    <>
      <ListItemButton>
        <ListItemIcon>{Icon}</ListItemIcon>
        <ListItemText
          primary={<Typography variant="subtitle1">{title}</Typography>}
        />
      </ListItemButton>
      <Divider />
    </>
  );
};

export default ListItem;
