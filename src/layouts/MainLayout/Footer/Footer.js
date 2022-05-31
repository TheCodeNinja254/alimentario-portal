import React from "react";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import FeedbackComponent from "./components/FeedbackComponent";

const useStyles = makeStyles((theme) => ({
  root: {},
  footerLink: {
    color: theme.palette.primary.main,
    textDecorationLine: "underline",
  },
  feedbackText: {
    fontSize: 20,
    color: theme.palette.white.main,
  },
  media: {
    height: "86px",
  },
  footerContent: {
    paddingLeft: theme.spacing(36),
    paddingRight: theme.spacing(36),
  },
  feedbackImage: {
    height: 25,
  },
  copyRight: {
    backgroundColor: "#37474f",
    height: 90,
  },
  faqsLinkText: {
    color: theme.palette.white.main,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FeedbackComponent />
      <Card className={classes.copyRight}>
        <CardContent>
          <Container>
            <Grid container spacing={0}>
              <Grid item lg={12} md={12} xl={12} xs={12} sm={12}>
                <Typography
                  variant="subtitle2"
                  className={classes.feedbackText}
                >
                  © Safaricom PLC {moment().format("YYYY")} | All Rights
                  Reserved |{" "}
                  <span>
                    <Link to="/faqs/home" className={classes.faqsLinkText}>
                      FAQs
                    </Link>
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(Footer);
