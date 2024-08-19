import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import GetMyOrdersQuery from "../../../api/Queries/Orders/GetMyOrders";
import RecentOrderCard from "../../../ui-component/cards/RecentOrderCard";
import ViewMyOrdersModal from "../ViewMyOrdersModal";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import Image from "../../../components/Image";
import emptyPlate from "../../../assets/images/Graphics/emptyPlate.png";

const useStyles = makeStyles((theme) => ({
  tagLine: {
    color: theme.palette.grey[900],
    opacity: 0.6,
    marginBottom: theme.spacing(2),
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
}));

const RecentOrdersSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState();

  const [orderStatus, setOrderStatus] = useState("pending");

  const handleViewMore = (_selectedOrder) => {
    setSelectedOrder(_selectedOrder);
    setOpen(!open);
  };

  return (
    <Grid item>
      <GetMyOrdersQuery
        variables={{ pageSize: 5, orderStatus }}
        pollInterval={orderStatus === "closed" ? 0 : 40000}
      >
        {({ getMyOrders: { status, myOrders } }) => (
          <>
            {status ? (
              <>
                <Typography variant="subtitle2" className={classes.tagLine}>
                  Below are your recent orders
                </Typography>
                <Box sx={{ marginBottom: theme.spacing(2) }}>
                  <Button
                    sx={{ marginRight: theme.spacing(2) }}
                    disableElevation
                    size="small"
                    variant={
                      orderStatus === "pending" ? "contained" : "outlined"
                    }
                    onClick={() => setOrderStatus("pending")}
                  >
                    Pending
                  </Button>
                  <Button
                    disableElevation
                    size="small"
                    variant={
                      orderStatus === "closed" ? "contained" : "outlined"
                    }
                    onClick={() => setOrderStatus("closed")}
                  >
                    Older
                  </Button>
                </Box>
                {myOrders.content.map((order) => (
                  <>
                    <RecentOrderCard
                      order={order}
                      handleViewMore={handleViewMore}
                    />
                  </>
                ))}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <ViewMyOrdersModal
                    open={open}
                    setOpen={setOpen}
                    order={selectedOrder}
                  />
                  <AnimateButton>
                    <Button
                      component={RouterLink}
                      to="/orders"
                      variant="contained"
                      className={classes.button}
                    >
                      View all orders
                    </Button>
                  </AnimateButton>
                </Box>
              </>
            ) : (
              <Box>
                <Box sx={{ marginBottom: theme.spacing(2) }}>
                  <Button
                    sx={{ marginRight: theme.spacing(2) }}
                    disableElevation
                    size="small"
                    variant={
                      orderStatus === "pending" ? "contained" : "outlined"
                    }
                    onClick={() => setOrderStatus("pending")}
                  >
                    Pending
                  </Button>
                  <Button
                    disableElevation
                    size="small"
                    variant={
                      orderStatus === "closed" ? "contained" : "outlined"
                    }
                    onClick={() => setOrderStatus("closed")}
                  >
                    Older
                  </Button>
                </Box>
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
    </Grid>
  );
};

export default RecentOrdersSection;
