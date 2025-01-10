import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { useMediaQuery } from "@mui/material";
import OrderSection from "../OrderSection/OrderSection";

const ViewMyOrdersModal = ({ open, setOpen, order }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={open}
      onClose={handleClose}
      fullScreen={isMobile}
    >
      <OrderSection
        order={order}
        handleClose={handleClose}
        showHandleCloseButton
      />
    </Dialog>
  );
};

export default ViewMyOrdersModal;
