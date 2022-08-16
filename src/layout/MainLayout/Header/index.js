import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, ButtonBase } from "@material-ui/core";
import { IconMenu2 } from "@tabler/icons";
import LogoSection from "../LogoSection";
import ProfileSection from "./ProfileSection";
import CartSection from "./CartSection";

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

// ===========================|| MAIN NAVBAR / HEADER ||=========================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const classes = useStyles();

  return (
    <>
      {/* logo & toggler button */}
      <div className={classes.boxContainer}>
        <ButtonBase
          sx={{ borderRadius: "12px", marginRight: 3, overflow: "hidden" }}
        >
          <IconMenu2 stroke={2} size="2rem" onClick={handleLeftDrawerToggle} />
        </ButtonBase>
        <Box component="span" sx={{ display: { md: "block" }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
      </div>

      {/* header search */}
      {/* <SearchSection theme="light" /> */}
      <div className={classes.grow} />
      <div className={classes.grow} />

      <CartSection />
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
