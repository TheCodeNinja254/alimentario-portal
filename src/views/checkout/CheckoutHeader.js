import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import MuiTypography from "@material-ui/core/Typography";
import { Card, CardContent } from "@mui/material";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import photo from "../../assets/images/Graphics/cart_ready.jpg";
import Image from "../../components/Image";

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
  productImage: {
    marginTop: theme.spacing(2),
    width: "100%",
    maxHeight: 200,
  },
}));

const CheckoutHeader = () => {
  const classes = useStyles();

  return (
    <>
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
                    </>
                  )
                }
              </GetSignedInCustomerQuery>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CheckoutHeader;
