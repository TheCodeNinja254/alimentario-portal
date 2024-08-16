import React, { useEffect, useState } from "react";
import { Box, Card, Divider } from "@mui/material";
import { Typography } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import OrderSection from "../../components/OrderSection/OrderSection";
import GetMyOrdersQuery from "../../../api/Queries/Orders/GetMyOrders";
import Image from "../../../components/Image";
import emptyPlate from "../../../assets/images/Graphics/emptyPlate.png";

const SubmittedOrdersSection = ({ orderStatus }) => {
  const theme = useTheme();

  const [dataSetToShow, setDataSetToShow] = useState(5);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="1.4s">
      <GetMyOrdersQuery
        variables={{ pageSize: dataSetToShow, orderStatus }}
        pollInterval={orderStatus === "closed" ? 0 : 40000}
      >
        {({
          getMyOrders: {
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
                  <Card
                    sx={{
                      backgroundColor: theme.palette.grey[200],
                      marginTop: theme.spacing(2),
                    }}
                    elevation={0}
                  >
                    <OrderSection order={order} />
                  </Card>
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
      </GetMyOrdersQuery>
    </AnimatedSection>
  );
};

export default SubmittedOrdersSection;
