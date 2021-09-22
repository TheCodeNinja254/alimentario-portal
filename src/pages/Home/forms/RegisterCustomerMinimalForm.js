import React from "react";
import { Grid, TextField } from "@material-ui/core";

const RegisterCustomerMinimalForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={6} xl={6} xs={12} sm={12}>
        <TextField id="standard-basic" label="Name" variant="standard" />
      </Grid>
      <Grid item lg={6} md={6} xl={6} xs={12} sm={12}>
        <TextField id="standard-basic" label="Number" variant="standard" />
      </Grid>
      <Grid item lg={6} md={6} xl={6} xs={12} sm={12}>
        <TextField id="standard-basic" label="Location" variant="standard" />
      </Grid>
    </Grid>
  );
};

export default React.memo(RegisterCustomerMinimalForm);
