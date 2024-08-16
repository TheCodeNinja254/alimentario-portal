import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import GetSignedInCustomerQuery from "../../../api/Queries/Authentication/GetSignedInCustomer";
import RecentOrdersSection from "./RecentOrdersSection";

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.warning.light,
    marginTop: theme.spacing(2),
    marginBottom: "16px",
    overflow: "hidden",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "19px solid ",
      borderColor: theme.palette.warning.main,
      borderRadius: "50%",
      top: "-95px",
      right: "-150px",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "3px solid ",
      borderColor: theme.palette.warning.main,
      borderRadius: "50%",
      top: "-135px",
      right: "-70px",
    },
  },
  tagLine: {
    color: theme.palette.grey[900],
    opacity: 0.6,
  },
  button: {
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.warning.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    textTransform: "capitalize",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
    divider: {
      marginTop: theme.spacing(3),
    },
  },
  tagLineBefore: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  tagLineAfter: {
    marginTop: theme.spacing(1),
  },
  boldedText: {
    fontWeight: "bolder",
  },
  subTitle: {
    marginTop: theme.spacing(1),
  },
}));

const UpgradePlanCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <GetSignedInCustomerQuery>
          {({ getSignedInCustomer: { status, customer, business } }) =>
            status ? (
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h4">Hi {customer?.firstName}</Typography>
                </Grid>
                <RecentOrdersSection />
                <Grid item>
                  {customer?.businessId > 0 ? (
                    <>
                      <Divider />
                      <Typography variant="h4" className={classes.subTitle}>
                        You can get our products for your business too
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        className={classes.tagLineBefore}
                      >
                        Your Business:{" "}
                        <span className={classes.boldedText}>
                          {business?.businessName}
                        </span>
                        <br />
                        Located at:{" "}
                        <span className={classes.boldedText}>
                          {business?.registeredAddress}
                        </span>
                      </Typography>
                      <Divider />
                      <Typography
                        variant="subtitle2"
                        className={classes.tagLineAfter}
                      >
                        Previous Orders for Business:
                      </Typography>
                      <Stack direction="column">
                        <AnimateButton>
                          <Button
                            component={RouterLink}
                            to="/create-account"
                            variant="contained"
                            className={classes.button}
                          >
                            See All Orders
                          </Button>
                        </AnimateButton>
                      </Stack>
                    </>
                  ) : (
                    <>
                      <Divider />
                      <Typography variant="h4" className={classes.subTitle}>
                        You can get our products for your business too
                      </Typography>
                      <Stack direction="column">
                        <AnimateButton>
                          <Button
                            component={RouterLink}
                            to="/my-business"
                            variant="contained"
                            className={classes.button}
                          >
                            Add Your Business
                          </Button>
                        </AnimateButton>
                      </Stack>
                    </>
                  )}
                </Grid>
              </Grid>
            ) : (
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h4">Create a Desafio Account</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" className={classes.tagLine}>
                    To start ordering or make standing orders
                  </Typography>
                </Grid>
                <Grid item>
                  <Stack direction="column">
                    <AnimateButton>
                      <Button
                        component={RouterLink}
                        to="/auth"
                        variant="contained"
                        className={classes.button}
                      >
                        Login
                      </Button>
                    </AnimateButton>
                    <AnimateButton>
                      <Button
                        component={RouterLink}
                        to="/create-account"
                        variant="contained"
                        className={classes.button}
                      >
                        Create My Account
                      </Button>
                    </AnimateButton>
                  </Stack>
                </Grid>
              </Grid>
            )
          }
        </GetSignedInCustomerQuery>
      </CardContent>
    </Card>
  );
};

export default UpgradePlanCard;
