import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { HashLink } from "react-router-hash-link";
import parentalControlsImg from "../../../../assets/images/Icons/SecureNet/parentalControls.svg";
import quietTime from "../../../../assets/images/Icons/SecureNet/quietTime.png";
import antiphishing from "../../../../assets/images/Icons/SecureNet/antiphishing.svg";
import antivirus from "../../../../assets/images/Icons/SecureNet/antivirus.svg";
import WebFilterr from "../../../../assets/images/Icons/SecureNet/WebFilterr.svg";

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
  },
  subHeading: {
    marginTop: theme.spacing(2),
    fontSize: 31,
    fontWeight: "350",
    fontStyle: "normal",
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
    fontSize: 20,
    fontWeight: "bolder",
    color: theme.palette.primary.main,
  },
  featureDescription: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: theme.palette.black,
  },
  actionButtons: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5),
  },
  OHome: {
    color: theme.palette.error.dark,
  },
  OHomeBold: {
    fontWeight: 700,
  },
}));

const SecureNetIntro = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="secure-net-features">
      <Card elevation={0} className={classes.infoCard}>
        <CardContent>
          <div className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              What You Get
            </Typography>
            <Typography className={classes.subHeading}>
              Secure Net provides peace of mind to you and your family.
            </Typography>
            <Grid container justify="center" spacing={8}>
              <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={parentalControlsImg}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    PARENTAL CONTROL
                  </Typography>
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
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={quietTime}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    QUIET TIME
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Limit internet access in your{" "}
                    <span className={classes.OHomeBold}>
                      H<span className={classes.OHome}>O</span>ME
                    </span>{" "}
                    to particular hours of the day.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={antivirus}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    ANTI-VIRUS
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Protect users for virus attacks while on your{" "}
                    <span className={classes.OHomeBold}>
                      H<span className={classes.OHome}>O</span>ME
                    </span>{" "}
                    Fibre.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={antiphishing}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    ANTI-PHISHING
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Protect your family from falling victim to ransomware,
                    identity theft and online scams.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={2}
                md={2}
                xl={2}
                xs={6}
                sm={6}
                className={classes.requirementsIcons}
              >
                <div align="center">
                  <img
                    src={WebFilterr}
                    alt="info icon"
                    className={classes.infoIconImage}
                  />
                  <Typography
                    variant="h3"
                    align="center"
                    className={classes.featureTitle}
                  >
                    WEB FILTER
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    className={classes.featureDescription}
                  >
                    Filter through websites and content accessible on your{" "}
                    <span className={classes.OHomeBold}>
                      H<span className={classes.OHome}>O</span>ME
                    </span>{" "}
                    Fibre.
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <div align="center">
              <HashLink to="#join-secure-net" smooth>
                <Button
                  small
                  variant="outlined"
                  className={classes.actionButtons}
                >
                  How to Join <ArrowForwardIcon />
                </Button>
              </HashLink>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(SecureNetIntro);
