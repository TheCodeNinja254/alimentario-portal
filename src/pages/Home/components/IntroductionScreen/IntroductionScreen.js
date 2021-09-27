import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IntroImage from "../../../../assets/images/Intro.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0),
  },
  cardImage: {
    height: "400px",
    marginLeft: theme.spacing(0),
  },
  introContainer: {
    paddingTop: theme.spacing(5),
  },
  textInitial: {
    fontSize: 36,
    fontWeight: 500,
  },
  textTrailing: {
    fontSize: 36,
    fontWeight: 700,
  },
  IntroText: {
    marginTop: theme.spacing(5),
  },
  sloganText: {
    fontSize: 26,
    fontWeight: 500,
    marginTop: theme.spacing(4),
  },
  exploreHomeButton: {
    marginRight: theme.spacing(2),
  },
  explorePackages: {
    backgroundColor: "#DBDBDB",
  },
  actionButtons: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2),
  },
  anchorLink: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    textDecoration: "underline",
    color: theme.palette.primary.main,
  },
}));
const IntroductionScreen = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card elevation={0} className={classes.root}>
        <CardContent>
          <Container>
            <Grid container spacing={3} className={classes.introContainer}>
              <Grid item lg={6} xl={6} sm={12} xs={12}>
                <div className={classes.IntroText}>
                  <span className={classes.textInitial}>Fast, Reliable & </span>
                  <span className={classes.textTrailing}>
                    Unlimited Internet Access
                  </span>
                  <Typography className={classes.sloganText}>
                    Stay connected with Safaricom <br /> Internet
                  </Typography>
                </div>
                <div className={classes.actionButtons}>
                  <HashLink to="#checkStatus">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.exploreHomeButton}
                    >
                      Get Connected
                    </Button>
                  </HashLink>
                  <HashLink to="#packages">
                    <Button
                      variant="contained"
                      className={classes.explorePackages}
                    >
                      Explore Packages
                    </Button>
                  </HashLink>
                  <br />
                </div>
                <HashLink
                  to="#checkStatus"
                  variant="body2"
                  className={classes.anchorLink}
                >
                  Already made a request, Check Status
                </HashLink>
              </Grid>
              <Grid item lg={6} xl={6}>
                <img
                  src={IntroImage}
                  alt="info icon"
                  className={classes.cardImage}
                />
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IntroductionScreen;
