import React, { useState } from "react";
import { Grid, Stack, Typography } from "@material-ui/core";
import {
  Alert,
  AlertTitle,
  Box,
  CardActions,
  CardContent,
  CircularProgress,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useMutation } from "@apollo/client";
import MainCard from "../../ui-component/cards/MainCard";
import DeliveryAddress from "./DeliveryAddress";
import AnimateButton from "../../ui-component/extended/AnimateButton";
import { GET_CART_ITEMS } from "../../api/Queries/Cart/GetCartItems";
import ADD_ORDER from "../../api/Mutations/Order";
import StatusIcon from "../../components/StatusIcon";
import Dialog from "../../components/Dialog";
import ErrorHandler from "../../utils/errorHandler";
import { GET_MY_ORDERS } from "../../api/Queries/Orders/GetMyOrders";

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

const OrderCompletion = ({ totalDue, cartItemsList }) => {
  const classes = useStyles();

  const [selectedDeliveryLocation, setSelectedDeliveryLocation] =
    useState(false);

  const [AddOrderMutation, { loading }] = useMutation(ADD_ORDER);
  // eslint-disable-next-line no-unused-vars
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

  const handleConfirmOrder = async () => {
    if (cartItemsList.length > 0 && totalDue > 0) {
      if (selectedDeliveryLocation && selectedDeliveryLocation > 0) {
        AddOrderMutation({
          variables: {
            input: {
              cartItemsList: itemsOnOrder,
              amountDue: totalDue + 200, // flat rate for delivery for now
              deliveryLocationId: selectedDeliveryLocation,
              orderType: "Retail",
            },
          },
          refetchQueries: [
            {
              query: GET_CART_ITEMS,
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
        })
          .then((response) => {
            const {
              data: {
                addOrder: { status: addOrderStatus, message: addOrderMessage },
              },
            } = response;
            if (addOrderStatus) {
              setAddOrderDetails({
                modalOpenStatus: true,
                addStatus: true,
                addMessage: addOrderMessage,
              });
            } else {
              setAddOrderDetails({
                modalOpenStatus: true,
                addStatus: false,
                addMessage: addOrderMessage,
              });
            }
          })
          .catch((res) => {
            setAddOrderDetails({
              modalOpenStatus: true,
              addStatus: false,
              addMessage: ErrorHandler(
                res.message || res.graphQLErrors[0].message
              ),
            });
          });
      } else {
        setAddOrderDetails({
          modalOpenStatus: true,
          addStatus: false,
          addMessage: "Please select a delivery location",
        });
      }
    } else {
      setAddOrderDetails({
        modalOpenStatus: true,
        addStatus: false,
        addMessage:
          "Something went wrong! We cannot confirm the order at this time",
      });
    }
  };

  return (
    <MainCard
      border={false}
      elevation={0}
      content={false}
      boxShadow
      shadow={0}
      sx={{ mt: 3 }}
    >
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
                <Typography variant="subtitle1">Make an order</Typography>
                {loading && <CircularProgress size={20} />}
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <DeliveryAddress
          selectedDeliveryLocation={selectedDeliveryLocation}
          setSelectedDeliveryLocation={setSelectedDeliveryLocation}
        />
        <Alert variant="outlined">
          <AlertTitle>
            Notice On Payment: <strong>Payment on delivery only</strong>
          </AlertTitle>
        </Alert>
        {totalDue > 0 ? (
          <>
            <CardContent>
              <Grid item xs={12}>
                <Stack direction="row" spacing={7}>
                  <div>
                    <Typography className={classes.cardTitle}>
                      Complete Your Order
                    </Typography>
                    <Typography className={classes.cardSubTitle}>
                      Amount due
                    </Typography>
                  </div>
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
                </Stack>
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
                      <Typography variant="body1">Ksh. 200</Typography>
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
                        <strong>Ksh. {totalDue + 200}</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </CardContent>
            <CardActions>
              <AnimateButton>
                <Button
                  disableElevation
                  fullWidth
                  size="small"
                  variant="contained"
                  color="secondary"
                  className={classes.actionButton}
                  onClick={() => handleConfirmOrder()}
                >
                  Confirm Order
                </Button>
              </AnimateButton>
            </CardActions>
          </>
        ) : (
          <CardContent>
            <Grid item xs={12}>
              <Typography className={classes.cardTitle} sx={{ mb: 10 }}>
                Your cart is empty
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
                  Go Shopping
                </Button>
              </AnimateButton>
            </Grid>
          </CardContent>
        )}
      </Grid>
    </MainCard>
  );
};

OrderCompletion.propTypes = {
  totalDue: PropTypes.number.isRequired,
  cartItemsList: PropTypes.array.isRequired,
};

export default OrderCompletion;
