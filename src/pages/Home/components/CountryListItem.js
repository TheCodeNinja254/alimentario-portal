import React from "react";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const CountryListItem = ({ item, selectOption }) => {
  return (
    <ListItem>
      <ListItemText primary={item.country} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => selectOption(item.country)}>
          <CheckIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default React.memo(CountryListItem);
