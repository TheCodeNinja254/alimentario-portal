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
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import GigaBoxImg from "../../../../assets/images/GigaBox.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0.5),
  },
  cardImage: {
    height: "540px",
    marginLeft: theme.spacing(0),
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
  },
  exploreHomeButton: {
    marginRight: theme.spacing(2),
  },
  actionButtons: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2),
  },
  anchorLink: {
    color: theme.palette.black,
    textDecoration: "underline",
    fontSize: 22,
    fontWeight: "300",
    fontStyle: "normal",
  },
}));
const GigaBoxComp = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card elevation={0}>
        <CardContent>
          <Container>
            <Grid container spacing={3} className={classes.introContainer}>
              <Grid item lg={6} xl={6} sm={12} xs={12}>
                <div className={classes.IntroText}>
                  <span className={classes.textInitial}>Safaricom Gigabox</span>
                  <Typography className={classes.sloganText}>
                    The Devices packs a punch with a WI-FI hotspot capability
                    that can connect up to ten users as well as over 50
                    Free-To-Air Radio and TV channels. Turn your TV into a smart
                    TV with Kenya&apos;s best decoder today.
                  </Typography>
                </div>
                <div className={classes.actionButtons}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.exploreHomeButton}
                  >
                    Features <ArrowForwardIcon />
                  </Button>
                  <span className={classes.sloganText}>or </span>
                  <Link
                    href="https://www.masoko.com/4k-andriod-tv-ott-ematic-box-dv8235-1"
                    className={classes.anchorLink}
                  >
                    {" "}
                    Buy Now
                  </Link>
                </div>
              </Grid>
              <Grid item lg={6} xl={6}>
                <img
                  src={GigaBoxImg}
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

export default GigaBoxComp;
