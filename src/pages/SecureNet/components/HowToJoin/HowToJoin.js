import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { HashLink } from "react-router-hash-link";
import stepOne from "../../../../assets/images/stepOne.svg";
import stepTwo from "../../../../assets/images/stepTwo.svg";
import stepThree from "../../../../assets/images/stepThree.svg";
import stepFour from "../../../../assets/images/stepFour.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.white.main,
  },
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontSize: 45,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: 25,
    },
  },
  subHeading: {
    marginTop: theme.spacing(2),
    fontSize: 31,
    fontWeight: "350",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      fontSize: 18,
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
    marginTop: theme.spacing(5),
    height: "122px",
    width: "122px",
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: "350",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
  },
  cardTitleBold: {
    fontSize: 38,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  divider: {
    color: theme.palette.black,
    backgroundColor: theme.palette.black,
  },
  actionButtons: {
    marginTop: theme.spacing(5),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white.main,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const HowToJoin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="join-secure-net">
      <Card elevation={0}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              How To Join
            </Typography>
            <Typography className={classes.subHeading}>
              Joining Safaricom Secure Net is quick and easy
            </Typography>
            <Grid container spacing={3}>
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <Typography className={classes.cardTitle}>
                  STEP <span className={classes.cardTitleBold}>1</span>
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.cardDescription}
                >
                  Subscribe to Home Fibre to get an active subscription as
                  required to enjoy secure net. Sign up here.
                </Typography>
                <div align="center">
                  <img
                    src={stepOne}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                </div>
              </Grid>
              <Divider
                orientation="vertical"
                className={classes.divider}
                absolute
              />
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <Typography className={classes.cardTitle}>
                  STEP <span className={classes.cardTitleBold}>2</span>
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.cardDescription}
                >
                  Once you are successfully subscribed to Home Fibre, dial
                  *400*6# or click here to activate Secure net and enjoy your
                  first month FREE.
                </Typography>
                <div align="center">
                  <img
                    src={stepTwo}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                </div>
              </Grid>
              <Divider
                orientation="vertical"
                className={classes.divider}
                absolute
              />
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <Typography className={classes.cardTitle}>
                  STEP <span className={classes.cardTitleBold}>3</span>
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.cardDescription}
                >
                  Once you sign up on Secure net, you will receive a link via
                  SMS which you can follow to configure your secure net options.
                </Typography>
                <div align="center">
                  <img
                    src={stepThree}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                </div>
              </Grid>
              <Divider
                orientation="vertical"
                className={classes.divider}
                absolute
              />
              <Grid
                item
                lg={3}
                md={3}
                xl={3}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <Typography className={classes.cardTitle}>
                  STEP <span className={classes.cardTitleBold}>4</span>
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.cardDescription}
                >
                  After enjoying the first month free, you will be required to
                  renew the service at ksh 200 per month as part of your home
                  fibre bill.
                </Typography>
                <div align="center">
                  <img
                    src={stepFour}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                </div>
              </Grid>
              <Divider
                orientation="vertical"
                className={classes.divider}
                absolute
              />
            </Grid>
            <div align="center">
              <HashLink to="#secure-net-payment" smooth>
                <Button
                  small
                  variant="outlined"
                  className={classes.actionButtons}
                >
                  Proceed <ArrowForwardIcon />
                </Button>
              </HashLink>
            </div>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(HowToJoin);
