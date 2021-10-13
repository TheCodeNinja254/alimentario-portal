import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  heading: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontSize: 45,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
  },
  subHeading: {
    marginTop: theme.spacing(2),
    fontSize: 25,
    fontWeight: "350",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
  },
  contentWrapper: {
    marginTop: theme.spacing(6),
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

const PaymentTab = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="secure-net-payment">
      <Card elevation={0} className={classes.root}>
        <CardContent>
          <Container className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              Payment
            </Typography>
            <Typography className={classes.subHeading}>
              Safaricom Secure Net will be FREE for the first month. Thereafter,
              you will be required to renew the service at KSH 200 per month as
              part of your Home Fibre subscription.
            </Typography>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(PaymentTab);
