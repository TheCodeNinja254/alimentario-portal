import React, { useState } from "react";
import { Grid, Stack, Typography } from "@material-ui/core";
import {
  Alert,
  AlertTitle,
  Box,
  CardContent,
  CircularProgress,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import MainCard from "../../ui-component/cards/MainCard";
import DeliveryAddress from "./DeliveryAddress";
import AnimateButton from "../../ui-component/extended/AnimateButton";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontWeight: 700,
    fontSize: 20,
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(2),
  },
  cardSubTitle: {
    fontWeight: 200,
    fontSize: 12,
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(2),
  },
  priceContainer: {
    marginLeft: theme.spacing(2),
  },
  totalContainer: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  priceBox: {
    marginTop: theme.spacing(3),
  },
}));

const OrderCompletion = ({ totalDue }) => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  return (
    <MainCard
      border={false}
      elevation={0}
      content={false}
      boxShadow
      shadow={0}
      sx={{ mt: 3 }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ pt: 2, px: 2 }}
          >
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Typography variant="subtitle1">Make an order</Typography>
                {loading && <CircularProgress size={20} />}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <CardContent>
          <Grid item xs={12}>
            <Stack direction="row" spacing={7}>
              <div>
                <Typography className={classes.cardTitle}>
                  Complete Your Order
                </Typography>
                <Typography className={classes.cardSubTitle}>
                  Amount due
                </Typography>
              </div>
              <AnimateButton>
                <Button
                  disableElevation
                  fullWidth
                  size="small"
                  variant="outlined"
                  color="secondary"
                  component={RouterLink}
                  to="/"
                >
                  Shop More
                </Button>
              </AnimateButton>
            </Stack>
            <Divider />
            <Box className={classes.priceBox}>
              <Grid
                container
                direction="row"
                className={classes.priceContainer}
              >
                <Grid
                  item
                  className={classes.priceSection}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                >
                  <Typography variant="body1">Sub Total</Typography>
                </Grid>
                <Grid
                  item
                  className={classes.priceSection}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                >
                  <Typography variant="body1">
                    <strong>Ksh. {totalDue}</strong>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.priceContainer}>
                <Grid
                  item
                  className={classes.priceSection}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                >
                  <Typography variant="body1">Delivery Fee</Typography>
                </Grid>
                <Grid
                  item
                  className={classes.priceSection}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                >
                  <Typography variant="body1">Ksh. 400</Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.totalContainer}>
                <Grid
                  item
                  className={classes.priceSection}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                >
                  <Typography variant="body1">Total</Typography>
                </Grid>
                <Grid
                  item
                  className={classes.priceSection}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                >
                  <Typography variant="body1">
                    <strong>Ksh. {totalDue + 400}</strong>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </CardContent>
      </Grid>
      <Alert variant="outlined">
        <AlertTitle>
          Notice On Payment: <strong>Payment on delivery only</strong>
        </AlertTitle>
      </Alert>
      <DeliveryAddress />
    </MainCard>
  );
};

OrderCompletion.propTypes = {
  totalDue: PropTypes.number.isRequired,
};

export default OrderCompletion;
