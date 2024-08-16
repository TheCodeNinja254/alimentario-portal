import React from "react";
import { Grid } from "@material-ui/core";
import BusinessHomeHeader from "./BusinessHomeHeader";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import { gridSpacing } from "../../store/constant";
import InformationTab from "../components/InformationTab";

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
                  <BusinessHomeHeader />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={8} sm={12} xs={12}>
              <InformationTab />
            </Grid>
          </Grid>
        </>
      )}
    </GetSignedInCustomerQuery>
  );
};

export default Wholesale;
