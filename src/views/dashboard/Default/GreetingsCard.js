import React from "react";
import Grid from "@material-ui/core/Grid";
import { Chip, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MuiTypography from "@material-ui/core/Typography";
import GetSignedInCustomerQuery from "../../../api/Queries/Authentication/GetSignedInCustomer";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
  },
  mainGreeting: {
    color: theme.palette.primary.dark,
    fontSize: 23,
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      fontWeight: 500,
    },
  },
  welcomeText: {
    color: theme.palette.common.black,
    fontSize: 23,
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      fontWeight: 700,
    },
  },
  subGreeting: {
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      fontWeight: 700,
    },
  },
  slogan: {
    color: theme.palette.primary.main,
  },
  contextText: {
    marginTop: theme.spacing(4),
    color: theme.palette.common.black,
  },
  actionText: {
    marginTop: theme.spacing(5),
    color: theme.palette.primary.dark,
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderColor: theme.palette.primary.dark,
  },
}));

const GreetingsCard = () => {
  const classes = useStyles();

  return (
    <Paper square elevation={0} className={classes.paper}>
      <Grid container>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <GetSignedInCustomerQuery>
            {({ getSignedInCustomer: { status, customer } }) =>
              status ? (
                <MuiTypography gutterBottom className={classes.mainGreeting}>
                  Greetings {customer?.firstName}!
                </MuiTypography>
              ) : (
                <MuiTypography
                  variant="h2"
                  gutterBottom
                  className={classes.mainGreeting}
                >
                  Greetings!
                </MuiTypography>
              )
            }
          </GetSignedInCustomerQuery>
          <MuiTypography gutterBottom className={classes.welcomeText}>
            Welcome to
          </MuiTypography>
          <MuiTypography
            variant="h1"
            gutterBottom
            className={classes.subGreeting}
          >
            Desafio Alimentario
          </MuiTypography>
          <MuiTypography variant="body2" className={classes.slogan}>
            The Food Challenge!
          </MuiTypography>
          <MuiTypography variant="body2" className={classes.contextText}>
            This is your one stop shop for great steak & cheese. We deliver to
            your home, shop or eatery.
          </MuiTypography>
          <MuiTypography
            variant="h3"
            gutterBottom
            className={classes.actionText}
          >
            What do you want to do today?
          </MuiTypography>
          <Chip variant="outlined" label="Index" className={classes.chip} />
          <Chip
            variant="outlined"
            label="Create Account"
            className={classes.chip}
          />
          <Chip variant="outlined" label="Order Now" className={classes.chip} />
          <Chip
            variant="outlined"
            label="Make a standing order"
            className={classes.chip}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GreetingsCard;
