import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DisplayImage from "../../../../assets/images/img_3.png";
import HomeInsuranceImg from "../../../../assets/images/HomeInsuranceImg.png";
import OutdoorCamera from "../../../../assets/images/OutdoorCamera.png";
import GigaBox from "../../../../assets/images/GigaBox.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    fontSize: 30,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
  },
  insuranceHeader: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(3),
    fontSize: 30,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
  },
  inCardHeading: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
    fontSize: 32,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
  },
  buttonAction: {
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  contentWrapper: {
    marginTop: theme.spacing(6),
  },
  cardWithImageText: {
    marginLeft: theme.spacing(0),
  },
  infoIcons: {
    backgroundColor: theme.palette.white.main,
    height: "104px",
    width: "104px",
    borderRadius: "52px",
  },
  requirementsIcons: {
    marginTop: theme.spacing(5),
  },
  infoIconImage: {
    height: "71px",
    width: "55px",
  },
  infoCard: {
    backgroundColor: theme.palette.background.dark,
  },
  cardImage: {
    height: 450,
    width: 500,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      height: 250,
      width: 280,
    },
  },
  smallCardImage: {
    height: 200,
    borderRadius: 10,
  },
  linkItemText: {
    color: theme.palette.black,
    fontSize: 10,
  },
  billingCards: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  exploreButtons: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
  },
  exploreHomeButton: {
    marginRight: theme.spacing(2),
  },
}));

const InformationTab = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.infoCard}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography className={classes.heading}>
              Routers And More
            </Typography>
            <Card elevation={0} className={classes.billingCards}>
              <CardContent>
                <Grid container>
                  <Grid item lg={6} md={6} xl={6} xs={12} sm={12}>
                    <img
                      src={DisplayImage}
                      alt="info icon"
                      className={classes.cardImage}
                    />
                  </Grid>
                  <Grid item lg={6} md={6} xl={6} xs={12} sm={12}>
                    <div className={classes.cardWithImageText}>
                      <Typography className={classes.inCardHeading}>
                        Never Miss a Moment With The <br />
                        4G WIFI Router
                      </Typography>
                      <Typography variant="body1">
                        Enjoy seamless and fast WIFI internet at home. <br />
                        Get yours today at Safaricom shops Countrywide
                      </Typography>
                    </div>
                    <Link to="/4g-wifi-router">
                      <Button size="small" className={classes.buttonAction}>
                        Find out more <NavigateNextIcon />
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Grid container spacing={2}>
              <Grid item lg={6} md={6} xl={6} xs={12} sm={12} spacing={3}>
                <Card elevation={0}>
                  <CardContent>
                    <Grid container>
                      <Grid item lg={7} md={7} xl={7} xs={12} sm={12}>
                        <div className={classes.cardWithImageText}>
                          <Typography className={classes.inCardHeading}>
                            Enjoyment ni ku-transform your TV into a Smart TV
                          </Typography>
                          <Hidden mdDown>
                            <Link to="/entertainment">
                              <Button
                                size="small"
                                className={classes.buttonAction}
                              >
                                Find out more <NavigateNextIcon />
                              </Button>
                            </Link>
                          </Hidden>
                        </div>
                      </Grid>
                      <Grid item lg={5} md={5} xl={5} xs={12} sm={12}>
                        <img
                          src={GigaBox}
                          alt="info icon"
                          className={classes.smallCardImage}
                        />
                        <Hidden lgUp>
                          <Link to="/entertainment">
                            <Button
                              size="small"
                              className={classes.buttonAction}
                            >
                              Find out more <NavigateNextIcon />
                            </Button>
                          </Link>
                        </Hidden>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={6} md={6} xl={6} xs={12} sm={12} spacing={3}>
                <Card elevation={0}>
                  <CardContent>
                    <Grid container>
                      <Grid item lg={7} md={7} xl={7} xs={12} sm={12}>
                        <div className={classes.cardWithImageText}>
                          <Typography className={classes.inCardHeading}>
                            Maintain safety in your home with CCTV
                          </Typography>
                          <Hidden mdDown>
                            <Link to="/home-cctv">
                              <Button
                                size="small"
                                className={classes.buttonAction}
                              >
                                Find out more <NavigateNextIcon />
                              </Button>
                            </Link>
                          </Hidden>
                        </div>
                      </Grid>
                      <Grid item lg={5} md={5} xl={5} xs={12} sm={12}>
                        <img
                          src={OutdoorCamera}
                          alt="info icon"
                          className={classes.smallCardImage}
                        />
                        <Hidden lgUp>
                          <Link to="/home-cctv">
                            <Button
                              size="small"
                              className={classes.buttonAction}
                            >
                              Find out more <NavigateNextIcon />
                            </Button>
                          </Link>
                        </Hidden>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Typography className={classes.insuranceHeader}>
              Home Insurance
            </Typography>

            <Card elevation={0} className={classes.billingCards}>
              <CardContent>
                <Grid container>
                  <Grid item lg={6} md={6} xl={6} xs={12} sm={12}>
                    <img
                      src={HomeInsuranceImg}
                      alt="info icon"
                      className={classes.cardImage}
                    />
                  </Grid>
                  <Grid item lg={6} md={6} xl={6} xs={12} sm={12}>
                    <div className={classes.cardWithImageText}>
                      <Typography className={classes.inCardHeading}>
                        Welcome to the good life, <br />
                        everything you own is protected
                      </Typography>
                      <Typography variant="body1">
                        Welcome to the good life, where everything you own is
                        protected and your peace of mind remains intact.
                      </Typography>
                    </div>
                    <Link to="/home-insurance">
                      <Button size="small" className={classes.buttonAction}>
                        Find out more <NavigateNextIcon />
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(InformationTab);
