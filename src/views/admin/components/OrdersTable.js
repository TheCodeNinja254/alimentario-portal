import { useTheme } from "@material-ui/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Alert, Avatar, AvatarGroup, Chip } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import formatDate from "../../../utils/formatDate";

const columns = [
  { field: "icons", headerName: "In The Order", width: 150 },
  {
    field: "customerName",
    headerName: "Customer Name",
    width: 150,
  },
  {
    field: "msisdn",
    headerName: "Customer Mobile/Alt",
    width: 150,
  },
  {
    field: "deliveryLocation",
    headerName: "Delivery Location",
    width: 150,
  },
  { field: "orderTime", headerName: "Ordered At", width: 150 },
  { field: "status", headerName: "Order Status", width: 110 },
  { field: "view", headerName: "View Order", width: 110 },
  { field: "action", headerName: "Action", width: 110 },
];

const OrdersTable = ({
  totalElements,
  currentSelection,
  dataSetToShow,
  setDataSetToShow,
  rows = [],
  handleOpenModal,
  handleProductsModal,
}) => {
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

  return (
    <Card
      elevation={0}
      style={{
        borderRadius: 3,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <CardContent>
        {rows?.length <= 0 ? (
          <Box>
            <Alert
              severity="info"
              variant="filled"
              style={{ marginTop: theme.spacing(1), overflowWrap: "inherit" }}
            >
              <div>
                <Typography variant="body2">
                  There are no orders to show at the moment. Thanks
                </Typography>
              </div>
            </Alert>
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: theme.spacing(2),
              }}
            >
              <Typography variant="body1">
                Seeing{" "}
                <strong>
                  {totalElements < currentSelection
                    ? totalElements
                    : currentSelection}
                </strong>{" "}
                of <strong>{totalElements}</strong> items.{" "}
              </Typography>
              <Button
                disabled={
                  currentSelection === totalElements ||
                  dataSetToShow === totalElements
                }
                variant="outlined"
                size="small"
                onClick={() => setDataSetToShow(totalElements)}
              >
                See All
              </Button>
            </Box>
            <TableContainer
              component={Paper}
              elevation={0}
              style={{
                maxHeight: 400,
                borderRadius: 3,
                paddingX: theme.spacing(2),
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Table stickyHeader padding="normal">
                <TableHead
                  style={{ backgroundColor: theme.palette.background.paper }}
                >
                  <TableRow>
                    {columns?.map((column) => (
                      <TableCell
                        key={column.field}
                        style={{ minWidth: column.width || 100 }}
                      >
                        <Typography>
                          <strong>{column.headerName}</strong>
                        </Typography>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <AvatarGroup
                          max={5}
                          align="left"
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            flexDirection: "row-reverse",
                          }}
                        >
                          {row.specifications?.map((prod) => (
                            <Tooltip title={prod?.productName}>
                              <Avatar
                                alt="Avocado"
                                src={`/images/${prod?.productPicMain}`}
                                sx={{ width: 40, height: 40 }}
                              />
                            </Tooltip>
                          ))}
                        </AvatarGroup>
                      </TableCell>
                      <TableCell>
                        {row?.customerInfo?.firstName || ""}{" "}
                        {row?.customerInfo?.lastName || ""}
                      </TableCell>
                      <TableCell>
                        {row?.customerInfo?.msisdn || ""} /
                        {row?.deliveryLocation?.alternativePhoneNumber || ""}
                      </TableCell>
                      <TableCell>
                        {row?.deliveryLocation?.countyName} /{" "}
                        {row?.deliveryLocation?.localeName} /{" "}
                        {row?.deliveryLocation?.deliveryPreciseLocation}
                      </TableCell>
                      <TableCell>{formatDate(row?.createdAt, true)}</TableCell>
                      <TableCell>
                        <Chip
                          sx={{
                            marginTop: theme.spacing(0.5),
                            marginRight: theme.spacing(2),
                            backgroundColor: statusColor[row.orderStatus],
                          }}
                          variant="filled"
                          label={
                            <Typography
                              style={{ color: theme.palette.common.white }}
                            >
                              <strong>{row?.orderStatus}</strong>
                            </Typography>
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          color="primary"
                          disableElevation
                          size="small"
                          variant="contained"
                          onClick={() => handleProductsModal(row)}
                        >
                          View Order
                        </Button>
                      </TableCell>{" "}
                      <TableCell>
                        <Button
                          color="primary"
                          size="small"
                          variant="outlined"
                          onClick={() =>
                            handleOpenModal({
                              _orderId: row?.orderId,
                              _currentStatus: row?.orderStatus,
                            })
                          }
                        >
                          Update Status
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default OrdersTable;
