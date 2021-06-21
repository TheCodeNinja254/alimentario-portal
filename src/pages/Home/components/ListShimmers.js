import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const ListShimmers = ({ items = 4 }) => {
  const listItems = [];
  for (let x = 0; x < items; x += 1) {
    listItems.push(
      <ListItem key={x}>
        <Skeleton variant="text" height={18} className="full-width" />
      </ListItem>
    );
  }
  return <List>{listItems}</List>;
};

export default React.memo(ListShimmers);
