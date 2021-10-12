import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid } from "@material-ui/core";
import feedbackImage from "../../../../assets/images/img_1.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  footerLink: {
    color: theme.palette.primary.main,
    textDecorationLine: "underline",
  },
  feedbackText: {
    textAlign: "center",
    fontSize: 16,
  },
  media: {
    height: "86px",
  },
  footerContent: {
    textAlign: "center",
  },
  feedbackImage: {
    height: 25,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
              <a
                href="mailto:fibersalesgroup@safaricom.co.ke?subject=Customer Feedback"
                className={classes.footerLink}
              >
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
  );
};

export default React.memo(Footer);
