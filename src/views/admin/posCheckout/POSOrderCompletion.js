import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  CardContent,
  Divider,
  Card,
  CircularProgress,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import { GET_POS_CART_ITEMS } from "../../../api/Queries/Cart/GetCartItems";
import ADD_ORDER from "../../../api/Mutations/Order";
import StatusIcon from "../../../components/StatusIcon";
import Dialog from "../../../components/Dialog";
import ErrorHandler from "../../../utils/errorHandler";
import { GET_MY_ORDERS } from "../../../api/Queries/Orders/GetMyOrders";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import CustomerInfo from "./CustomerInfo";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontWeight: 700,
    fontSize: 20,
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(2),
  },
  cardSubTitle: {
    fontWeight: 200,
    fontSize: 12,
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(2),
  },
  priceContainer: {
    marginLeft: theme.spacing(2),
  },
  totalContainer: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  priceBox: {
    marginTop: theme.spacing(3),
  },
}));

const POSOrderCompletion = ({
  totalDue,
  cartItemsList,
  preOrderItemsFound,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();

  const [preferredTime] = useState(true);

  const [selectedDeliveryLocation] = useState(0);

  const [AddOrderMutation, { loading }] = useMutation(ADD_ORDER);
  const [addOrderDetails, setAddOrderDetails] = useState({
    modalOpenStatus: false,
    addStatus: false,
    addMessage: "",
  });

  let itemsOnOrder = [];
  itemsOnOrder = cartItemsList.map((orderItem) => ({
    id: orderItem.id,
    productId: orderItem.productId,
    quantity: orderItem.quantity,
    customerSpecification: orderItem.customerSpecification,
  }));

  const { modalOpenStatus, addStatus, addMessage } = addOrderDetails;

  const closeDialog = () => {
    setAddOrderDetails({
      modalOpenStatus: false,
      addStatus: true,
      addMessage: "",
    });
  };

  // const currentTime = new Date(); // Get current date and time
  // const currentHour = currentTime.getHours(); // Get the current hour (0-23 format)

  // If the time is between 10:00 AM and 8:00 PM
  // if (currentHour >= 10 && currentHour < 20) {
  //   setAddOrderDetails({
  //     modalOpenStatus: true,
  //     addStatus: true,
  //     addMessage: addOrderMessage,
  //   });
  // } else {
  // If it's outside the 10:00 AM - 8:00 PM range

  const handleConfirmOrder = async () => {
    if (cartItemsList.length > 0 && totalDue > 0) {
      if (selectedDeliveryLocation === 0) {
        // Check if pre-order items exist and validate the preferred delivery time
        if (!preOrderItemsFound || (preOrderItemsFound && preferredTime)) {
          try {
            const response = await AddOrderMutation({
              variables: {
                input: {
                  cartItemsList: itemsOnOrder,
                  amountDue: totalDue, // Flat rate for delivery for now
                  deliveryLocationId: selectedDeliveryLocation,
                  orderType: "Retail",
                  isPreorder: preOrderItemsFound,
                  preferredDeliveryTime: preferredTime ?? "",
                },
              },
              refetchQueries: [
                {
                  query: GET_POS_CART_ITEMS,
                  variables: { awaitRefetchQueries: true },
                },
                {
                  query: GET_MY_ORDERS,
                  variables: { pageSize: 5, awaitRefetchQueries: true },
                },
                {
                  query: GET_MY_ORDERS,
                  variables: { pageSize: 20, awaitRefetchQueries: true },
                },
              ],
            });

            const {
              data: {
                addOrder: {
                  status: addOrderStatus,
                  message: addOrderMessage,
                  paymentCorrelationId,
                },
              },
            } = response;

            if (addOrderStatus) {
              navigate("/payment", {
                state: {
                  paymentCorrelationId,
                  totalDue,
                  itemsOnOrder,
                },
              });
            } else {
              setAddOrderDetails({
                modalOpenStatus: true,
                addStatus: false,
                addMessage: addOrderMessage,
              });
            }
          } catch (error) {
            setAddOrderDetails({
              modalOpenStatus: true,
              addStatus: false,
              addMessage: ErrorHandler(
                error.message ||
                  error.graphQLErrors?.[0]?.message ||
                  "An error occurred"
              ),
            });
          }
        } else {
          // Handle missing preferred time for pre-orders
          setAddOrderDetails({
            modalOpenStatus: true,
            addStatus: false,
            addMessage:
              "Please select a preferred delivery time for your pre-order.",
          });
        }
      } else {
        // Handle missing delivery location
        setAddOrderDetails({
          modalOpenStatus: true,
          addStatus: false,
          addMessage: "Please select a delivery location.",
        });
      }
    } else {
      // Handle invalid cart or payment details
      setAddOrderDetails({
        modalOpenStatus: true,
        addStatus: false,
        addMessage:
          "Something went wrong! We cannot confirm the order at this time.",
      });
    }
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
      <Dialog
        open={modalOpenStatus}
        modalContent={
          <Box className={classes.dialogContent}>
            <StatusIcon
              status={addStatus ? "success" : "An error occurred"}
              text={addStatus ? "Order created!" : "An error occurred"}
            />
            <Typography variant="body1"> {addMessage}</Typography>
          </Box>
        }
        modalActions={
          <Button
            disableElevation
            variant="contained"
            onClick={() => closeDialog()}
            color="primary"
            autoFocus
          >
            Close
          </Button>
        }
        handleClose={closeDialog}
      />
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Box>
          <>
            {totalDue > 0 && cartItemsList?.length > 0 && (
              <Card
                elevation={0}
                style={{ borderRadius: 4, marginTop: theme.spacing(2) }}
              >
                <CardContent>
                  <CustomerInfo />
                </CardContent>
              </Card>
            )}
            {totalDue > 0 && cartItemsList?.length > 0 ? (
              <Card
                elevation={0}
                style={{ borderRadius: 4, marginTop: theme.spacing(2) }}
              >
                <CardContent>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ marginBottom: theme.spacing(2) }}
                    >
                      <Typography className={classes.cardTitle}>
                        Complete Your Order
                      </Typography>
                      <AnimateButton>
                        <Button
                          disableElevation
                          fullWidth
                          size="small"
                          variant="outlined"
                          color="secondary"
                          component={RouterLink}
                          to="/"
                        >
                          Shop More
                        </Button>
                      </AnimateButton>
                    </Box>
                    <Divider />
                    <Box className={classes.priceBox}>
                      <Grid
                        container
                        direction="row"
                        className={classes.priceContainer}
                      >
                        <Grid
                          item
                          className={classes.priceSection}
                          xs={6}
                          sm={6}
                          md={4}
                          lg={3}
                          xl={3}
                        >
                          <Typography variant="body1">Sub Total</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.priceSection}
                          xs={6}
                          sm={6}
                          md={4}
                          lg={3}
                          xl={3}
                        >
                          <Typography variant="body1">
                            <strong>Ksh. {totalDue}</strong>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container className={classes.priceContainer}>
                        <Grid
                          item
                          className={classes.priceSection}
                          xs={6}
                          sm={6}
                          md={4}
                          lg={3}
                          xl={3}
                        >
                          <Typography variant="body1">Delivery Fee</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.priceSection}
                          xs={6}
                          sm={6}
                          md={4}
                          lg={3}
                          xl={3}
                        >
                          {preOrderItemsFound ? (
                            <Typography variant="body1">Free</Typography>
                          ) : (
                            <Typography variant="body2">
                              Delivery will be charged separately. Our team will
                              contact you.
                            </Typography>
                          )}
                        </Grid>
                      </Grid>
                      <Grid container className={classes.totalContainer}>
                        <Grid
                          item
                          className={classes.priceSection}
                          xs={6}
                          sm={6}
                          md={4}
                          lg={3}
                          xl={3}
                        >
                          <Typography variant="body1">Total</Typography>
                        </Grid>
                        <Grid
                          item
                          className={classes.priceSection}
                          xs={6}
                          sm={6}
                          md={4}
                          lg={3}
                          xl={3}
                        >
                          <Typography variant="body1">
                            <strong>Ksh. {totalDue}</strong>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Box sx={{ marginTop: theme.spacing(2) }}>
                    <AnimateButton>
                      <Button
                        disableElevation
                        fullWidth
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={() => handleConfirmOrder()}
                      >
                        {preOrderItemsFound
                          ? "Confirm Pre-rder"
                          : "Confirm Order"}
                      </Button>
                    </AnimateButton>
                  </Box>
                </CardContent>
              </Card>
            ) : (
              <Typography>Nothing</Typography>
            )}
          </>
        </Box>
      )}
    </AnimatedSection>
  );
};
POSOrderCompletion.propTypes = {
  totalDue: PropTypes.number.isRequired,
  cartItemsList: PropTypes.array.isRequired,
};

export default POSOrderCompletion;
