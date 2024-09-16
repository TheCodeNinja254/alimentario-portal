import React from "react";
import { Grid } from "@material-ui/core";
import { gridSpacing } from "../../../store/constant";
import Header from "./Header";
import AllOrdersSection from "../shared/AllOrdersSection";

const All = () => {
  const [status, setStatus] = React.useState("pending");

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Header status={status} setStatus={setStatus} />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <AllOrdersSection orderStatus={status} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default All;
