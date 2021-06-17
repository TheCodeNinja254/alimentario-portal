import React from "react";
import PropTypes from "prop-types";
import { useReactiveVar } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { loadingStatus } from "../../Apollo/ReactiveVariables";
import Topbar from "./Topbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.main,
  },
}));
const MainLayout = ({ children }) => {
  const classes = useStyles();
  const loading = useReactiveVar(loadingStatus);
  return (
    <div className={classes.root}>
      <Backdrop open={loading} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Topbar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

MainLayout.propType = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
