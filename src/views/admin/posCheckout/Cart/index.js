import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Button,
  Chip,
  Grid,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Box,
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { GET_POS_CART_ITEMS } from "../../../../api/Queries/Cart/GetCartItems";
import photo from "../../../../assets/images/Graphics/bbq_05.jpg";
import CartItem from "./CartItem";
import Image from "../../../../components/Image";
import { REMOVE_POS_CART_ITEM } from "../../../../api/Mutations/Cart";
import MySnackbar from "../../../../components/MySnackbar/MySnackbar";
import ErrorHandler from "../../../../utils/errorHandler";
import AnimateButton from "../../../../ui-component/extended/AnimateButton";
import AnimatedSection from "../../../../ui-component/AnimatedSection";
import { getOrderDetails } from "../../../../utils/orderDetailsStorage";

// style const
const useStyles = makeStyles((theme) => ({
  cartChip: {
    height: "48px",
    alignItems: "center",
    borderRadius: "27px",
    transition: "all .2s ease-in-out",
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    '&[aria-controls="menu-list-grow"], &:hover': {
      borderColor: theme.palette.primary.main,
      background: `${theme.palette.primary.main}!important`,
      color: theme.palette.primary.light,
      "& svg": {
        stroke: theme.palette.primary.light,
      },
    },
    marginRight: theme.spacing(1),
  },
  profileLabel: {
    lineHeight: 0,
    padding: "12px",
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: "16px",
    marginTop: "16px",
  },
  noContentImage: {
    height: 280,
    width: "100%",
    minWidth: 300,
  },
  noContentText: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: 16,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
  },
  noContentSubText: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
  },
  cartSubText: {
    marginTop: theme.spacing(3),
  },
  cartPaper: {
    marginTop: theme.spacing(2),
  },
}));

const Cart = ({ calculateTotalDue, getCartItemStatus, cartItemsList }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const [submitDetails, setRemoveCartItemDetails] = React.useState({
    message: "",
    severity: "success",
  });

  const { message, severity } = submitDetails;

  const [RemoveCartItemMutation, { loading }] =
    useMutation(REMOVE_POS_CART_ITEM);

  const orderDetails = getOrderDetails();

  const handleDeleteCartItem = async (id) => {
    RemoveCartItemMutation({
      variables: {
        id,
      },
      refetchQueries: [
        {
          query: GET_POS_CART_ITEMS,
          variables: {
            guestId: orderDetails?.guestId,
            awaitRefetchQueries: true,
          },
        },
      ],
    })
      .then((response) => {
        const {
          data: {
            removePOSCartItem: {
              status: removeItemStatus,
              message: removeItemMessage,
            },
          },
        } = response;
        if (removeItemStatus) {
          setSnackbarOpen(true);
          setRemoveCartItemDetails({
            message: removeItemMessage,
            severity: "success",
          });
        } else {
          setSnackbarOpen(true);
          setRemoveCartItemDetails({
            message: removeItemMessage,
            severity: "error",
          });
        }
      })
      .catch((res) => {
        setSnackbarOpen(true);
        setRemoveCartItemDetails({
          message: ErrorHandler(res.message || res.graphQLErrors[0].message),
          severity: "error",
        });
      });
  };

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="1.4s">
      {getCartItemStatus && cartItemsList?.length > 0 ? (
        <Card elevation={0} className={classes.cartPaper}>
          <CardContent>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ pt: 2, px: 2 }}
                >
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="subtitle1">Items In Cart</Typography>
                      <Box>
                        <Chip
                          size="small"
                          label={cartItemsList?.length}
                          sx={{
                            color: theme.palette.background.default,
                            bgcolor: theme.palette.warning.dark,
                          }}
                        />
                        {loading && (
                          <CircularProgress
                            style={{
                              marginLeft: theme.spacing(2),
                            }}
                            size={20}
                          />
                        )}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} p={0}>
                    <Divider sx={{ my: 0 }} />
                  </Grid>
                </Grid>
                <CartItem
                  cartItemsList={cartItemsList}
                  handleDeleteCartItem={handleDeleteCartItem}
                  calculateTotalDue={calculateTotalDue}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <Card elevation={0} className={classes.cartPaper}>
          <CardContent>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ pt: 2, px: 2 }}
                >
                  <Grid item>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="subtitle1">Items In Cart</Typography>
                      <Chip
                        size="small"
                        label={0}
                        sx={{
                          color: theme.palette.background.default,
                          bgcolor: theme.palette.warning.dark,
                        }}
                      />
                    </Stack>
                  </Grid>
                  <Grid item>
                    <AnimateButton>
                      <Button
                        disableElevation
                        fullWidth
                        size="small"
                        variant="contained"
                        color="secondary"
                        component={RouterLink}
                        to="/"
                      >
                        Go Shopping
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <CardContent>
                  <Image
                    alt="Nothing to show"
                    src={photo}
                    className={classes.noContentImage}
                  />
                  <Typography className={classes.noContentText}>
                    Your cart is empty.
                  </Typography>
                  <Typography
                    variant="caption"
                    className={classes.noContentSubText}
                  >
                    Items you add to your cart will appear here.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      <MySnackbar
        message={message}
        severity={severity}
        setOpen={setSnackbarOpen}
        open={snackbarOpen}
      />
    </AnimatedSection>
  );
};

Cart.propTypes = {
  calculateTotalDue: PropTypes.func.isRequired,
  getCartItemStatus: PropTypes.bool.isRequired,
  cartItemsList: PropTypes.array.isRequired,
};

export default Cart;
