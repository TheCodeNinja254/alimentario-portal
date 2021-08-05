import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Page from "../../components/Page";
import RegisterCustomerForm from "./forms/RegisterCustomerForm";
import GoogleMapsContainer from "./components/GoogleMap";
import ProductView from "./components/ProductView";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: "100%",
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
    fontWeight: 600,
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
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
  cardActions: {
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
}));

const RegistrationPage = (props) => {
  const classes = useStyles();
  const {
    state: { inputEstate, selectedEstate, areaName, streetName },
  } = props.location;

  let estateName = selectedEstate;
  let estateId;
  const passedEstateName = selectedEstate.split("-");
  // eslint-disable-next-line prefer-destructuring
  estateId = passedEstateName[0];
  const placeholderOnEstateInput = "null_selection";
  if (selectedEstate === placeholderOnEstateInput) {
    estateName = inputEstate;
    estateId = 0;
  }

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
                    {estateId !== 0 ? (
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
                          {estateName} is Fiber Ready
                        </Typography>
                      </CardContent>
                    ) : (
                      <>
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
                            {estateName} is Not Fiber Ready
                          </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                          <Link
                            href="https://www.safaricom.co.ke/home/4g-wifi-router/"
                            variant="body2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth
                            >
                              Explore 4G for HOME
                            </Button>
                          </Link>
                          <Link
                            href="https://www.safaricom.co.ke/business/sme/fixed-line-solutions/compact-series-fixed-internet"
                            variant="body2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button
                              variant="contained"
                              color="default"
                              fullWidth
                            >
                              Fixed LTE for HOME
                            </Button>
                          </Link>
                        </CardActions>
                      </>
                    )}
                  </Card>
                </Card>
              </Card>
            </Grid>
            <Grid item lg={5} xl={5} sm={12} xs={12}>
              <RegisterCustomerForm
                estateId={estateId}
                areaName={areaName}
                streetName={streetName}
                inputEstate={inputEstate}
              />
            </Grid>
            <Grid item lg={4} xl={4} />
          </Grid>
        </Container>
      </Box>
    </Page>
  );
};

export default RegistrationPage;
