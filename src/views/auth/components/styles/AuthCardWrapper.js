import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    opacity: 0.9,
    marginTop: theme.spacing(6),
    borderRadius: 10,
    maxWidth: "475px",
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "20px",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "400px",
    },
  },
  content: {
    padding: `${theme.spacing(5)} !important`,
    [theme.breakpoints.down("lg")]: {
      padding: `${theme.spacing(3)} !important`,
    },
  },
}));

const AuthCardWrapper = ({ children, ...other }) => {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      className={classes.card}
      contentClass={classes.content}
      {...other}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};

AuthCardWrapper.propTypes = {
  children: PropTypes.node,
};

export default AuthCardWrapper;
