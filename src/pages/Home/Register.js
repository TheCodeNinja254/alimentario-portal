import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import ProductView from "./components/ProductView";
import RegisterCustomerForm from "./forms/RegisterCustomerForm";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: "100%",
  },
}));

const RegistrationPage = () => {
  const classes = useStyles();

  return (
    <Page title="Home" className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={7} xl={7} sm={12} xs={12}>
              <ProductView />
            </Grid>
            <Grid item lg={5} xl={5} sm={12} xs={12}>
              <RegisterCustomerForm />
            </Grid>
            <Grid item lg={4} xl={4} />
          </Grid>
        </Container>
      </Box>
    </Page>
  );
};

export default RegistrationPage;
