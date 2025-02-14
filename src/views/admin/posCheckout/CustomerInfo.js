import React, { useState } from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import { makeStyles, styled, useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: theme.spacing(2),
  },
  cardSubTitle: {
    fontWeight: 200,
    fontSize: 12,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  cardSubText: {
    fontWeight: 200,
    fontSize: 12,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
  priceContainer: {
    marginLeft: theme.spacing(2),
  },
  totalContainer: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  locationBox: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
  locationBoxAlternate: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    elevation: 0,
  },
  locationText: {
    marginTop: theme.spacing(2),
  },
  actionButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  actionSection: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  actionSectionText: {
    marginTop: theme.spacing(1),
  },
  locationSection: {
    marginTop: theme.spacing(2),
  },
}));

const CustomerInfo = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <CardContent>
      <Typography variant="h2" style={{ color: theme.palette.primary.main }}>
        Guest Info
      </Typography>
    </CardContent>
  );
};

export default CustomerInfo;
