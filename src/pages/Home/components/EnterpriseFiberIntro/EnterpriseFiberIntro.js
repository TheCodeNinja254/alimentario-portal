import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Typography from "@material-ui/core/Typography";
import Offers from "../../../../assets/images/Icons/BusinessFiberIcons/Offers.svg";
import Network from "../../../../assets/images/Icons/BusinessFiberIcons/Network.svg";
import Services from "../../../../assets/images/Icons/BusinessFiberIcons/Services.svg";
import Support from "../../../../assets/images/Icons/BusinessFiberIcons/Support.svg";
import maleImg from "../../../../assets/images/Male.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: "#F4F6F8",
  },
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontSize: 28,
    fontWeight: "500",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardHeader: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0,
    textAlign: "left",
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
    width: "72px",
  },
  infoCard: {
    backgroundColor: theme.palette.background.dark,
  },
  featureTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "center",
    color: theme.palette.black,
  },
  featureDescription: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  featureCardContainer: {
    marginTop: theme.spacing(4),
  },
  buttonAction: {
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  submitButton: {
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  featureCard: {
    height: 450,
    borderRadius: 10,
  },
}));

const EnterpriseFiberIntro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.infoCard}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              Internet For Business
            </Typography>
            <Typography className={classes.subHeading}>
              Why Internet for Business
            </Typography>
            <Grid container justify="center" spacing={5}>
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={6}
                sm={6}
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
                      src={Network}
                      alt="info icon"
                      className={classes.infoIconImage}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    Best Network
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Try without risk – we offer 30-day rolling contracts at the
                    same price you&apos;d pay for a year&apos;s commitment if
                    you bought direct so you&apos;re not tied into a long
                    contract.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={6}
                sm={6}
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
                      src={Support}
                      alt="info icon"
                      className={classes.infoIconImage}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    24/7 Support
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Add onboarding and training for your team to get help
                    setting up Office 365. We&apos;ll walk you through the
                    essential features and provide ongoing support.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={6}
                sm={6}
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
                      src={Offers}
                      alt="info icon"
                      className={classes.infoIconImage}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    Offers & Deals
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    We can also help you to migrate your mailboxes so you can
                    retain all your contacts and keep conversations going
                    without skipping a beat.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={6}
                sm={6}
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
                      src={Services}
                      alt="info icon"
                      className={classes.infoIconImage}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    IT Services
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    You&apos;ll have all your licences in one place. We&apos;ll
                    manage your subscription – making life easier for you.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
      <Container className={classes.featureCardContainer}>
        <Grid container justify="center" spacing={2}>
          <Grid item lg={4} md={4} xl={4} xs={12} sm={12}>
            <Card className={classes.featureCard} elevation={0}>
              <CardMedia
                component="img"
                height="210"
                image={maleImg}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={classes.cardHeader}
                >
                  Get Connected
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Connect your business to fast internet with Fibre for business
                </Typography>
                {/* <RegisterCustomerMinimalForm /> */}
              </CardContent>
              <CardActions>
                <Button size="small" className={classes.submitButton}>
                  Find out more <NavigateNextIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} xl={4} xs={12} sm={12}>
            <Card className={classes.featureCard} elevation={0}>
              <CardMedia
                component="img"
                height="210"
                image={maleImg}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={classes.cardHeader}
                >
                  Internet for Business
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Create a unique and effective online presence for your
                  business easily
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" className={classes.buttonAction}>
                  Find out more <NavigateNextIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} xl={4} xs={12} sm={12}>
            <Card className={classes.featureCard} elevation={0}>
              <CardMedia
                component="img"
                height="210"
                image={maleImg}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className={classes.cardHeader}
                >
                  Voice For Business
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Get affordable internet and calling rates for your small or
                  medium sized business
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" className={classes.buttonAction}>
                  Find out more <NavigateNextIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default React.memo(EnterpriseFiberIntro);
