import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import MuiTypography from "@material-ui/core/Typography";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { Stack } from "@material-ui/core";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import photo from "../../assets/images/Graphics/business.jpg";
import Image from "../../components/Image";
import AnimateButton from "../../ui-component/extended/AnimateButton";

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
  cardActions: {
    marginTop: theme.spacing(2),
  },
}));

const BusinessHomeHeader = () => {
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
                {({ getSignedInCustomer: { status } }) =>
                  status ? (
                    <>
                      <MuiTypography
                        gutterBottom
                        className={classes.mainGreeting}
                      >
                        Your business orders and account is coming soon!
                      </MuiTypography>
                      <MuiTypography
                        variant="body2"
                        className={classes.contextText}
                      >
                        We are working hard to bring this feature to you. You
                        will be able to make orders for your business and have
                        the products delivered to your premises.
                      </MuiTypography>
                    </>
                  ) : (
                    <>
                      <MuiTypography
                        variant="h2"
                        gutterBottom
                        className={classes.mainGreeting}
                      >
                        Your business cart items will appear here.
                      </MuiTypography>
                      <MuiTypography
                        variant="body2"
                        className={classes.contextText}
                      >
                        Please sign in to your account to access your
                        business&apos; cart.
                      </MuiTypography>
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
                          Order for my home
                        </Button>
                      </AnimateButton>
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
    </>
  );
};

export default BusinessHomeHeader;
