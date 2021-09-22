import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import IntroductionScreen from "./components/IntroductionScreen/IntroductionScreen";
import HomeInsurancePlans from "./components/HomeInsurancePlans";

const useStyles = makeStyles(() => ({
  root: {},
}));

const SecureNet = () => {
  const classes = useStyles();

  return (
    <Page title="Home Insurance" className={classes.root}>
      <IntroductionScreen />
      <HomeInsurancePlans />
    </Page>
  );
};

export default SecureNet;
