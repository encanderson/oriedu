import React from "react";

// material-ui
import { makeStyles } from "@material-ui/styles";
import { Card, Grid, Typography } from "@material-ui/core";

// project card
import { gridSpacing } from "@src/store/constant";

// style card
const useStyles = makeStyles((theme) => ({
  followerBlock: {
    padding: "16px",
    background:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.grey[50],
    border:
      theme.palette.mode === "dark"
        ? "1px solid transparent"
        : `1px solid ${theme.palette.grey[100]}`,
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
  },
  btnProfile: {
    width: "100%",
    "&:hover ": {
      color: "#fff",
    },
    "&.MuiButton-outlinedPrimary:hover ": {
      background: theme.palette.primary.main,
    },
    "&.MuiButton-outlinedSecondary": {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
    },
    "&.MuiButton-outlinedSecondary:hover ": {
      background: theme.palette.error.main,
      color: "#fff",
    },
  },
}));

// ===========================|| USER DETAILS CARD ||=========================== //

const UserDetailsCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.followerBlock}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Typography variant="h3" component="div">
            {item.name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption">Responsável pelo Contrato?</Typography>
          <Typography variant="h6">{item.contract ? "Sim" : "Não"}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">Profissão</Typography>
          <Typography variant="subtitle2" sx={{ color: "grey.700" }}>
            {item.job}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">Local de Trabalho</Typography>
          <Typography variant="subtitle2" sx={{ color: "grey.700" }}>
            {item.workplace}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">Email</Typography>
          <Typography variant="h6">{item.email}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={6}>
              <Typography variant="caption">Phone</Typography>
              <Typography variant="h6">{item.phone}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption">Escolaridade</Typography>
              <Typography variant="h6">{item.schooling}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption">CPF</Typography>
              <Typography variant="h6">{item.cpf}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">RG</Typography>
            <Typography variant="h6">{item.rg}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserDetailsCard;
