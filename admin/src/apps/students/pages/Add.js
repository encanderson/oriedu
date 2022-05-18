import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core";

import MainCard from "@src/components/cards/MainCard";
import { TabPanel, a11yProps } from "./components/TabPanel";
import Identification from "./Identification";
import Docs from "./Docs";
import Parents from "./Parents";
import Emergency from "./Emergency";
import YearSituation from "./YearSituation";
import SchoolHistory from "./SchoolHistory";

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

const AddStudent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleBack = () => {
    setValue(value - 1);
  };

  const handleForms = async () => {
    setValue(value + 1);
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
          <Identification handleForms={handleForms} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Docs handleForms={handleForms} handleBack={handleBack} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Parents handleForms={handleForms} handleBack={handleBack} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Emergency handleForms={handleForms} handleBack={handleBack} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <YearSituation handleForms={handleForms} handleBack={handleBack} />
        </TabPanel>
        <TabPanel value={value} index={0}>
          <SchoolHistory handleForms={handleForms} handleBack={handleBack} />
        </TabPanel>
      </div>
    </MainCard>
  );
};

export default AddStudent;
