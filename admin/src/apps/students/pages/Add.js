import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Tab, Tabs } from "@material-ui/core";

import MainCard from "@src/components/cards/MainCard";

import { validateForm } from "@src/utils";
import { dispatchMessage } from "@src/utils";

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

const AddStudent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const student = useSelector((state) => state.student.student);

  const handleBack = () => {
    setValue(value - 1);
  };

  const handleForms = async (form, fields) => {
    const obj = validateForm(form, fields);

    if (value !== 2) {
      if (!obj) {
        dispatch(dispatchMessage("Preencha todos os campos", "error"));
      } else {
        setValue(value + 1);
      }
    }
    // else {
    //   if (!obj) {
    //     dispatch(dispatchMessage("Preencha todos os campos", "error"));
    //   } else {
    //     const { service } = await initEmployeeService(
    //       `${user.school_id}/employees`,
    //       "POST"
    //     );

    //     const response = await service.request(data);

    //     if (response.status === 204) {
    //       dispatch({
    //         type: REMOVE_EMPLOYEE,
    //       });
    //       setValue(0);
    //     }
    //   }
    // }
  };

  return (
    <MainCard title={"Estudante"}>
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
            label="Documentos"
            {...a11yProps(1)}
          />
          <Tab component={RouterLink} to="#" label="Pais" {...a11yProps(2)} />
          <Tab
            component={RouterLink}
            to="#"
            label="Emergência"
            {...a11yProps(3)}
          />
          <Tab
            component={RouterLink}
            to="#"
            label="Ano Letivo"
            {...a11yProps(4)}
          />
          <Tab
            component={RouterLink}
            to="#"
            label="Histórico Escolar"
            {...a11yProps(5)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          {/* <Identification handleForms={handleForms} /> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* <Contacts handleForms={handleForms} handleBack={handleBack} /> */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <WorkInfo handleForms={handleForms} handleBack={handleBack} /> */}
        </TabPanel>
      </div>
    </MainCard>
  );
};

export default AddStudent;
