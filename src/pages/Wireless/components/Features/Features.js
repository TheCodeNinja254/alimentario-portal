import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import wifiHotspot from "../../../../assets/images/Icons/wifi-hotspot 1.svg";
import Entertainment from "../../../../assets/images/Icons/Entertainment.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.white.main,
  },
  contentWrapper: {
    marginTop: theme.spacing(6),
  },
  contentBody: {
    marginTop: theme.spacing(6),
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
  requirementsIcons: {
    marginTop: theme.spacing(5),
  },
  actionButtons: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white.main,
    },
  },
  infoIconImage: {
    height: "71px",
    width: "72px",
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

const Features = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              Features of Safaricom HOME 4G WiFi Router
            </Typography>
            <Grid container justify="center" spacing={8}>
              <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={wifiHotspot}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    WIFI-HOTSPOT
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Experience amazing 4G+ internet speeds using the Wi-Fi
                    hotspot.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={Entertainment}
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
                    Family and friends are all invited to enjoy the experience
                    with multiple connectivity capability of up to 32 devices.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
      <div align="center">
        <a
          href="https://www.safaricom.co.ke/find-our-shops"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            small
            variant="outlined"
            className={classes.actionButtons}
            color="default"
          >
            Buy NOW From Our Shops <ArrowForwardIcon />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Features;
