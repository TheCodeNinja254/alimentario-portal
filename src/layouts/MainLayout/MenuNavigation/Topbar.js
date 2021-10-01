import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  Divider,
  Hidden,
  Link,
  SwipeableDrawer,
  Tooltip,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { SidebarNav } from "../../Components";
import WhiteSafaricomLogo from "../../../assets/images/WhiteSafaricomLogo.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(6),
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  topMenu: {
    paddingLeft: theme.spacing(36),
    flexGrow: 1,
  },
  topMenuItem: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0),
    "&:hover": {
      backgroundColor: theme.palette.common.black,
      height: "45px",
      marginTop: theme.spacing(0),
      paddingTop: theme.spacing(0),
    },
    padding: theme.spacing(1),
  },
  denseTopBar: {
    height: "35px",
    marginTop: theme.spacing(-1),
  },
  denseTopBarMobile: {
    height: 55,
  },
  logo: {
    height: 20,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  burgerMenuIcon: {
    color: theme.palette.white.main,
    marginBottom: theme.spacing(2),
  },
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
}));

const TopAppBar = () => {
  const classes = useStyles();

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <AppBar elevation={1} position="fixed">
          <Toolbar variant="dense" className={classes.denseTopBar}>
            <Typography className={classes.topMenu} variant="h6" noWrap>
              <Link
                href="/some"
                component="button"
                className={classes.topMenuItem}
                color="inherit"
                underline="none"
              >
                Personal
              </Link>
              <Link
                href="/some"
                component="button"
                className={classes.topMenuItem}
                color="inherit"
                underline="none"
              >
                Business
              </Link>
              <Link
                href="/some"
                component="button"
                className={classes.topMenuItem}
                color="inherit"
                underline="none"
              >
                About Us
              </Link>
              <Link
                href="/some"
                component="button"
                className={classes.topMenuItem}
                color="inherit"
                underline="none"
              >
                Shop
              </Link>
              <Link
                href="/some"
                component="button"
                className={classes.topMenuItem}
                color="inherit"
                underline="none"
              >
                Investor Relations
              </Link>
              <Link
                href="/some"
                component="button"
                className={classes.topMenuItem}
                color="inherit"
                underline="none"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/some"
                component="button"
                className={classes.topMenuItem}
                color="inherit"
                underline="none"
              >
                Careers
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden lgUp>
        <AppBar elevation={1} position="fixed">
          <Toolbar variant="dense" className={classes.denseTopBarMobile}>
            <Tooltip title="Menu">
              <IconButton
                className={classes.burgerMenuIcon}
                onClick={() => handleSidebarOpen()}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <img alt="Logo" className={classes.logo} src={WhiteSafaricomLogo} />
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="left"
          classes={{ paper: classes.drawer }}
          onClose={() => setOpenSidebar(false)}
          onOpen={() => setOpenSidebar(true)}
          open={openSidebar}
          variant="temporary"
        >
          <div>
            <Divider className={classes.divider} />
            <SidebarNav
              className={classes.nav}
              onClose={() => handleSidebarClose}
            />
          </div>
        </SwipeableDrawer>
      </Hidden>
    </div>
  );
};

export default React.memo(TopAppBar);
