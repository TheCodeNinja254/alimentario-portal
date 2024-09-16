import { Card } from "@mui/material";
import React from "react";
import { useTheme } from "@material-ui/styles";
import ActionableOrderCard from "./ActionableOrderCard";

const InternalOrderSectionCard = ({ order, handleOpenModal }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.grey[200],
        marginTop: theme.spacing(2),
      }}
      elevation={0}
    >
      <ActionableOrderCard order={order} handleOpenModal={handleOpenModal} />
    </Card>
  );
};

export default InternalOrderSectionCard;
