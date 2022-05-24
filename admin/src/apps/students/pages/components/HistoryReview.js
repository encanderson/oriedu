import React from "react";

// material-ui
import { makeStyles } from "@material-ui/styles";
import { Card, Grid, Typography } from "@material-ui/core";

// project card
import { gridSpacing } from "@src/store/constant";

// assets

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
}));

const HistoryReview = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.followerBlock}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="div">
            {item.school}
          </Typography>
          <Typography variant="caption">Escola</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">{item.year}</Typography>
          <Typography variant="caption">Ano</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">{item.class}</Typography>
          <Typography variant="caption">Série/Turma</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" sx={{ color: "grey.700" }}>
            {item.situation}
          </Typography>
          <Typography variant="caption">Situação</Typography>
        </Grid>
        {item.disciplines.map((item, index) => {
          return (
            <Grid item xs={12} key={index}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="caption">Escola</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6">{item?.score}</Typography>
                  <Typography variant="caption">Nota Final</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">{item?.comments}</Typography>
                  <Typography variant="caption">Observações</Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default HistoryReview;
