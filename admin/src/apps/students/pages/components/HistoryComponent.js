import React from "react";

// material-ui
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  Grid,
  Typography,
  Tooltip,
  Fab,
} from "@material-ui/core";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { Remove } from "@material-ui/icons";

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
      borderColor: theme.palette.warning.main,
    },
    "&.MuiButton-outlinedSecondary:hover ": {
      background: theme.palette.warning.main,
      color: "#fff",
    },
  },
}));

const HistoryComponent = ({ item, array, setState, setYear, index }) => {
  const classes = useStyles();
  const [disciplines, setDisciplines] = React.useState(item.disciplines);

  const handleRemove = () => {
    const obj = [...array];
    const year = obj.splice(index, 1);
    setYear(year[0]);
    setState(obj);
  };

  const handleRemoveDiscipline = (idx) => {
    const obj = [...item.disciplines];

    obj.splice(idx, 1);

    item.disciplines = obj;

    array[index] = item;

    setDisciplines(obj);

    setState(array);
    // setState(item);
  };
  return (
    <Card className={classes.followerBlock}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Typography variant="h3" component="div">
            {item.school}
          </Typography>
          <Typography variant="caption">Escola</Typography>
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
        {disciplines.map((item, index) => {
          return (
            <Grid item xs={12} key={index}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="caption">Escola</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6">{item?.score}</Typography>
                  <Typography variant="caption">Nota Final</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Tooltip title="Remover">
                    <Fab
                      color="primary"
                      size="small"
                      onClick={() => {
                        handleRemoveDiscipline(index);
                      }}
                      sx={{
                        boxShadow: "none",
                        ml: 1,
                        width: "32px",
                        height: "32px",
                        minHeight: "32px",
                      }}
                    >
                      <Remove fontSize="small" />
                    </Fab>
                  </Tooltip>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">{item?.comments}</Typography>
                  <Typography variant="caption">Observações</Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.btnProfile}
                startIcon={<EditTwoToneIcon />}
                onClick={handleRemove}
              >
                Editar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HistoryComponent;
