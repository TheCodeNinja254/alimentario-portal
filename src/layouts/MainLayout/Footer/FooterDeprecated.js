/**
 * @Deprecated UIs
 */
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import feedbackImage from "../../../assets/images/img_1.png";
import socialIcons from "../../../assets/images/img_2.png";
import googleStore from "../../../assets/images/googleStore.png";
import appStore from "../../../assets/images/appStore.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  footerLink: {
    color: theme.palette.primary.main,
    textDecorationLine: "underline",
  },
  feedbackText: {
    paddingLeft: theme.spacing(60),
    fontSize: 16,
  },
  media: {
    height: "86px",
  },
  appLinks: {
    backgroundColor: theme.palette.primary.main,
  },
  linksFooter: {
    backgroundColor: "#2D2D2D",
  },
  appLinksText: {
    paddingLeft: theme.spacing(36),
    color: theme.palette.white.main,
    fontSize: 25,
  },
  linkItemText: {
    color: theme.palette.white.main,
    fontSize: 10,
  },
  linkItemHeading: {
    color: theme.palette.white.main,
    fontWeight: "bold",
    marginLeft: theme.spacing(2),
  },
  footerContent: {
    paddingLeft: theme.spacing(36),
    paddingRight: theme.spacing(36),
  },
  feedbackImage: {
    height: 25,
  },
  socialIcons: {
    height: 35,
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  appIcons: {
    height: 45,
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  linkTexts: {
    fontSize: 12,
  },
  siteMapLinks: {
    marginTop: theme.spacing(7),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              direction="column"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Typography variant="subtitle2" className={classes.feedbackText}>
                Was this information helpful?{" "}
                <a href="/feedback" className={classes.footerLink}>
                  If not tell us how we can improve.{" "}
                  <img
                    src={feedbackImage}
                    className={classes.feedbackImage}
                    alt=""
                  />
                </a>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={classes.appLinks}>
        <CardContent>
          <Grid container>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
              direction="column"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Typography variant="subtitle2" className={classes.appLinksText}>
                Manage All your services in one App
              </Typography>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              xl={6}
              xs={6}
              direction="column"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <img src={appStore} className={classes.appIcons} alt="" />
              <img src={googleStore} className={classes.appIcons} alt="" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardMedia
          className={classes.media}
          image="/images/img.png"
          title="Stock Market"
        />
      </Card>
      <Card className={classes.linksFooter}>
        <CardContent className={classes.footerContent}>
          <Grid container>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  About Safaricom
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Our Leadership"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Careers"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Customer Service Charter"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Safaricom Foundation"
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Investor Relations
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Annual Report"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Financial Results"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Shareholders"
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  DigiFarm
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="SME"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Corporate"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="ECitizen-Safaricom"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="M-PESA Payment Services"
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Entertainment
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Annual Report"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Financial Results"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Shareholders"
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Home Insurancec
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="SME"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Corporate"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="ECitizen-Safaricom"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="M-PESA Payment Services"
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Popular Products
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="SME"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="Corporate"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="ECitizen-Safaricom"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      className={classes.linkItemText}
                      primary="M-PESA Payment Services"
                    />
                  </ListItem>
                </List>
              </div>
            </Grid>
          </Grid>

          <Grid container className={classes.siteMapLinks}>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Site Map
                </Typography>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Privacy Policy
                </Typography>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Cookie Policy
                </Typography>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Find A Store
                </Typography>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Contact Us
                </Typography>
              </div>
            </Grid>
            <Grid item lg={2} md={2} xl={2} xs={2} justify="center" spacing={0}>
              <div>
                <Typography
                  variant="subtitle2"
                  className={classes.linkItemHeading}
                >
                  Terms & Conditions
                </Typography>
              </div>
            </Grid>
          </Grid>

          <img src={socialIcons} className={classes.socialIcons} alt="" />
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(Footer);
