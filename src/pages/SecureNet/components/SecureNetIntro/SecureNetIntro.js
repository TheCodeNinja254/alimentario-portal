import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import parentalControlsImg from "../../../../assets/images/Icons/paraental-controlS 1.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.dark,
  },
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontSize: 45,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
  },
  subHeading: {
    marginTop: theme.spacing(2),
    fontSize: 31,
    fontWeight: "350",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
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
    textTransform: "uppercase",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    fontSize: 20,
    fontWeight: "bolder",
    color: theme.palette.primary.main,
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
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5),
  },
}));

const SecureNetIntro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.infoCard}>
        <CardContent>
          <div className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              What You Get
            </Typography>
            <Typography className={classes.subHeading}>
              Secure Net provides peace of mind to you and your family.
            </Typography>
            <Grid container justify="center" spacing={5}>
              <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={parentalControlsImg}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    PARENTAL CONTROL
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Protect your family from harmful online content by managing
                    what they can access.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={parentalControlsImg}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    GAMING
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Push your online gaming skills to the next level with Home
                    Fibre.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={parentalControlsImg}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    LEARNING
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Access a vast library of information and content anytime.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={parentalControlsImg}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    SAFETY
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Enjoy 24-hour security video surveillance and manage how
                    internet is accessed in your home.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={parentalControlsImg}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    SAFETY
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Enjoy 24-hour security video surveillance and manage how
                    internet is accessed in your home.
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <div align="center">
              <Button
                small
                variant="outlined"
                className={classes.actionButtons}
              >
                How to Join <ArrowForwardIcon />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(SecureNetIntro);
