import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import ProductView from "./components/ProductView";
import FiberAvailabilityForm from "./forms/FiberAvailabilityForm";
import GoogleMapsContainer from "./components/GoogleMap";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Page title="Home" className={classes.root}>
      <Box justifyContent="center">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={12} xl={12} sm={12} xs={12}>
              <ProductView />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={7} xl={7} sm={12} xs={12}>
              <GoogleMapsContainer />
            </Grid>
            <Grid item lg={5} xl={5} sm={12} xs={12}>
              <FiberAvailabilityForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Page>
  );
};

export default Home;
