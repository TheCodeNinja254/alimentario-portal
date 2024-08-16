import * as React from "react";
import Dialog from "@mui/material/Dialog";
import OrderSection from "../OrderSection/OrderSection";

const ViewMyOrdersModal = ({ open, setOpen, order }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
      <OrderSection
        order={order}
        handleClose={handleClose}
        showHandleCloseButton
      />
    </Dialog>
  );
};

export default ViewMyOrdersModal;
