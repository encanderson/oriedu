import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { useTheme } from "@material-ui/core";
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
  Stack,
} from "@material-ui/core";

// assets
import { IconHome2, IconLogin, IconFlare, IconMoon } from "@tabler/icons"; // IconBoxMultiple
import { Menu } from "@material-ui/icons";

import { MENU_TYPE } from "@src/store/actions";

// elevation scroll
function ElevationScroll(props) {
  const { children, window } = props;
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? "none" : "1px solid",
      borderColor: trigger
        ? ""
        : theme.palette.mode === "dark"
        ? theme.palette.dark.dark
        : theme.palette.grey[200],
      color: theme.palette.text.dark,
    },
  });
}

//-----------------------|| MINIMAL LAYOUT APP BAR ||-----------------------//

const AppBar = ({ ...others }) => {
  const [drawerToggle, setDrawerToggle] = React.useState(false);
  const drawerToggler = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerToggle(open);
  };

  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);

  const [navType, setNavType] = React.useState(customization.navType);

  const handleMode = () => {
    if (navType === "dark") {
      setNavType("light");
      dispatch({ type: MENU_TYPE, navType: "light" });
    } else {
      setNavType("dark");
      dispatch({ type: MENU_TYPE, navType: "dark" });
    }
  };

  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
              <Button
                style={{ fontSize: 24 }}
                color="primary"
                component={RouterLink}
                to="/"
              >
                OriEdu
              </Button>
            </Typography>
            <Stack
              direction="row"
              sx={{ display: { xs: "none", sm: "block" } }}
              spacing={2}
            >
              <Button
                color="inherit"
                style={{ fontSize: 18 }}
                onClick={handleMode}
              >
                {navType === "dark" ? (
                  <IconMoon sx={{ fontSize: "1.3rem", mr: 0.75 }} />
                ) : (
                  <IconFlare sx={{ fontSize: "1.3rem", mr: 0.75 }} />
                )}
              </Button>
              <Button
                component={RouterLink}
                to={"/login"}
                variant="contained"
                color="secondary"
              >
                Entrar
              </Button>
            </Stack>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)}>
                <Menu />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
              >
                <div
                  sx={{
                    width: "auto",
                  }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <ListItem button component={RouterLink} to="/">
                      <ListItemIcon>
                        <IconHome2 />
                      </ListItemIcon>
                      <ListItemText primary="OriEdu" />
                    </ListItem>
                    <ListItem button onClick={handleMode}>
                      <ListItemIcon>
                        {navType === "dark" ? (
                          <IconMoon sx={{ fontSize: "1.3rem", mr: 0.75 }} />
                        ) : (
                          <IconFlare sx={{ fontSize: "1.3rem", mr: 0.75 }} />
                        )}
                      </ListItemIcon>
                      <ListItemText primary="Mode" />
                    </ListItem>
                    <ListItem button component={RouterLink} to={"/login"}>
                      <ListItemIcon>
                        <IconLogin />
                      </ListItemIcon>
                      <ListItemText primary="Entrar" />
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
