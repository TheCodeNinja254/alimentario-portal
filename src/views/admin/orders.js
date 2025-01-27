import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { Fastfood } from "@material-ui/icons";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Alert } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/styles";
import { useParams } from "react-router";
import SearchComponent from "../../components/SearchComponent";
import { OrdersTable } from "./components";
import UpdateOrderStatusModal from "../components/UpdateOrderStatusModal";
import SuspenseLoader from "../../components/Loader/SuspenseLoader";
import { GET_ALL_ORDERS } from "../../api/Queries/Orders/GetAllOrders";
import ViewMyOrdersModal from "../components/ViewMyOrdersModal";
import PageTitle from "../../components/PageTitle";

const Orders = () => {
  const theme = useTheme();

  const { orderType } = useParams();

  const [dataSetToShow, setDataSetToShow] = useState(5);
  const [open, setOpen] = useState(false);
  const [productViewModalOpen, setProductViewModalOpen] = useState(false);
  const [orderInfo, setOrderInfo] = useState({});
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  const handleOpenModal = ({ _orderId, _currentStatus }) => {
    setOpen(true);
    setOrderInfo({ orderId: _orderId, currentStatus: _currentStatus });
  };

  const handleSearch = (_text) => {
    setSearchValue(_text);
  };

  const handleProductsModal = (_selectedOrder) => {
    setProductViewModalOpen(true);
    setSelectedOrder(_selectedOrder);
  };

  const { orderId, currentStatus } = orderInfo;

  const hasSearch = searchValue !== "";

  const searchVariables = { hasSearch, searchValue } || undefined;

  const parsedOrderType = {
    new: "pending",
    "past-orders": "closed",
  };

  const parsedStatus =
    orderType === "past-orders" ? parsedOrderType[orderType] : "pending";

  const { data, error, loading } = useQuery(GET_ALL_ORDERS, {
    variables: {
      pageSize: dataSetToShow,
      orderStatus: parsedStatus,
      ...searchVariables,
      isPreorder: orderType === "pre-orders" ? 1 : 0,
    },
  });

  const parsedTitle = {
    new: "Pending/New Orders",
    "past-orders": "Past Orders",
    "pre-orders": "Pre Orders",
  };

  return (
    <Box>
      <PageTitle
        title={parsedTitle[orderType] || "Pending/New Orders"}
        subTitle="View orders on this screen"
      />
      <SearchComponent
        searchPlaceholder="Search orders"
        SearchPreceedingIcon={<Fastfood />}
        handleSearch={handleSearch}
        hasSearch={hasSearch}
      />
      {loading ? (
        <Box>
          <SuspenseLoader />
        </Box>
      ) : (
        <Box>
          {error ? (
            <Box>
              <Alert
                severity="warning"
                variant="filled"
                style={{ marginTop: theme.spacing(1), overflowWrap: "inherit" }}
              >
                <div>
                  <Typography variant="body2">
                    An error occured. We could not complete this request.
                  </Typography>
                </div>
              </Alert>
            </Box>
          ) : (
            <OrdersTable
              totalElements={data?.getAllOrders?.myOrders?.totalElements}
              currentSelection={data?.getAllOrders?.myOrders?.currentSelection}
              dataSetToShow={dataSetToShow}
              setDataSetToShow={setDataSetToShow}
              handleOpenModal={handleOpenModal}
              handleProductsModal={handleProductsModal}
              rows={data?.getAllOrders?.myOrders?.content || []}
            />
          )}
        </Box>
      )}
      <UpdateOrderStatusModal
        open={open}
        setOpen={setOpen}
        currentStatus={currentStatus}
        orderId={orderId}
        searchVariables={searchVariables}
        isPreorder={orderType === "pre-orders" ? 1 : 0}
      />
      <ViewMyOrdersModal
        open={productViewModalOpen}
        setOpen={setProductViewModalOpen}
        order={selectedOrder}
      />
    </Box>
  );
};

export default Orders;
