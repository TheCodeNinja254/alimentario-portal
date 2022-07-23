import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import logo from "../assets/images/alimentarioLogo.svg";

// ===========================|| LOGO SVG ||=========================== //
const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(3),
  },
}));

const Logo = ({ withName }) => {
  const classes = useStyles();

  return (
    <>
      <img
        src={logo}
        className={classes.logo}
        alt="Desafio Alimentario"
        width="35"
        height="35"
      />
      {withName && (
        <Typography variant="h4" color="primary.dark">
          Desafio Alimentario
        </Typography>
      )}
    </>
  );
};

Logo.defaultProps = { withName: true };

Logo.propTypes = {
  withName: PropTypes.bool,
};

export default Logo;
