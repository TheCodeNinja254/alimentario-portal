import React from "react";
import { makeStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "right",
  },
  progress: {
    margin: theme.spacing(0),
    height: 5,
    color: theme.palette.primary.main,
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
