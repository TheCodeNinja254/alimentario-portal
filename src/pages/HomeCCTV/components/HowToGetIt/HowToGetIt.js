import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { HashLink } from "react-router-hash-link";
import stepOne from "../../../../assets/images/stepOne.svg";
import stepTwo from "../../../../assets/images/stepTwo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.white.main,
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
    marginTop: theme.spacing(5),
    height: "75px",
    width: "75x",
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  cardDescription: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
    marginTop: theme.spacing(3),
  },
  cardDescriptionLink: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
    textDecoration: "underline",
  },
  cardTitleBold: {
    fontSize: 38,
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  divider: {
    color: theme.palette.black,
    backgroundColor: theme.palette.black,
  },
  actionButtons: {
    marginTop: theme.spacing(5),
  },
}));

const HowToGetIt = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="get-home-cctv">
      <Card elevation={0}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              How to get it
            </Typography>
            <Grid container spacing={6}>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <Typography className={classes.cardTitle}>
                  PURCHASE CCTV CAMERAS
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.cardDescription}
                >
                  Buy a CCTV camera of your choice from your nearest Safaricom
                  Shop.{" "}
                  <span className={classes.cardDescriptionLink}>
                    Find A Shop
                  </span>
                </Typography>
                <div align="center">
                  <img
                    src={stepOne}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                </div>
              </Grid>
              <Divider
                orientation="vertical"
                className={classes.divider}
                absolute
              />
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
                sm={12}
                className={classes.requirementsIcons}
              >
                <Typography className={classes.cardTitle}>
                  INSTALLATION
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.cardDescription}
                >
                  The cameras are plug and play but if you require assistance,
                  please enquire at the Safaricom Shop.
                </Typography>
                <div align="center">
                  <img
                    src={stepTwo}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                </div>
              </Grid>
              <Divider
                orientation="vertical"
                className={classes.divider}
                absolute
              />
            </Grid>
            <div align="center">
              <HashLink to="#home-cctv-cameras">
                <Button
                  small
                  variant="outlined"
                  className={classes.actionButtons}
                >
                  See Cameras <ArrowForwardIcon />
                </Button>
              </HashLink>
            </div>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(HowToGetIt);
