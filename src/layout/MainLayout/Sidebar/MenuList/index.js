import React from "react";
import { Typography } from "@material-ui/core";
import NavGroup from "./NavGroup";
import menuItems from "../../../../menu-items";
import GetSignedInCustomerQuery from "../../../../api/Queries/Authentication/GetSignedInCustomer";
import authenticatedMenuItems from "../../../../menu-items/authenticated";
import authenticatedWithBusinessMenuItems from "../../../../menu-items/authenticatedWithBusiness";

// ===========================|| SIDEBAR MENU LIST ||=========================== //

const MenuList = () => {
  return (
    <GetSignedInCustomerQuery>
      {({ getSignedInCustomer: { status, customer } }) => {
        if (status) {
          if (customer?.businessId > 0) {
            return authenticatedWithBusinessMenuItems.items.map((item) => {
              switch (item.type) {
                case "group":
                  return <NavGroup key={item.id} item={item} />;
                default:
                  return (
                    <Typography
                      key={item.id}
                      variant="h6"
                      color="error"
                      align="center"
                    >
                      Menu Items Error
                    </Typography>
                  );
              }
            });
          }
          return authenticatedMenuItems.items.map((item) => {
            switch (item.type) {
              case "group":
                return <NavGroup key={item.id} item={item} />;
              default:
                return (
                  <Typography
                    key={item.id}
                    variant="h6"
                    color="error"
                    align="center"
                  >
                    Menu Items Error
                  </Typography>
                );
            }
          });
        }
        return menuItems.items.map((item) => {
          switch (item.type) {
            case "group":
              return <NavGroup key={item.id} item={item} />;
            default:
              return (
                <Typography
                  key={item.id}
                  variant="h6"
                  color="error"
                  align="center"
                >
                  Menu Items Error
                </Typography>
              );
          }
        });
      }}
    </GetSignedInCustomerQuery>
  );
};

export default MenuList;
