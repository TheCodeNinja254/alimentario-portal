import React from "react";
import { Avatar, List, ListItemAvatar, ListItemText } from "@material-ui/core";
import { Box, IconButton, ListItem } from "@mui/material";
import { IconTrash } from "@tabler/icons";
import Image from "../../../components/Image";
import formatDate from "../../../utils/formatDate";

// const useStyles = makeStyles(() => ({
//   scrollableBox: {
//     maxHeight: 200, // bug
//   },
// }));

const ListedCartItems = ({ cartItemsList }) => {
  // const classes = useStyles();

  const displayedCartItems = cartItemsList.slice(-4);

  return (
    <Box>
      <List sx={{ width: "100%" }} dense>
        {displayedCartItems.map((cartItem) => (
          <ListItem key={cartItem.id}>
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
              secondary={formatDate(cartItem.createdAt, true)}
            />
            <IconButton edge="end" aria-label="delete">
              <IconTrash />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListedCartItems;
