import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SecureNetIcon from "../../../../assets/images/Icons/NavIcons/SecureNet.png";
import Entertainment from "../../../../assets/images/Icons/NavIcons/Entertainment.png";
import HomeCCTV from "../../../../assets/images/Icons/NavIcons/HomeCCTV.png";
import HomeInsurance from "../../../../assets/images/Icons/NavIcons/HomeInsurance.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.dark,
  },
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      marginTop: theme.spacing(1),
    },
  },
  subHeading: {
    marginTop: theme.spacing(2),
    fontSize: 37,
    fontWeight: "bold",
    letterSpacing: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  contentWrapper: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  infoIcons: {
    backgroundColor: theme.palette.primary.main,
    height: "65px",
    width: "65px",
    borderRadius: "52px",
  },
  requirementsIcons: {
    marginTop: theme.spacing(5),
  },
  infoIconImage: {
    height: 30,
  },
  infoCard: {
    backgroundColor: theme.palette.background.dark,
  },
  featureTitle: {
    textTransform: "uppercase",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: 25,
    fontWeight: "bolder",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  featureDescription: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: theme.palette.black,
  },
  actionButtons: {
    marginTop: theme.spacing(2),
    fontSize: 15,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white.main,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const HomeFiberIntro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="addons">
      <Card elevation={0} className={classes.infoCard}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              Home Fiber Add-ons
            </Typography>
            <Grid container justify="center" spacing={5}>
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <Box
                    className={classes.infoIcons}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
                    <img
                      src={SecureNetIcon}
                      alt="Secure Net Icon"
                      className={classes.infoIconImage}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    SECURE-NET
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Keep your loved ones safe and secure online. Sign up and
                    enjoy a FREE trial for one month. Stay safe & connected
                  </Typography>
                  <div align="center">
                    <Link to="/secure-net" target="_blank">
                      <Button
                        small
                        variant="outlined"
                        className={classes.actionButtons}
                      >
                        Find out more <ArrowForwardIcon />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <Box
                    className={classes.infoIcons}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
                    <img
                      src={Entertainment}
                      alt="Secure Net Icon"
                      className={classes.infoIconImage}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    SMART TV BOX
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Enjoyment ni ku-transform your TV into a Smart TV. Get a
                    Smart Android Box and upgrade to Casting.
                  </Typography>
                  <div align="center">
                    <Link to="/entertainment" target="_blank">
                      <Button
                        small
                        variant="outlined"
                        className={classes.actionButtons}
                      >
                        Find out more <ArrowForwardIcon />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <Box
                    className={classes.infoIcons}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
                    <img
                      src={HomeCCTV}
                      alt="Secure Net Icon"
                      className={classes.infoIconImage}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    HOME CCTV
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Safety is paramount, so is peace of mind. Maintain safety in
                    your home and manage basic home utilities at all times.
                  </Typography>
                  <div align="center">
                    <Link to="/home-cctv" target="_blank">
                      <Button
                        small
                        variant="outlined"
                        className={classes.actionButtons}
                      >
                        Find out more <ArrowForwardIcon />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <Box
                    className={classes.infoIcons}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
                    <img
                      src={HomeInsurance}
                      alt="Secure Net Icon"
                      className={classes.infoIconImage}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    HOME INSURANCE
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Welcome to the good life, where everything you own is
                    protected and your peace of mind remains intact.
                  </Typography>
                  <div align="center">
                    <Link to="/home-insurance" target="_blank">
                      <Button
                        small
                        variant="outlined"
                        className={classes.actionButtons}
                      >
                        Find out more <ArrowForwardIcon />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(HomeFiberIntro);
