import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import IntroductionScreen from "./components/IntroductionScreen/IntroductionScreen";
import FeaturesAndSpecs from "./components/FeaturesAndSpecs/FeaturesAndSpecs";

const useStyles = makeStyles(() => ({
  root: {},
}));

const HomeCCTV = () => {
  const classes = useStyles();

  return (
    <Page title="Entertainment" className={classes.root}>
      <IntroductionScreen />
      <FeaturesAndSpecs />
    </Page>
  );
};

export default HomeCCTV;
