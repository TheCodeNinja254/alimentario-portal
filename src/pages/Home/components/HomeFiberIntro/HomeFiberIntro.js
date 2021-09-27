import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EntertainmentIcon from "../../../../assets/images/Icons/HomeFiberIcons/Entertainment.svg";
import GamingIcon from "../../../../assets/images/Icons/HomeFiberIcons/Gaming.svg";
import LearningIcon from "../../../../assets/images/Icons/HomeFiberIcons/Learning.svg";
import SafetyIcon from "../../../../assets/images/Icons/HomeFiberIcons/Safety.svg";

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
  },
  subHeading: {
    marginTop: theme.spacing(2),
    fontSize: 37,
    fontWeight: "bold",
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
    fontSize: 25,
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
}));

const HomeFiberIntro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.infoCard}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              Home Fiber
            </Typography>
            <Typography className={classes.subHeading}>
              Access limitless possibilities from the <br /> comfort of your
              home
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
                  <img
                    src={EntertainmentIcon}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    ENTERTAINMENT
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Stream videos and music in record time and enjoy the latest
                    content from Kwese, Iflix and Showmax.
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
                  <img
                    src={GamingIcon}
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
                lg={3}
                md={3}
                xl={3}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={LearningIcon}
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
                lg={3}
                md={3}
                xl={3}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={SafetyIcon}
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
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(HomeFiberIntro);
