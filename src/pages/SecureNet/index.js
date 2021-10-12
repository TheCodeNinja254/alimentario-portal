import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import IntroductionScreen from "./components/IntroductionScreen/IntroductionScreen";
import SecureNetIntro from "./components/SecureNetIntro";
import HowToJoin from "./components/HowToJoin";
import PaymentTab from "./components/PaymentTab";

const useStyles = makeStyles(() => ({
  root: {},
}));

const SecureNet = () => {
  const classes = useStyles();

  return (
    <Page title="Secure Net" className={classes.root}>
      <IntroductionScreen />
      <SecureNetIntro />
      <PaymentTab />
      <HowToJoin />
    </Page>
  );
};

export default SecureNet;
