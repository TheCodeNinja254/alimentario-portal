import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  List,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import StopIcon from "@material-ui/icons/Stop";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import GoogleMapsContainer from "./components/ProductsView/GoogleMap";
import ProductView from "./components/ProductsView/ProductView";
import StatusCheckImage from "../../assets/images/LandingPageImg.png";
import CheckIcon from "../../components/CheckIcon";

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
    position: "absolute",
    top: "33%",
    left: "27%",
    width: "45%",
    textAlign: "center",
  },
  confirmationCardTitle: {
    fontSize: 36,
    fontWeight: 700,
  },
  nameCardTitle: {
    fontSize: 30,
    fontWeight: 700,
  },
  cardSubtitle: {
    fontSize: 18,
    fontWeight: 200,
  },
  confirmationCard: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
  },
  checkStatusCard: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
  },
  cardAction: {
    padding: theme.spacing(3),
    justifyContent: "center",
  },
  cardImage: {
    height: "475px",
    marginTop: theme.spacing(3),
  },
}));

const ProgressCheckPage = (props) => {
  const classes = useStyles();
  const {
    state: {
      returnType,
      estateName,
      preferredDate,
      preferredTimePeriod,
      crqNumber,
      firstName,
    },
  } = props.location;

  return (
    <Page title="Home" className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        {returnType === "registrationSubmission" ? (
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
                  <Card elevation={2} className={classes.onMapInnerCard}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        className={classes.onMapCardTitle}
                      >
                        <CheckIcon />
                      </Typography>
                      <Typography
                        gutterBottom
                        className={classes.onMapCardContent}
                      >
                        Your selected estate/building is in {estateName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Card>
              </Grid>
              <Grid item lg={5} xl={5} sm={12} xs={12}>
                <Card elevation={0} className={classes.confirmationCard}>
                  <CardContent>
                    <Typography className={classes.confirmationCardTitle}>
                      We have received your request for fibre connection
                    </Typography>
                    <br />
                    <Typography className={classes.cardSubtitle}>
                      We will call you on{" "}
                      {moment(preferredDate).format("MMMM Do YYYY")} between{" "}
                      {preferredTimePeriod} Your ticket number is {crqNumber}
                    </Typography>
                    <List dense className={classes.cardSubtitle}>
                      <ListItemText
                        primary={
                          <Typography className={classes.cardSubtitle}>
                            <StopIcon />
                            Find your position in the queue
                          </Typography>
                        }
                      />
                      <ListItemText
                        primary={
                          <Typography className={classes.cardSubtitle}>
                            <StopIcon />
                            Get your questions answered and updates
                          </Typography>
                        }
                      />
                      <ListItemText
                        primary={
                          <Typography className={classes.cardSubtitle}>
                            <StopIcon />
                            Reach one of our representatives{" "}
                          </Typography>
                        }
                      />
                      <ListItemText
                        primary={
                          <Typography className={classes.cardSubtitle}>
                            <StopIcon />
                            Know the status of your request.{" "}
                          </Typography>
                        }
                      />
                    </List>
                    <Typography className={classes.cardSubtitle}>
                      by viewing your ticket {crqNumber}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Button
                      color="primary"
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Done
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={4} xl={4} />
            </Grid>
          </Container>
        ) : (
          <Container>
            <Card elevation={0}>
              <CardContent>
                <Container>
                  <Grid container spacing={3}>
                    <Grid item lg={6} xl={6}>
                      <img
                        src={StatusCheckImage}
                        alt="info icon"
                        className={classes.cardImage}
                      />
                    </Grid>
                    <Grid item lg={6} xl={6} sm={12} xs={12}>
                      <Card elevation={0} className={classes.checkStatusCard}>
                        <CardContent>
                          <Typography className={classes.nameCardTitle}>
                            Hello {firstName},
                          </Typography>
                          <br />
                          <Typography className={classes.cardSubtitle}>
                            Your fiber coverage confirmation request for your
                            residence at {estateName} has been scheduled. You
                            will receive a call on{" "}
                            {moment(preferredDate).format("MMMM Do YYYY")}{" "}
                            between {preferredTimePeriod}
                          </Typography>
                          <br />
                          <Typography className={classes.cardSubtitle}>
                            Internet connection process:
                          </Typography>
                          <br />
                          <List dense className={classes.cardSubtitle}>
                            <ListItemText
                              primary={
                                <Typography className={classes.cardSubtitle}>
                                  <StopIcon />
                                  Coverage confirmation
                                </Typography>
                              }
                            />
                            <ListItemText
                              primary={
                                <Typography className={classes.cardSubtitle}>
                                  <StopIcon />
                                  Account creation & on-boarding process
                                </Typography>
                              }
                            />
                            <ListItemText
                              primary={
                                <Typography className={classes.cardSubtitle}>
                                  <StopIcon />
                                  Installation date set
                                </Typography>
                              }
                            />
                            <ListItemText
                              primary={
                                <Typography className={classes.cardSubtitle}>
                                  <StopIcon />
                                  Physical installation and activation
                                </Typography>
                              }
                            />
                          </List>
                        </CardContent>
                        <CardActions className={classes.cardAction}>
                          <Link to="/">
                            <Button
                              color="primary"
                              size="large"
                              type="submit"
                              variant="contained"
                            >
                              Done
                            </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
              </CardContent>
            </Card>
          </Container>
        )}
      </Box>
    </Page>
  );
};

export default ProgressCheckPage;
