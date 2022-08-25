import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@material-ui/core";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import GetSignedInCustomerQuery from "../../../api/Queries/Authentication/GetSignedInCustomer";
import AnimatedSection from "../../../ui-component/AnimatedSection";

// style constant
const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.palette.warning.light,
    marginTop: "16px",
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
      top: "65px",
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
      top: "145px",
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

// ===========================|| PROFILE MENU - CREATE ACCOUNT CARD ||=========================== //

const MenuCardMini = () => {
  const classes = useStyles();

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="2.0s">
      <Card className={classes.card}>
        <CardContent>
          <GetSignedInCustomerQuery>
            {({ getSignedInCustomer: { status, customer, business } }) =>
              status ? (
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    {customer?.businessId > 0 ? (
                      <>
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
                        <Stack direction="column">
                          <AnimateButton>
                            <Button
                              component={Link}
                              href="/account/register/register3"
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
                              component={Link}
                              href="/account/register/register3"
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
                    <Typography variant="h4">
                      Create a Desafio Account
                    </Typography>
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
                          component={Link}
                          href="/create-account"
                          variant="contained"
                          className={classes.button}
                        >
                          Create My Account
                        </Button>
                      </AnimateButton>
                      <AnimateButton>
                        <Button
                          component={Link}
                          href="/create-account"
                          variant="contained"
                          className={classes.button}
                        >
                          Create My Business Account
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
    </AnimatedSection>
  );
};

export default MenuCardMini;
