import React, { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import { Typography } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import Image from "../../../components/Image";
import emptyPlate from "../../../assets/images/Graphics/emptyPlate.png";
import GetAllOrdersQuery from "../../../api/Queries/Orders/GetAllOrders";
import InternalOrderSectionCard from "../../components/InternalOrderSectionCard";
import UpdateOrderStatusModal from "../../components/UpdateOrderStatusModal";

const AllOrdersSection = ({ orderStatus }) => {
  const theme = useTheme();

  const [dataSetToShow, setDataSetToShow] = useState(5);

  const [animate, setAnimate] = useState(false);

  const [open, setOpen] = useState(false);
  const [orderInfo, setOrderInfo] = useState({});

  const handleOpenModal = ({ _orderId, _currentStatus }) => {
    setOpen(true);
    setOrderInfo({ orderId: _orderId, currentStatus: _currentStatus });
  };

  const { orderId, currentStatus } = orderInfo;

  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="1.4s">
      <GetAllOrdersQuery
        variables={{ pageSize: dataSetToShow, orderStatus }}
        pollInterval={orderStatus === "closed" ? 0 : 15000}
      >
        {({
          getAllOrders: {
            status,
            myOrders: { content, currentSelection, totalElements },
          },
        }) => (
          <>
            {status ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
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
                {content.map((order) => (
                  <InternalOrderSectionCard
                    order={order}
                    handleOpenModal={handleOpenModal}
                  />
                ))}
              </>
            ) : (
              <Box>
                <Divider sx={{ marginTop: theme.spacing(1) }} />
                <Image src={emptyPlate} alt="empty plate" />
                <Typography variant="caption">
                  Your plate is empty. Your orders will appear here.
                </Typography>
              </Box>
            )}
          </>
        )}
      </GetAllOrdersQuery>
      <UpdateOrderStatusModal
        open={open}
        setOpen={setOpen}
        currentStatus={currentStatus}
        orderId={orderId}
      />
    </AnimatedSection>
  );
};

export default AllOrdersSection;
