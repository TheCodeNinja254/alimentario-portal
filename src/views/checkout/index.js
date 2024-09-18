import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import CheckoutHeader from "./CheckoutHeader";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import MenuCard from "../components/ActionCards";
import { gridSpacing } from "../../store/constant";
import Cart from "./Cart";
import WeDeliverCard from "../components/ActionCards/WeDeliverCard";
import OrderCompletion from "./OrderCompletion";
import GetCartItemsQuery from "../../api/Queries/Cart/GetCartItems";

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
  return (
    <GetSignedInCustomerQuery>
      {({ getSignedInCustomer: { status } }) => (
        <>
          {status && (
            <Grid container spacing={gridSpacing}>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <Grid container spacing={gridSpacing}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <CheckoutHeader />
                    <GetCartItemsQuery>
                      {({
                        getCartItems: {
                          status: getCartItemStatus,
                          cartItemsList,
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
                          />
                        </>
                      )}
                    </GetCartItemsQuery>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={4} md={8} sm={12} xs={12}>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <MenuCard />
                  </Grid>
                  <Grid item xs={12}>
                    <WeDeliverCard />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </GetSignedInCustomerQuery>
  );
};

export default Checkout;
