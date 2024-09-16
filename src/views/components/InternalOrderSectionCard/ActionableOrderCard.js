import DialogTitle from "@mui/material/DialogTitle";
import {
  Badge,
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@material-ui/icons";
import DialogContent from "@mui/material/DialogContent";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import OrderItemCard from "../OrderItemCard";
import formatDate from "../../../utils/formatDate";
import BufferProgress from "../../../components/BufferProgress";

const useStyles = makeStyles((theme) => ({
  modalTitle: {
    color: theme.palette.secondary.dark,
    fontWeight: 700,
    fontSize: 20,
  },
}));

const ActionableOrderCard = ({
  order,
  handleClose,
  showHandleCloseButton,
  handleOpenModal,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const statusColor = {
    New: theme.palette.info.main,
    Pending: theme.palette.warning.light,
    Delivered: theme.palette.success.main,
    Enroute: theme.palette.info.light,
    Preparation: theme.palette.grey[600],
    Delayed: theme.palette.warning.dark,
    Cancelled: theme.palette.error.main,
  };

  const itemsToShowLoaderFor = [
    "New",
    "Pending",
    "Enroute",
    "Preparation",
    "Delayed",
  ];

  return (
    <>
      {itemsToShowLoaderFor.includes(order.orderStatus) && (
        <BufferProgress backgroundColor={statusColor[order.orderStatus]} />
      )}
      <DialogTitle>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Box>
              <Badge
                badgeContent={order?.specifications?.length || 0}
                color="primary"
              >
                <Typography className={classes.modalTitle} variant="h1">
                  My Order
                </Typography>
              </Badge>
            </Box>

            <Typography variant="caption">
              Ordered on: <strong>{formatDate(order?.createdAt, true)}</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                flexDirection: "row",
              }}
            >
              <Chip
                sx={{
                  marginTop: theme.spacing(0.5),
                  marginRight: theme.spacing(2),
                  backgroundColor: statusColor[order.orderStatus],
                }}
                variant="filled"
                label={
                  <Typography style={{ color: theme.palette.common.white }}>
                    <strong>{order?.orderStatus}</strong>
                  </Typography>
                }
              />
              <Button
                color="primary"
                variant="outlined"
                onClick={() =>
                  handleOpenModal({
                    _orderId: order?.orderId,
                    _currentStatus: order?.orderStatus,
                  })
                }
              >
                Update Status
              </Button>
              {showHandleCloseButton && (
                <IconButton onClick={() => handleClose()}>
                  <Close />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Typography>
          Customer Name:{" "}
          <strong>
            {order?.customerInfo?.firstName} {order?.customerInfo?.lastName}
          </strong>
        </Typography>
        <Typography>
          Customer Contact:{" "}
          <strong>
            Main: {order?.customerInfo?.msisdn}
            {" - Alternative: "}
            {order?.deliveryLocation?.alternativePhoneNumber || "None"}
          </strong>
        </Typography>
        <Divider sx={{ marginTop: theme.spacing(2) }} />
        <Typography>
          Total Amount: <strong>Ksh. {order?.amountDue}</strong>
        </Typography>
        <Typography>
          Delivery Location:{" "}
          <strong>
            {order?.deliveryLocation?.countyName} /{" "}
            {order?.deliveryLocation?.localeName} /{" "}
            {order?.deliveryLocation?.deliveryPreciseLocation}
          </strong>
        </Typography>
        <Divider sx={{ marginTop: theme.spacing(2) }} />
        <Typography sx={{ marginTop: theme.spacing(2) }}>
          <strong>Items in the order</strong>
        </Typography>
        {order?.specifications.map((orderItem) => (
          <OrderItemCard orderItem={orderItem} />
        ))}
      </DialogContent>
    </>
  );
};

export default ActionableOrderCard;
