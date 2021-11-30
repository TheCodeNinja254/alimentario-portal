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
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { HashLink } from "react-router-hash-link";
import IntroImage from "../../../../assets/images/HomeCCTV.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(3),
  },
  cardImage: {
    height: "400px",
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
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 1.76,
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  textTrailing: {
    fontSize: 36,
    fontWeight: 700,
  },
  IntroText: {
    marginTop: theme.spacing(5),
  },
  sloganText: {
    fontSize: 22,
    fontWeight: "300",
    fontStyle: "normal",
    textAlign: "left",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      fontSize: 16,
    },
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
            <Grid container spacing={3} className={classes.introContainer}>
              <Grid item lg={6} xl={6}>
                <img
                  src={IntroImage}
                  alt="info icon"
                  className={classes.cardImage}
                />
              </Grid>
              <Grid item lg={6} xl={6} sm={12} xs={12}>
                <Typography className={classes.IntroText}>
                  <span className={classes.textInitial}>
                    H<span className={classes.OHome}>O</span>ME CCTV
                  </span>
                </Typography>
                <Typography className={classes.sloganText}>
                  Maintain safety in your home and manage basic home utilities
                  at all times.
                </Typography>
                <div className={classes.actionButtons}>
                  <HashLink to="#home-cctv-features" smooth>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.exploreHomeButton}
                    >
                      Features <ArrowForwardIcon />
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
