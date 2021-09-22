import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IntroImage from "../../../../assets/images/Intro.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(3),
    height: "100%",
    flexGrow: 1,
  },
  cardImage: {
    height: "400px",
    marginLeft: theme.spacing(0),
  },
  introContainer: {
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
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
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.exploreHomeButton}
                  >
                    Get Connected
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.explorePackages}
                  >
                    Explore Packages
                  </Button>
                  <br />
                </div>
                <Link
                  href="#link"
                  variant="body2"
                  className={classes.anchorLink}
                >
                  Already made a request, Check Status
                </Link>
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
