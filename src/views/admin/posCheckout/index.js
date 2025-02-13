import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import POSCheckoutHeader from "./POSCheckoutHeader";
import { gridSpacing } from "../../../store/constant";
import Cart from "./Cart";
import OrderCompletion from "./OrderCompletion";
import { GetPOSCartItemsQuery } from "../../../api/Queries/Cart/GetCartItems";
import { getOrderDetails } from "../../../utils/orderDetailsStorage";

const Checkout = () => {
  const [totalDue, setTotalDue] = useState(0);

  const calculateTotalDue = (cartList) => {
    let total = 0;
    if (cartList?.length > 0) {
      // eslint-disable-next-line array-callback-return
      cartList.map((item) => {
        const perItemDue = item?.quantity * item?.productPrice;
        total += perItemDue;
      });
    }
    return setTotalDue(total);
  };

  const orderDetails = getOrderDetails();

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <POSCheckoutHeader />
            <GetPOSCartItemsQuery
              variables={{ guestId: orderDetails?.guestId }}
            >
              {({
                getPOSCartItems: {
                  status: getCartItemStatus,
                  cartItemsList,
                  preOrderItemsFound,
                },
              }) => (
                <>
                  <Cart
                    calculateTotalDue={calculateTotalDue}
                    getCartItemStatus={getCartItemStatus}
                    cartItemsList={cartItemsList}
                  />
                  <OrderCompletion
                    totalDue={totalDue}
                    cartItemsList={cartItemsList}
                    preOrderItemsFound={preOrderItemsFound}
                  />
                </>
              )}
            </GetPOSCartItemsQuery>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Checkout;
