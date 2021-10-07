import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Router1 from "../../../../assets/images/Routers/Router1.png";
import Router2 from "../../../../assets/images/Routers/Router2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
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
  },
  cardImage: {
    marginLeft: "27%",
    marginTop: theme.spacing(2),
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: "300",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  priceSubtitle: {
    fontWeight: "300",
    fontSize: 22,
    fontStyle: "normal",
    textAlign: "center",
  },
  priceSubtitleBold: {
    fontWeight: "700",
  },
  actionButtons: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white.main,
    },
  },
}));

const rows = [
  {
    routerName: "Huawei Router",
    routerPrice: "Ksh. 9,999",
    routerImage: Router1,
  },
  {
    routerName: "Adrian 3300 1",
    routerPrice: "Ksh. 9,999",
    routerImage: Router2,
  },
];

const WiFiRouters = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              WiFi Routers
            </Typography>
            <Grid container spacing={5} className={classes.contentBody}>
              {rows.map((row) => (
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <Card elevation={5}>
                    <CardContent>
                      <img
                        height={200}
                        src={row.routerImage}
                        alt="Router1"
                        className={classes.cardImage}
                      />
                      <Typography className={classes.cardTitle}>
                        {row.routerName}
                      </Typography>
                      <Typography className={classes.priceSubtitle}>
                        <span className={classes.priceSubtitleBold}>
                          Price:{" "}
                        </span>
                        <span>{row.routerPrice}</span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
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
            Buy Now <ArrowForwardIcon />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default WiFiRouters;
