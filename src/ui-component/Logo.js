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

const Logo = ({ withName }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box sx={{ marginLeft: theme.spacing(2) }}>
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

Logo.defaultProps = { withName: false };

Logo.propTypes = {
  withName: PropTypes.bool,
};

export default Logo;
