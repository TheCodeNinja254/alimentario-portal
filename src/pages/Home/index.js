import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import Page from "../../components/Page";
import ProductView from "./components/ProductsView/ProductView";
import FiberAvailabilityForm from "./forms/FiberAvailabilityForm";
import coverBackgroundImage from "../../assets/images/img_3.png";
import HomeFiberIntro from "./components/HomeFiberIntro";
import EnterpriseFiberIntro from "./components/EnterpriseFiberIntro";
import InformationTab from "./components/InformationTab/InformationTab";
import IntroductionScreen from "./components/IntroductionScreen/IntroductionScreen";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3),
  },
  checkCoverageArea: {
    backgroundColor: theme.palette.white.main,
  },
  mapContainer: {
    position: "relative",
    width: 600,
    height: 600,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 4,
    marginTop: 20,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderColor: "#d2d2d2",
    [theme.breakpoints.down("sm")]: {
      height: 400,
      width: "auto",
    },
  },
  coverageImage: {
    height: 600,
    [theme.breakpoints.down("sm")]: {
      maxHeight: 400,
    },
  },
  mapOverlayCard: {
    position: "absolute",
    top: "40%",
    left: "27%",
    width: "45%",
    textAlign: "center",
    backgroundColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      top: "25%",
      left: "10%",
      width: "80%",
    },
  },
  selectedEstate: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: 22,
    marginTop: theme.spacing(3),
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
  pageHeading: {
    marginTop: theme.spacing(6),
    fontWeight: 700,
    textAlign: "center",
    alignContent: "center",
  },
  pageSubHeading: {
    width: 481,
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "left",
    color: theme.palette.black,
    margin: theme.spacing(2),
    marginLeft: theme.spacing(3),
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
  const [estateStatus, setEstateStatus] = React.useState(false);
  const [readyEstate, setReadyEstate] = React.useState(false);
  const [estateName, setEstateName] = React.useState("New Estate");

  return (
    <Page title="Home" className={classes.root}>
      <IntroductionScreen />
      <Box justifyContent="center">
        <Container>
          <Grid container spacing={0}>
            <Grid item lg={12} xl={12} sm={12} xs={12}>
              <Typography variant="h2" className={classes.pageHeading}>
                Check Coverage
              </Typography>
            </Grid>
            <Grid
              item
              lg={7}
              xl={7}
              sm={12}
              xs={12}
              className={classes.checkCoverageArea}
            >
              <Card className={classes.mapContainer}>
                <img
                  src={coverBackgroundImage}
                  alt="BackgroundImage"
                  className={classes.coverageImage}
                />
                <Card elevation={0} className={classes.mapOverlayCard}>
                  <Paper elevation={0} className={classes.onMapCardTop}>
                    <Typography>
                      <LocationOnIcon className={classes.locationIcon} />
                    </Typography>
                  </Paper>
                  {/* eslint-disable-next-line no-nested-ternary */}
                  {estateStatus && estateName !== "" ? (
                    readyEstate ? (
                      <Card elevation={2} className={classes.onMapInnerCard}>
                        <CardContent>
                          <Typography
                            gutterBottom
                            className={classes.selectedEstate}
                          >
                            {estateName} is covered
                          </Typography>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card elevation={2} className={classes.onMapInnerCard}>
                        <CardContent>
                          <Typography
                            gutterBottom
                            className={classes.selectedEstate}
                          >
                            {estateName} is not covered
                          </Typography>
                          <Link to="4g-wifi-router">
                            <Button variant="contained" color="primary">
                              Explore 4G for Home
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    )
                  ) : (
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
                        <Link to="4g-wifi-router">
                          <Button variant="contained" color="primary">
                            Explore 4G for Home
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )}
                </Card>
              </Card>
            </Grid>
            <Grid
              item
              lg={5}
              xl={5}
              sm={12}
              xs={12}
              className={classes.checkCoverageArea}
              id="get-connected"
            >
              <FiberAvailabilityForm
                setEstateStatus={setEstateStatus}
                setReadyEstate={setReadyEstate}
                setEstateName={setEstateName}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} id="packages">
            <Grid item lg={12} xl={12} sm={12} xs={12}>
              <Typography variant="h2" className={classes.pageHeading}>
                Fiber Packages
              </Typography>
              <ProductView />
            </Grid>
          </Grid>
        </Container>
        <Grid container spacing={3}>
          <Grid item lg={12} xl={12} sm={12} xs={12}>
            <HomeFiberIntro />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={12} xl={12} sm={12} xs={12}>
            <EnterpriseFiberIntro />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} xl={12} sm={12} xs={12}>
            <InformationTab />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default Home;
