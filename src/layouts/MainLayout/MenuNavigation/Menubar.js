import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {fade, makeStyles} from "@material-ui/core/styles";
import {InputBase, Link} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
  lowerMenu: {
    paddingLeft: theme.spacing(4),
    flexGrow: 1,
  },
  lowerMenuItem: {
    marginRight: theme.spacing(6),
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

const SearchAppBar = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar color="inherit" elevation={1} position="static">
          <Toolbar>
            <img
                alt="Logo"
                className={classes.logo}
                src="/favicons/saf-logo.png"
            />
            <Typography className={classes.lowerMenu} variant="h4" noWrap>
              <Link
                  href="/some"
                  component="button"
                  className={classes.lowerMenuItem}
                  color="inherit"
              >
                Voice
              </Link>
              <Link
                  href="/some"
                  component="button"
                  className={classes.lowerMenuItem}
                  color="inherit"
              >
                Data
              </Link>
              <Link
                  href="/some"
                  component="button"
                  className={classes.lowerMenuItem}
                  color="inherit"
              >
                M-PESA
              </Link>
              <Link
                  href="/some"
                  component="button"
                  className={classes.lowerMenuItem}
                  color="inherit"
              >
                Fixed Internet
              </Link>
              <Link
                  href="/some"
                  component="button"
                  className={classes.lowerMenuItem}
                  color="inherit"
              >
                Value Added Services
              </Link>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{"aria-label": "search"}}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default React.memo(SearchAppBar);
