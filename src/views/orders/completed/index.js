import React from "react";
import { Grid } from "@material-ui/core";
import CompletedOrdersHeader from "./CompletedOrdersHeader";
import GetSignedInCustomerQuery from "../../../api/Queries/Authentication/GetSignedInCustomer";
import MenuCard from "../../components/ActionCards";
import { gridSpacing } from "../../../store/constant";
import WeDeliverCard from "../../components/ActionCards/WeDeliverCard";

const Wholesale = () => {
  return (
    <GetSignedInCustomerQuery>
      {/* eslint-disable-next-line no-unused-vars */}
      {({ getSignedInCustomer: { status } }) => (
        <>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <CompletedOrdersHeader />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={8} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <MenuCard />
                </Grid>
                <Grid item xs={12}>
                  <WeDeliverCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </GetSignedInCustomerQuery>
  );
};

export default Wholesale;
