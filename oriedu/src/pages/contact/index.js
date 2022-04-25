import React from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";

// project imports
import ContactCard from "./ContactCard";
import AppBar from "@src/components/extended/AppBar";

// assets
import headerBackground from "@src/assets/images/landing/header-bg.jpg";

// style constant
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    textAlign: "center",
    paddingTop: "30px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0px",
    },
  },
}));

//============================|| CONTACT US MAIN ||============================//

const ContactUsPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <AppBar />
      <ContactCard />
    </div>
  );
};

export default ContactUsPage;
