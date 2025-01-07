import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import MuiTypography from "@material-ui/core/Typography";
import GetSignedInCustomerQuery from "../../../api/Queries/Authentication/GetSignedInCustomer";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import Logo from "../../../ui-component/Logo";

// const NameTypography = styled(Typography)(({ theme, animate }) => ({
//   color: theme.palette.common.black,
//   fontSize: 25,
//   fontWeight: 700,
//   [theme.breakpoints.down("sm")]: {
//     fontSize: 20,
//     fontWeight: 700,
//   },
//   animation:
//     animate &&
//     `${trackInExpandText} 2.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
// }));

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.background.default,
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
    marginTop: theme.spacing(2),
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
  const theme = useTheme();

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 100);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="1.4s">
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
            <Logo leftSpacing={theme.spacing(0)} />
            <MuiTypography variant="body2" className={classes.slogan}>
              The Food Challenge!
            </MuiTypography>
            <MuiTypography variant="body2" className={classes.contextText}>
              This is your one stop shop for great steak & cheese. We deliver to
              your home, shop or eatery.
            </MuiTypography>
          </Grid>
        </Grid>
      </Paper>
    </AnimatedSection>
  );
};

export default GreetingsCard;
