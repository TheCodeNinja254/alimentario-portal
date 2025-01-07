import React from "react";

import { makeStyles, useTheme } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import logo from "../assets/images/desafioLogo.png";

// ===========================|| LOGO SVG ||=========================== //
const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(3),
  },
}));

const Logo = ({ withName, leftSpacing }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box sx={{ marginLeft: leftSpacing || theme.spacing(2) }}>
      <img
        src={logo}
        className={classes.logo}
        alt="Desafio Alimentario"
        width="auto"
        height="35"
      />
      {withName && <></>}
    </Box>
  );
};

Logo.defaultProps = { withName: false, leftSpacing: null };

Logo.propTypes = {
  withName: PropTypes.bool,
  leftSpacing: PropTypes.any,
};

export default Logo;
