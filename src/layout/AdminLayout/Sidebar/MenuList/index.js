import React from "react";
import { Typography, Box } from "@material-ui/core";
import NavGroup from "./NavGroup";
import dashboardMenuItems from "../../../../menu-items/dashboardMenuItems";

const MenuList = () => {
  return (
    <Box>
      {dashboardMenuItems.items.map((item) => {
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
      })}
    </Box>
  );
};

export default MenuList;
