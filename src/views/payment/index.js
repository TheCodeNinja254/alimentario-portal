import React from "react";
import { Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import { gridSpacing } from "../../store/constant";
import WeDeliverCard from "../components/ActionCards/WeDeliverCard";
import PaymentCard from "./components/PaymentCard";

const Payment = () => {
  const location = useLocation();
  const { paymentCorrelationId, totalDue, deliveryFee, itemsOnOrder } =
    location.state || {}; // Access the passed state

  const orderInfo = {
    paymentCorrelationId,
    totalDue,
    deliveryFee,
    itemsOnOrder,
  };

  return (
    <GetSignedInCustomerQuery>
      {({
        getSignedInCustomer: {
          status,
          customer: { msisdn },
        },
      }) => (
        <>
          {status && (
            <Grid container spacing={gridSpacing}>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <Grid container spacing={gridSpacing}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <PaymentCard orderInfo={orderInfo} chargedMsisdn={msisdn} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={4} md={8} sm={12} xs={12}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <WeDeliverCard />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </GetSignedInCustomerQuery>
  );
};

export default Payment;
