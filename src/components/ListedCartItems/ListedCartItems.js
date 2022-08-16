import React from "react";
import { Avatar, List, ListItemAvatar, ListItemText } from "@material-ui/core";
import { IconButton, ListItem } from "@mui/material";
import { IconTrash } from "@tabler/icons";
import Image from "../Image";
import FormatDate from "../../utils/formatDate";

const ListedCartItems = ({ cartItemsList }) => {
  return (
    <List sx={{ width: "100%" }} dense>
      {cartItemsList.map((cartItem) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Image
                src={`/images/${cartItem?.productPicMain}`}
                alt={cartItem.productName}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${cartItem.productName} - ${cartItem.quantity} ${cartItem.productUnitOfMeasure} for Ksh. ${cartItem.productPrice}`}
            secondary={FormatDate(cartItem.createdAt, true)}
          />
          <IconButton edge="end" aria-label="delete">
            <IconTrash />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListedCartItems;
