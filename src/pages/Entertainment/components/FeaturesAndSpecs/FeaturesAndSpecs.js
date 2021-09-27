import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import TvScreen from "../../../../assets/images/Icons/EmaticBoxFeatures/Screen1.svg";
import KScreen from "../../../../assets/images/Icons/EmaticBoxFeatures/4KScreen.svg";
import Android from "../../../../assets/images/Icons/EmaticBoxFeatures/Android.svg";
import VoiceCommand from "../../../../assets/images/Icons/EmaticBoxFeatures/VoiceCommand.svg";
import WiFiHotspot from "../../../../assets/images/Icons/EmaticBoxFeatures/WiFiHotspot.svg";
import Download from "../../../../assets/images/Icons/EmaticBoxFeatures/Download.svg";
import Usb from "../../../../assets/images/Icons/EmaticBoxFeatures/Usb.svg";
import Cast from "../../../../assets/images/Icons/EmaticBoxFeatures/Cast.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
  contentWrapper: {
    marginTop: theme.spacing(6),
  },
  subHeading: {
    marginTop: theme.spacing(2),
    fontSize: 31,
    fontWeight: "350",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
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
    textAlign: "left",
  },
  cardImage: {
    marginLeft: "27%",
    marginTop: theme.spacing(2),
  },
  featureDescription: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
  priceSubtitleBold: {
    fontWeight: "700",
  },
  actionButtons: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  ematicDesc: {
    fontSize: 24,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
  },
}));

const rows = [
  {
    featureIcon: TvScreen,
    featureDescription:
      "Android TV streaming box transforms your TV into a smart TV.",
  },
  {
    featureIcon: KScreen,
    featureDescription:
      "4K Ultra HD resolution gives you the ultimate visual experience.",
  },
  {
    featureIcon: Android,
    featureDescription:
      "Easy access to endless original content from Android Ecosystem",
  },
  {
    featureIcon: VoiceCommand,
    featureDescription: "Voice search remote allows for convenient operation.",
  },
  {
    featureIcon: WiFiHotspot,
    featureDescription:
      "2.4GHz/5ghz WiFi and Bluetooth 4.2 ensure fast connection.",
  },
  {
    featureIcon: Download,
    featureDescription:
      "8GB stroge volume provides you more space to download your favorite movies, and browse websites more smoothly.",
  },
  {
    featureIcon: Usb,
    featureDescription:
      "Includes 2 USB ports and MicroSD card slot to play your recorded media.",
  },
  {
    featureIcon: Cast,
    featureDescription: "Support big-screen games optimized for TV screens",
  },
];

const FeaturesAndSpecs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="ematic-features">
      <Card elevation={0} className={classes.root}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              Features of the Ematic Box
            </Typography>
            <Typography className={classes.subHeading}>
              The DV8235 is a 4K TV Box running on Android 8.1 that boasts
              amazing innovations.
            </Typography>
            <Grid container spacing={1} className={classes.contentBody}>
              {rows.map((feature) => (
                <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card elevation={0} className={classes.root}>
                    <CardContent>
                      <img
                        src={feature.featureIcon}
                        alt="Router1"
                        className={classes.cardImage}
                      />
                      <Typography className={classes.featureDescription}>
                        {feature.featureDescription}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </CardContent>
      </Card>
      <Card elevation={0} className={classes.root}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              Technical Specifications – Ematic DV8235
            </Typography>
            <Typography className={classes.subHeading}>
              The DV8235 is a 4K TV Box running on Android 8.1 that boasts
              amazing innovations.
            </Typography>
            <Grid container spacing={1} className={classes.contentBody}>
              <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
                <Typography className={classes.ematicDesc}>
                  Android TV OS (9.0 or newer) <br />
                  Google and Netflix Certified <br />
                  4K (Ultra HD) <br />
                  SoC: Amlogic S905X: A quad core ARM Cortex A53 <br />
                  CPU: ARM Quad 64-bit Cortex-A53 up to 1.5GHz <br />
                  GPU: Penta Core Mali-450 up to 750MHz +(DFS) <br />
                  DRAM: DDR3 2G <br />
                  Flash: eMMC 8GB <br />
                  Bluetooth 4.2 <br />
                  DRM - Playready, Widevine <br />
                  Size(L*W*H) - 100mm*100mm*23.5mm <br />
                  Dual-band Wi-Fi 802.11 ac/b/g/n <br />
                  Interfaces / Ports : 2 x USB 2.0 ports, 1 X TF (MicroSD) card
                  slot, 1 X HDMI 2.0a port, 1 x 10/100 Ethernet (RJ45) port.
                  <br />
                </Typography>
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                <div align="center">
                  <a href="https://www.safaricom.co.ke/find-our-shops">
                    <Button
                      small
                      variant="contained"
                      className={classes.actionButtons}
                      color="primary"
                    >
                      Buy Now <ArrowForwardIcon />
                    </Button>
                  </a>
                </div>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturesAndSpecs;
