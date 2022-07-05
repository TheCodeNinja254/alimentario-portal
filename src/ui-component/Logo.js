import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../assets/images/alimentarioLogo.svg";

// ===========================|| LOGO SVG ||=========================== //
const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(3),
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <>
      <img
        src={logo}
        className={classes.logo}
        alt="Desafio Alimentario"
        width="50"
        height="50"
      />
      <Typography variant="h3" color="secondary">
        Desafio Alimentario
      </Typography>
    </>
  );
};

export default Logo;
