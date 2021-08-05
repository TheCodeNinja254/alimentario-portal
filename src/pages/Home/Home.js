import React from "react";
import {Box, Card, CardContent, Container, Divider, Grid, Paper,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Page from "../../components/Page";
import ProductView from "./components/ProductView";
import FiberAvailabilityForm from "./forms/FiberAvailabilityForm";
import GoogleMapsContainer from "./components/GoogleMap";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  mapContainer: {
    position: "relative",
    width: 650,
    height: 890,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 4,
    marginTop: 50,
    borderColor: "#d2d2d2",
  },
  mapOverlayCard: {
    position: "absolute",
    top: "33%",
    left: "27%",
    width: "45%",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  onMapCardTop: {
    backgroundColor: "transparent",
    boxShadow: "none",
    left: "100%",
  },
  locationIcon: {
    fontSize: 76,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(-2),
    color: theme.palette.primary.main,
  },
  onMapCardTitle: {
    fontSize: 20,
    fontWeight: "bolder",
    color: theme.palette.black,
  },
  onMapCardContent: {
    fontSize: 20,
    fontWeight: "normal",
    marginTop: theme.spacing(2),
    color: theme.palette.black,
  },
  onMapDivider: {
    color: theme.palette.black,
  },
  onMapInnerCard: {
    borderRadius: 23,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowRadius: 30,
    shadowOpacity: 1,
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
              <Card className={classes.mapContainer}>
                <GoogleMapsContainer />
                <Card elevation={0} className={classes.mapOverlayCard}>
                  <Paper elevation={0} className={classes.onMapCardTop}>
                    <Typography>
                      <LocationOnIcon className={classes.locationIcon} />
                    </Typography>
                  </Paper>
                  <Card elevation={2} className={classes.onMapInnerCard}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        className={classes.onMapCardTitle}
                      >
                        Check Your Coverage
                      </Typography>
                      <Divider
                        variant="middle"
                        className={classes.onMapDivider}
                      />
                      <Typography
                        gutterBottom
                        className={classes.onMapCardContent}
                      >
                        Find out if your area is Fibre Ready
                      </Typography>
                    </CardContent>
                  </Card>
                </Card>
              </Card>
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
