import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";

// project imports
import { gridSpacing } from "@src/store/constant";

// style constant
const useStyles = makeStyles((theme) => ({
  reviewDialog: {
    "&>div:nth-child(3)": {
      "&>div": {
        maxWidth: "400px",
      },
    },
  },
  reviewContainer: {
    marginTop: "0px",
    marginBottom: "0px",
  },
}));

const DeleteComponent = ({
  open,
  handleCloseDialog,
  item,
  handleSubmitDelete,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        className={classes.reviewDialog}
      >
        <DialogTitle disableTypography>
          <Typography variant="h3">Deseja mesmo apagar o {item}?</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            spacing={gridSpacing}
            className={classes.reviewContainer}
          >
            <Grid item xs={12}></Grid>
          </Grid>
        </DialogContent>
        <Grid
          item
          container
          flexDirection="row"
          justifyContent="center"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <DialogActions>
            <Grid item xs={6}>
              <Button
                onClick={handleSubmitDelete}
                variant="contained"
                color="secondary"
              >
                Confirmar
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={handleCloseDialog}
                color="primary"
              >
                Cancelar
              </Button>
            </Grid>
          </DialogActions>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteComponent;
