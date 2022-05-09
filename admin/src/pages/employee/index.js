import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Tab, Tabs } from "@material-ui/core";

import MainCard from "@src/components/cards/MainCard";
import Identification from "./Identification";
import { validateForm } from "@src/utils";
// import useAuth from "@src/hooks/useAuth";
import { dispatchMessage } from "@src/utils";
import Contacts from "./Contacts";

// import { SchoolServices } from "@src/services";

const useStyles = makeStyles((theme) => ({
  accountTab: {
    marginBottom: "24px",
    "& button": {
      minWidth: "100px",
    },
    "& a": {
      minHeight: "auto",
      minWidth: "10px",
      padding: "12px 8px",
      marginRight: "18px",
      color: theme.palette.grey[600],
    },
    "& a.Mui-selected": {
      color: theme.palette.primary.main,
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={0}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const EmployeeRegister = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employee.employee);

  const [value, setValue] = React.useState(0);

  //   bank: {
  //     name: "",
  //     agency: "",
  //     count: "",
  //   },
  //   hired_at: "",
  //   salary: "",
  //   classes: [],
  //   qualifications: {
  //     course: "",
  //     finished: "",
  //     date: "",
  //   },
  // });

  const handleForms = (form, fields) => {
    const obj = validateForm(form, fields);

    if (!obj) {
      dispatch(dispatchMessage("Preencha todos os campos", "error"));
    } else {
      setValue(value + 1);

      console.log(data);
    }
  };

  const handleBack = () => {
    setValue(value - 1);
  };

  return (
    <MainCard>
      <div className={classes.root}>
        <Tabs
          value={value}
          indicatorColor="primary"
          // onChange={handleChange}
          className={classes.accountTab}
          aria-label="simple tabs example"
          variant="scrollable"
        >
          <Tab
            component={RouterLink}
            to="#"
            label="Identificação"
            {...a11yProps(0)}
          />
          <Tab
            component={RouterLink}
            to="#"
            label="Contatos"
            {...a11yProps(1)}
          />
          <Tab
            component={RouterLink}
            to="#"
            label="Trabalho"
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Identification handleForms={handleForms} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Contacts handleForms={handleForms} handleBack={handleBack} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <Security /> */}
        </TabPanel>
      </div>
    </MainCard>
  );
};

export default EmployeeRegister;
