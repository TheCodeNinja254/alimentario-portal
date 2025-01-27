import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { Fastfood } from "@material-ui/icons";
import { useQuery } from "@apollo/client";
import { Alert } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/styles";
import SearchComponent from "../../components/SearchComponent";
import { OrdersTable } from "./components";
import UpdateOrderStatusModal from "../components/UpdateOrderStatusModal";
import SuspenseLoader from "../../components/Loader/SuspenseLoader";
import { GET_ALL_ORDERS } from "../../api/Queries/Orders/GetAllOrders";
import ViewMyOrdersModal from "../components/ViewMyOrdersModal";
import PageTitle from "../../components/PageTitle";

const Orders = () => {
  const theme = useTheme();
  const [dataSetToShow, setDataSetToShow] = useState(5);
  const [open, setOpen] = useState(false);
  const [productViewModalOpen, setProductViewModalOpen] = useState(false);
  const [orderInfo, setOrderInfo] = useState({});
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  // orderInfo status
  const [status, setStatus] = React.useState("pending");

  const handleOpenModal = ({ _orderId, _currentStatus }) => {
    setOpen(true);
    setOrderInfo({ orderId: _orderId, currentStatus: _currentStatus });
  };

  const handleSearch = (_text) => {
    console.log(_text);
    setSearchValue(_text);
  };

  const handleProductsModal = (_selectedOrder) => {
    setProductViewModalOpen(true);
    setSelectedOrder(_selectedOrder);
  };

  const { orderId, currentStatus } = orderInfo;

  const hasSearch = searchValue !== "";

  const searchVariables = { hasSearch, searchValue } || undefined;

  const { data, error, loading } = useQuery(GET_ALL_ORDERS, {
    variables: {
      pageSize: dataSetToShow,
      orderStatus: status,
      ...searchVariables,
    },
  });

  return (
    <Box>
      <PageTitle
        title="Pending/New Orders"
        subTitle="View all new and pending orders"
      />
      <SearchComponent
        searchPlaceholder="Search orders"
        SearchPreceedingIcon={<Fastfood />}
        handleSearch={handleSearch}
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
