import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Tab, Tabs } from "@material-ui/core";

import MainCard from "@src/components/cards/MainCard";
import Identification from "./Identification";
import { validateForm } from "@src/utils";
// import { gridSpacing } from "@src/store/constant";
// import AutoComplete from "@src/components/AutoComplete";
import useAuth from "@src/hooks/useAuth";
import { dispatchMessage } from "@src/utils";

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

  const { user } = useAuth();

  const [employee, setEmployee] = React.useState({
    school_id: user?.school_id,
    job: "",
    cpf: "",
    email: "",
    name: "",
    address: {
      street: "",
      number: "",
      complemento: "",
      zip: "",
      city: "",
      state: "",
    },
    bank: {
      name: "",
      agency: "",
      count: "",
    },
    birthday: "",
    contacts: {
      email: "",
      phone: "",
    },
    hired_at: "",
    ethnic: "",
    gender: "",
    docs: {
      cpf: "",
      rg: "",
    },
    salary: "",
    classes: [],
    qualifications: {
      course: "",
      finished: "",
      date: "",
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleForms = (form, fields) => {
    const obj = validateForm(form, fields);

    if (!obj) {
      dispatch(dispatchMessage("Preencha todos os campos", "warning"));
    } else {
      setValue(value + 1);

      console.log(data);
    }
  };

  return (
    <MainCard>
      <div className={classes.root}>
        <Tabs
          value={value}
          indicatorColor="primary"
          onChange={handleChange}
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
          {/* <School /> */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <Security /> */}
        </TabPanel>
      </div>
    </MainCard>
  );
};

export default EmployeeRegister;
