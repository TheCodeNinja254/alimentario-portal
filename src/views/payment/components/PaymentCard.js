import React, { useEffect, useState } from "react";
import { Card, Button } from "@material-ui/core";
import {
  Alert,
  AlertTitle,
  Box,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import Image from "../../../components/Image";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import lipaNaMpesaLogo from "../../../assets/images/logos/lipaNaMpesaLogo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.background.light,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
  },
  modalTitle: {
    color: theme.palette.secondary.dark,
    fontWeight: 700,
    fontSize: 20,
  },
  costSummary: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  costItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  mpesaLogo: {
    marginTop: theme.spacing(0),
    width: 150, // Adjust this size as needed
    height: "auto",
  },
  payNowButton: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: theme.spacing(1.5),
    width: "100%",
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const PaymentCard = () => {
  const classes = useStyles();

  const [animate, setAnimate] = useState(false);
  const amount = 1000;
  const deliveryFees = 1000;
  const total = amount + deliveryFees;

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1);
  }, [animate]);

  const handlePayNow = () => {
    console.log("Pay Now action triggered");
  };

  return (
    <AnimatedSection animate={animate} duration="1.4s">
      <Card elevation={0} className={classes.paper}>
        <Grid container>
          <Grid item xs={7}>
            <DialogTitle>
              <Box>
                <Typography className={classes.modalTitle} variant="h1">
                  Payment
                </Typography>
                <Typography variant="caption">
                  Make payment via M-PESA
                </Typography>
              </Box>
            </DialogTitle>
          </Grid>
          <Grid item xs={5}>
            <Image
              src={lipaNaMpesaLogo}
              alt="M-PESA"
              className={classes.mpesaLogo}
            />
          </Grid>

          {/* Cost Summary Section */}
          <Divider sx={{ width: "100%" }} />
          <Grid item xs={12} className={classes.costSummary}>
            <div className={classes.costItem}>
              <Typography variant="body1">Amount:</Typography>
              <Typography variant="body1">{amount} KES</Typography>
            </div>
            <div className={classes.costItem}>
              <Typography variant="body1">Delivery Fees:</Typography>
              <Typography variant="body1">{deliveryFees} KES</Typography>
            </div>
            <div className={classes.costItem}>
              <Typography variant="body1" fontWeight="bold">
                Total:
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                {total} KES
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} className={classes.costSummary}>
            <Alert variant="outlined" severity="info">
              <AlertTitle>Important</AlertTitle>
              <Typography>
                This is an M-PESA Express payment meaning on clicking{" "}
                <strong>Pay Now</strong> you will get a prompt on your phone to
                enter your <strong>M-PESA PIN</strong> to complete the
                transaction.
              </Typography>
            </Alert>
          </Grid>

          {/* Pay Now Button */}
          <Grid item xs={12}>
            <Button className={classes.payNowButton} onClick={handlePayNow}>
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Card>
    </AnimatedSection>
  );
};

export default PaymentCard;
