import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Container, Grid } from "@material-ui/core";
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
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FeedbackComponent />
      <Card className={classes.copyRight}>
        <CardContent>
          <Container>
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
                <Typography
                  variant="subtitle2"
                  className={classes.feedbackText}
                >
                  © Safaricom PLC 2021 | All Rights Reserved | FAQs
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
