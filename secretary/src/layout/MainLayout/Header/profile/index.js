import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// material-ui
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Avatar,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Fade,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import MainCard from "@src/components/cards/MainCard";
import ModeComponent from "@src/layout/Customization/ModeComponent";

// assets
import { IconLogout, IconSettings, IconFlare, IconMoon } from "@tabler/icons";
import { useAuth, useApp } from "@src/hooks";

// style const
const useStyles = makeStyles((theme) => ({
  navContainer: {
    width: "100%",
    maxWidth: "350px",
    minWidth: "300px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
  },
  headerAvatar: {
    cursor: "pointer",
    ...theme.typography.mediumAvatar,
    margin: "8px 0 8px 8px !important",
  },
  profileChip: {
    height: "48px",
    alignItems: "center",
    borderRadius: "27px",
    transition: "all .2s ease-in-out",
    borderColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.primary.light,
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark.main
        : theme.palette.primary.light,
    '&[aria-controls="menu-list-grow"], &:hover': {
      borderColor: theme.palette.primary.main,
      background: theme.palette.primary.main + "!important",
      color: theme.palette.primary.light,
      "& svg": {
        stroke: theme.palette.primary.light,
      },
    },
  },
  profileLabel: {
    lineHeight: 0,
    padding: "12px",
  },
  listItem: {
    marginTop: "5px",
  },
  cardContent: {
    padding: "16px !important",
  },
  card: {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.dark[800]
        : theme.palette.primary.light,
    marginBottom: "16px",
    marginTop: "16px",
  },
  flex: {
    display: "flex",
  },
  name: {
    marginLeft: "2px",
    fontWeight: 400,
  },
  ScrollHeight: {
    height: "100%",
    maxHeight: "calc(100vh - 250px)",
    overflowX: "hidden",
  },
}));

//-----------------------|| PROFILE MENU ||-----------------------//

const ProfileSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const history = useHistory();

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const { logout, user } = useAuth();
  const { isProfile } = useApp();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  React.useEffect(() => {
    if (!isProfile) {
      history.push("/perfil");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleClose(event);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const prevOpen = React.useRef(open);

  const [source, setSource] = React.useState("");

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    if (user) {
      setSource(user?.picture);
    }
    prevOpen.current = open;
  }, [open, user]);

  return (
    <React.Fragment>
      <Chip
        classes={{ label: classes.profileLabel }}
        className={classes.profileChip}
        icon={
          <Avatar
            src={`data:image/png;base64,${source}`}
            className={classes.headerAvatar}
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={
          <IconSettings
            stroke={1.5}
            size="1.5rem"
            color={theme.palette.primary.main}
          />
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 14],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <CardContent className={classes.cardContent}>
                    <Grid container direction="column" spacing={0}>
                      <Grid item className={classes.flex}>
                        <Typography variant="h4">Olá,</Typography>
                        <Typography
                          component="span"
                          variant="h4"
                          className={classes.name}
                        >
                          {user?.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          {user?.job ? user?.job : "Profissão"}
                        </Typography>
                      </Grid>
                    </Grid>
                    <PerfectScrollbar className={classes.ScrollHeight}>
                      {/* <UpgradePlanCard /> */}
                      <Divider />
                      <List component="nav" className={classes.navContainer}>
                        <ListItem
                          className={classes.listItem}
                          sx={{
                            borderRadius: customization.borderRadius + "px",
                          }}
                          button
                          selected={selectedIndex === 0}
                          onClick={(event) => handleListItemClick(event, 0)}
                        >
                          <ListItemIcon>
                            <IconSettings stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Link
                                component={RouterLink}
                                to="/perfil"
                                sx={{
                                  "&:hover, &:focus": {
                                    textDecoration: "none",
                                  },
                                }}
                              >
                                <Typography variant="body2">Perfil</Typography>
                              </Link>
                            }
                          />
                        </ListItem>
                        <ListItem
                          className={classes.listItem}
                          sx={{
                            borderRadius: customization.borderRadius + "px",
                          }}
                          button
                          selected={selectedIndex === 3}
                        >
                          <ListItemIcon>
                            {customization.navType === "dark" ? (
                              <IconMoon stroke={1.5} size="1.3rem" />
                            ) : (
                              <IconFlare stroke={1.5} size="1.3rem" />
                            )}
                          </ListItemIcon>

                          <ModeComponent />
                        </ListItem>
                        <ListItem
                          className={classes.listItem}
                          sx={{
                            borderRadius: customization.borderRadius + "px",
                          }}
                          button
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">Sair</Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </PerfectScrollbar>
                  </CardContent>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default ProfileSection;
