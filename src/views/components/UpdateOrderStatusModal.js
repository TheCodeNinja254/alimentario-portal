import DialogTitle from "@mui/material/DialogTitle";
import { Box, Grid, IconButton } from "@mui/material";
import { Close } from "@material-ui/icons";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import UpdateOrderStatusForm from "./CommonForms/UpdateOrderStatusForm";

const useStyles = makeStyles((theme) => ({
  modalTitle: {
    color: theme.palette.secondary.dark,
    fontWeight: 700,
    fontSize: 16,
  },
  productTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: 16,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  nextActionsArea: {
    marginTop: theme.spacing(2),
  },
}));

const UpdateOrderStatusModal = ({ open, setOpen, currentStatus, orderId }) => {
  const classes = useStyles();

  const [submitStatus, setSubmitStatus] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <DialogTitle className={classes.modalTitle}>
            {submitStatus
              ? "Please update the order status"
              : "Please update the order status"}
          </DialogTitle>
          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <UpdateOrderStatusForm
              handleClose={handleClose}
              orderId={orderId}
              currentStatus={currentStatus}
              setSubmitStatus={setSubmitStatus}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateOrderStatusModal;
