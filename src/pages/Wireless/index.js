import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import IntroductionScreen from "./components/IntroductionScreen/IntroductionScreen";
import PackagePrices from "./components/PackagePrices/PackagePrices";
import WiFiRouters, { WiFiExtenders } from "./components/WiFiRouters";
import Features from "./components/Features";

const useStyles = makeStyles(() => ({
  root: {},
}));

const HomeCCTV = () => {
  const classes = useStyles();

  return (
    <Page title="4G Wireless Solution" className={classes.root}>
      <IntroductionScreen />
      <PackagePrices />
      <WiFiRouters />
      <WiFiExtenders />
      <Features />
    </Page>
  );
};

export default HomeCCTV;
