import PropTypes from "prop-types";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Box, IconButton, useMediaQuery } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import LogoSection from "../LogoSection";
import ProfileSection from "./ProfileSection";

// style constant
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  boxContainer: {
    width: "228px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
}));

const Header = ({ handleLeftDrawerToggle }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/* logo & toggler button */}
      <div className={classes.boxContainer}>
        <IconButton
          onClick={handleLeftDrawerToggle}
          sx={{
            marginRight: matchDownSM ? theme.spacing(0) : theme.spacing(0),
            overflow: "hidden",
          }}
        >
          <Menu stroke={2} size="2rem" />
        </IconButton>
        <Box
          component="span"
          sx={{
            display: { md: "block" },
            flexGrow: 1,
            marginTop: theme.spacing(1),
          }}
        >
          <LogoSection userRole="admin" />
        </Box>
      </div>

      {/* header search */}
      <div className={classes.grow} />
      <div className={classes.grow} />
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
