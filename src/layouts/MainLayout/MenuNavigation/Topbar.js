import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

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
}));

const TopAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={1} position="static">
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
    </div>
  );
};

export default React.memo(TopAppBar);
