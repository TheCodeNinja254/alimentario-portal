import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import MuiTypography from "@material-ui/core/Typography";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Stack } from "@material-ui/core";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import photo from "../../assets/images/Graphics/cart_ready.jpg";
import Image from "../../components/Image";
import AnimateButton from "../../ui-component/extended/AnimateButton";
import AnimatedSection from "../../ui-component/AnimatedSection";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.background.light,
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
  productImage: {
    marginTop: theme.spacing(2),
    width: "100%",
    maxHeight: 200,
  },
  cardActions: {
    marginTop: theme.spacing(2),
  },
}));

const CheckoutHeader = () => {
  const classes = useStyles();

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
            <Card elevation={0}>
              <CardContent>
                <Image alt="Img" src={photo} className={classes.productImage} />
              </CardContent>
            </Card>
            <CardContent>
              <GetSignedInCustomerQuery>
                {({ getSignedInCustomer: { status, customer } }) =>
                  status ? (
                    <>
                      <MuiTypography
                        gutterBottom
                        className={classes.mainGreeting}
                      >
                        {customer?.firstName}&apos;s Cart
                      </MuiTypography>
                      <MuiTypography
                        variant="body2"
                        className={classes.contextText}
                      >
                        Confirm the items you wish to have delivered before
                        making your order
                      </MuiTypography>
                    </>
                  ) : (
                    <>
                      <MuiTypography
                        variant="h2"
                        gutterBottom
                        className={classes.mainGreeting}
                      >
                        Your cart items will appear here.
                      </MuiTypography>
                      <MuiTypography
                        variant="body2"
                        className={classes.contextText}
                      >
                        Please sign in to your account to access your cart.
                      </MuiTypography>
                      <Stack
                        direction="row"
                        spacing={2}
                        className={classes.cardActions}
                      >
                        <AnimateButton>
                          <Button
                            disableElevation
                            fullWidth
                            size="small"
                            variant="contained"
                            color="secondary"
                            component={RouterLink}
                            to="/auth"
                          >
                            Sign In
                          </Button>
                        </AnimateButton>
                        <AnimateButton>
                          <Button
                            disableElevation
                            fullWidth
                            size="small"
                            variant="outlined"
                            color="secondary"
                            component={RouterLink}
                            to="/create-account"
                          >
                            Create Account
                          </Button>
                        </AnimateButton>
                      </Stack>
                    </>
                  )
                }
              </GetSignedInCustomerQuery>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </AnimatedSection>
  );
};

export default CheckoutHeader;
