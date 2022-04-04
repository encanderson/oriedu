import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Box, Tab, Tabs } from "@material-ui/core";

import MainCard from "@src/components/cards/MainCard";
import { EDIT_USER } from "@src/store/actions";
import ProfileData from "./Profile";
import School from "./School";
import Security from "./Password";

import useAuth from "@src/hooks/useAuth";
import { getProfile } from "@src/api";

// style constant
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

// tabs
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

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useAuth();

  React.useEffect(() => {
    (async () => {
      const response = await getProfile(user.id);
      if (response.status === 200) {
        dispatch({
          type: EDIT_USER,
          payload: {
            user: {
              ...user,
              ...response.data,
            },
          },
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Tab component={RouterLink} to="#" label="Perfil" {...a11yProps(0)} />
          <Tab component={RouterLink} to="#" label="Escola" {...a11yProps(1)} />
          <Tab
            component={RouterLink}
            to="#"
            label="Segurança"
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProfileData />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <School />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Security />
        </TabPanel>
      </div>
    </MainCard>
  );
};

export default Profile;
