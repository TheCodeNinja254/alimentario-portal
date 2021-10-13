import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
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
    // paddingLeft: theme.spacing(36),
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
    textTransform: "uppercase",
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

  const externalNavigator = (path) => {
    window.open(path, "_blank");
  };

  return (
    <div className={classes.root}>
      <Hidden mdDown>
        <AppBar elevation={1} position="fixed">
          <Toolbar variant="dense" className={classes.denseTopBar}>
            <Container>
              <Typography className={classes.topMenu} variant="h6" noWrap>
                <Link
                  href="/some"
                  component="button"
                  className={classes.topMenuItem}
                  color="inherit"
                  underline="none"
                  onClick={() =>
                    externalNavigator("https://www.safaricom.co.ke/personal")
                  }
                >
                  Personal
                </Link>
                <Link
                  href="/some"
                  component="button"
                  className={classes.topMenuItem}
                  color="inherit"
                  underline="none"
                  onClick={() =>
                    externalNavigator("https://www.safaricom.co.ke/business")
                  }
                >
                  Business
                </Link>
                <Link
                  href="/some"
                  component="button"
                  className={classes.topMenuItem}
                  color="inherit"
                  underline="none"
                  onClick={() =>
                    externalNavigator("https://www.safaricom.co.ke/about")
                  }
                >
                  About Us
                </Link>
                <Link
                  href="/some"
                  component="button"
                  className={classes.topMenuItem}
                  color="inherit"
                  underline="none"
                  onClick={() =>
                    externalNavigator(
                      "https://www.safaricom.co.ke/personal/index.php/shop"
                    )
                  }
                >
                  Shop
                </Link>
                <Link
                  href="/some"
                  component="button"
                  className={classes.topMenuItem}
                  color="inherit"
                  underline="none"
                  onClick={() =>
                    externalNavigator(
                      "https://www.safaricom.co.ke/investor-relations"
                    )
                  }
                >
                  Investor Relations
                </Link>
                <Link
                  href="/some"
                  component="button"
                  className={classes.topMenuItem}
                  color="inherit"
                  underline="none"
                  onClick={() =>
                    externalNavigator(
                      "https://www.safaricom.co.ke/about/media-center/publications/terms-and-conditions"
                    )
                  }
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/some"
                  component="button"
                  className={classes.topMenuItem}
                  color="inherit"
                  underline="none"
                  onClick={() =>
                    externalNavigator("https://www.safaricom.co.ke/careers/")
                  }
                >
                  Careers
                </Link>
              </Typography>
            </Container>
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
