import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/styles";
import MuiTypography from "@material-ui/core/Typography";
import { Card, CardContent, Box } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import AnimatedSection from "../../../ui-component/AnimatedSection";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
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
      fontWeight: 700,
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
    marginTop: theme.spacing(2),
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
  cardActions: {
    marginTop: theme.spacing(2),
  },
}));

const POSCheckoutHeader = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="1.4s">
      <Card elevation={0} className={classes.paper}>
        <Grid container>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <MuiTypography gutterBottom className={classes.mainGreeting}>
                    Guest&apos;s Cart
                  </MuiTypography>
                  <MuiTypography
                    variant="body2"
                    className={classes.contextText}
                  >
                    Confirm the items you wish to have delivered before making
                    your order
                  </MuiTypography>
                </Box>
                <ShoppingCart
                  style={{ fontSize: 70, color: theme.palette.primary.main }}
                />
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </AnimatedSection>
  );
};

export default POSCheckoutHeader;
