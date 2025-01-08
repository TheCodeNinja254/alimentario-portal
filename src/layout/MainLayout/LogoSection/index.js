import React from "react";
import { Link } from "react-router-dom";
import { ButtonBase, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import config from "../../../config";
import Logo from "../../../ui-component/Logo";

const LogoSection = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
      <Logo leftSpacing={matchDownSM ? theme.spacing(0) : theme.spacing(2)} />
    </ButtonBase>
  );
};

export default LogoSection;
