import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {fade, makeStyles} from "@material-ui/core/styles";
import {Link} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
  lowerMenu: {
    paddingLeft: theme.spacing(4),
    flexGrow: 1,
  },
  topMenuItem: {
    marginRight: theme.spacing(3),
    "&:hover": {
      backgroundColor: theme.palette.common.black,
      height: "46px",
    },
  },
  lowerMenuItem: {
    marginRight: theme.spacing(4),
  },
  denseTopBar: {
    height: "35px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
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
    paddingLeft: theme.spacing(36),
    height: 27,
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

const TopAppBar = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar elevation={1} position="static">
          <Toolbar variant="dense" classes={classes.denseTopBar}>
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
                Terms and Conditions
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
      </div>
  );
};

export default React.memo(TopAppBar);
