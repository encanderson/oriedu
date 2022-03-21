import React from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

// project imports
import config from "@src/config";
import { gridSpacing } from "@src/store/constant";

// assets
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";

import imageBackground from "@src/assets/images/maintenance/img-error-bg.svg";
import imageBlue from "@src/assets/images/maintenance/img-error-blue.svg";
import imageText from "@src/assets/images/maintenance/img-error-text.svg";
import imagePurple from "@src/assets/images/maintenance/img-error-purple.svg";

// style constant
const useStyles = makeStyles((theme) => ({
  errorImg: {
    maxWidth: "600px",
    margin: "0 auto",
    position: "relative",
  },
  errorContent: {
    maxWidth: "350px",
    margin: "0 auto",
    textAlign: "center",
  },
  errorBlock: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBlock: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    animation: "3s bounce ease-in-out infinite",
  },
  imgBackground: {
    animation: "10s blink ease-in-out infinite",
  },
  imgBlue: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    animation: "15s wings ease-in-out infinite",
  },
  imgPurple: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    animation: "12s wings ease-in-out infinite",
  },
}));

//==============================|| ERROR PAGE ||==============================//

const ErrorPage = () => {
  const classes = useStyles();

  return (
    <Card className={classes.errorBlock}>
      <CardContent>
        <Grid container justifyContent="center" spacing={gridSpacing}>
          <Grid item xs={12}>
            <div className={classes.errorImg}>
              <CardMedia
                component="img"
                image={imageBackground}
                title="Slider5 image"
                className={classes.imgBackground}
              />
              <CardMedia
                component="img"
                image={imageText}
                title="Slider5 image"
                className={classes.imgBlock}
              />
              <CardMedia
                component="img"
                image={imageBlue}
                title="Slider5 image"
                className={classes.imgBlue}
              />
              <CardMedia
                component="img"
                image={imagePurple}
                title="Slider5 image"
                className={classes.imgPurple}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.errorContent}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Typography variant="h1" component="div">
                    Algo está errado
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    A página que você está procurando foi removida, renomeada ou
                    nunca existiu!{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    component={RouterLink}
                    to={config.home}
                  >
                    <HomeTwoToneIcon sx={{ fontSize: "1.3rem", mr: 0.75 }} />{" "}
                    Home
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ErrorPage;
