import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Container, Hidden, Tab, Tabs } from "@material-ui/core";

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
  lowerMenu: {
    paddingLeft: theme.spacing(4),
    flexGrow: 1,
  },
  lowerMenuItem: {
    marginRight: theme.spacing(6),
    fontSize: 15,
    fontWeight: 700,
  },
  lowerMenuItemActive: {
    marginRight: theme.spacing(6),
    fontSize: 15,
    fontWeight: 700,
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
  denseTopBar: {
    height: "35px",
  },
  search: {
    position: "relative",
    borderRadius: 100,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(36),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  Tab: {
    fontWeight: 700,
    textTransform: "none",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  logo: {
    height: 27,
    marginLeft: theme.spacing(36),
  },
  secondAppBar: {
    marginTop: theme.spacing(5),
  },
  mobileSecondAppBar: {
    marginTop: theme.spacing(5),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const siteLinks = [
  {
    label: "Voice",
    url: "https://www.safaricom.co.ke/personal/index.php",
  },
  {
    label: "Data",
    url: "https://www.safaricom.co.ke/personal/index.php",
  },
  {
    label: "M-PESA",
    url: "https://www.safaricom.co.ke/personal/m-pesa/m-pesa-home",
  },
  {
    label: "Fixed Internet",
    url: "/",
  },
  {
    label: "Value Added Services",
    url: "https://www.safaricom.co.ke/personal/get-more",
  },
];

const SearchAppBar = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleRouteChange = (path) => {
    window.location.href = path;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root}>
      <Hidden mdDown>
        <AppBar
          color="inherit"
          elevation={1}
          position="fixed"
          className={classes.secondAppBar}
        >
          <Toolbar>
            <img
              alt="Logo"
              className={classes.logo}
              src="/favicons/saf-logo.png"
            />
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon label tabs example"
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
            >
              {siteLinks.map((siteLink) => (
                <Tab
                  key={siteLink.label}
                  className={classes.Tab}
                  label={siteLink.label}
                  onClick={() => handleRouteChange(siteLink.url)}
                />
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden lgUp>
        <AppBar
          color="inherit"
          elevation={1}
          position="fixed"
          className={classes.mobileSecondAppBar}
        >
          <Toolbar>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon label tabs example-2"
              className={classes.TabItems}
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
            >
              {siteLinks.map((siteLink) => (
                <Tab
                  className={classes.Tab}
                  key={siteLink.label}
                  label={siteLink.label}
                  onClick={() => handleRouteChange(siteLink.url)}
                />
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>
      </Hidden>
      )
    </Container>
  );
};

export default React.memo(SearchAppBar);
