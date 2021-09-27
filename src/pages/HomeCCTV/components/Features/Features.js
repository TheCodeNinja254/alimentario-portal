import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { HashLink } from "react-router-hash-link";
import Icon1 from "../../../../assets/images/Icons/cctv/icon1.svg";
import Icon2 from "../../../../assets/images/Icons/cctv/Icon2.svg";
import Icon3 from "../../../../assets/images/Icons/cctv/Icon3.svg";
import Icon4 from "../../../../assets/images/Icons/cctv/Icon4.svg";

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
    textTransform: "capitalize",
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
    height: "115px",
    width: "115px",
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
    marginTop: theme.spacing(2),
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: theme.palette.black,
  },
  actionButtons: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} id="home-cctv-features">
      <Card elevation={0} className={classes.infoCard}>
        <CardContent>
          <div className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              What it can do for you
            </Typography>
            <Grid container spacing={6}>
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
                    src={Icon1}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
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
                lg={3}
                md={3}
                xl={3}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={Icon2}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Gives you peace of mind by allowing you to check in on your
                    family and pets while you’re away.
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
                    src={Icon3}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Allows you to monitor activity in your home and compound
                    anywhere, anytime.
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
                    src={Icon4}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Records real time footage that you can always access and
                    playback at your convenience.
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <div align="center">
              <HashLink to="#get-home-cctv">
                <Button
                  small
                  variant="outlined"
                  className={classes.actionButtons}
                >
                  How to Get it
                  <ArrowForwardIcon />
                </Button>
              </HashLink>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default React.memo(Features);
