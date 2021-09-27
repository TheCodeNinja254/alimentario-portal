import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import IntroductionScreen from "./components/IntroductionScreen/IntroductionScreen";
import Features from "./components/Features";
import HowToGetIt from "./components/HowToGetIt";
import CamerasView from "./components/CamerasView";

const useStyles = makeStyles(() => ({
  root: {},
}));

const HomeCCTV = () => {
  const classes = useStyles();

  return (
    <Page title="Home CCTV" className={classes.root}>
      <IntroductionScreen />
      <Features />
      <HowToGetIt />
      <CamerasView />
    </Page>
  );
};

export default HomeCCTV;
