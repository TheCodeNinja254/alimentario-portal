import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Snackbar,
  Container,
} from "@mui/material";
import { drawerWidth } from "../../store/constant";
import { SET_MENU } from "../../store/actions";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { AlertContext } from "../../context/AlertProvider";
import SocialsAndHelp from "../SocialsAndHelp";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    // opacity: "90%",
  },
  appBarWidth: {
    transition: theme.transitions.create("width"),
    backgroundColor: theme.palette.background.paper,
    // opacity: "90%",
  },
  content: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth - 20,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      padding: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      width: `calc(100% - ${drawerWidth}px)`,
      padding: "16px",
      marginRight: "10px",
    },
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
  leftDrawerOpen: {
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    padding: theme.spacing(4),
  },
}));

const MainLayout = () => {
  const theme = useTheme();
  const classes = useStyles();

  const { snackbarVisible, hideSnackbar } = useContext(AlertContext);

  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  React.useEffect(() => {
    dispatch({ type: SET_MENU, opened: false });
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Snackbar
        open={snackbarVisible}
        autoHideDuration={32000}
        onClose={hideSnackbar}
        message="Do you see something you love? Pre-order your meal. We will deliver it
        to your location within the venue, at your preferred time."
      />
      {/* header */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.primary.main,
        }}
        className={leftDrawerOpened ? classes.appBarWidth : classes.appBar}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        drawerOpen={leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <main
        className={
          leftDrawerOpened ? classes.leftDrawerOpen : classes.leftDrawerClosed
        }
      >
        <Container>
          <Outlet />
        </Container>
      </main>
      <SocialsAndHelp />
    </div>
  );
};

export default MainLayout;
