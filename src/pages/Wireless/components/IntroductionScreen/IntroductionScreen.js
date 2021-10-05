import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { HashLink } from "react-router-hash-link";
import IntroImage from "../../../../assets/images/LandingPageImg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(3),
  },
  cardImage: {
    height: "350px",
    marginLeft: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      maxHeight: "250px",
    },
  },
  introContainer: {
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  textInitial: {
    fontSize: 44,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "left",
  },
  textTrailing: {
    fontSize: 36,
    fontWeight: 700,
  },
  IntroText: {
    marginTop: theme.spacing(3),
  },
  sloganText: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    marginTop: theme.spacing(3),
  },
  sloganBold: {
    fontSize: 22,
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
  },
  exploreHomeButton: {
    marginRight: theme.spacing(2),
  },
  actionButtons: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2),
  },
  OHome: {
    color: theme.palette.error.dark,
  },
  anchorLink: {
    color: theme.palette.black,
    textDecoration: "underline",
    fontSize: 22,
    fontWeight: "300",
    fontStyle: "normal",
  },
}));

const IntroductionScreen = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card elevation={0}>
        <CardContent>
          <Container>
            <Grid container spacing={2} className={classes.introContainer}>
              <Grid item lg={4} xl={4} sm={12} xs={12}>
                <img
                  src={IntroImage}
                  alt="info icon"
                  className={classes.cardImage}
                />
              </Grid>
              <Grid item lg={7} xl={7} sm={12} xs={12}>
                <Typography className={classes.IntroText}>
                  <span className={classes.textInitial}>
                    Never Miss A Moment With The 4G WIFI <br />
                    Router
                  </span>
                </Typography>
                <Typography className={classes.sloganText}>
                  Enjoy seamless and fast WIFI internet at home. Get yours today
                  at Safaricom shops Countrywide
                </Typography>

                <div className={classes.actionButtons}>
                  <HashLink to="#wireless-pricing" smooth>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.exploreHomeButton}
                    >
                      View Pricing <ArrowDownwardIcon />
                    </Button>
                  </HashLink>
                </div>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IntroductionScreen;
