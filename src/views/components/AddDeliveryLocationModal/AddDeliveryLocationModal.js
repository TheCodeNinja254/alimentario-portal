import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/styles";
import { Box, Grid, IconButton } from "@mui/material";
import { Close } from "@material-ui/icons";
import AddDeliveryLocationForm from "../CommonForms/AddDeliveryLocationForm";

const useStyles = makeStyles((theme) => ({
  loginInput: {
    ...theme.typography.customInput,
  },
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
  chip: {
    borderColor: theme.palette.primary.dark,
  },
  productImage: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  infoTab: {
    marginBottom: theme.spacing(2),
  },
  nextActionsArea: {
    marginTop: theme.spacing(2),
  },
}));

const AddDeliveryLocationModal = ({ open, setOpen }) => {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const [addDeliveryLocationDetails, setAddDeliveryLocationDetails] = useState(
    {}
  );
  const { status: submitStatus } = addDeliveryLocationDetails;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogTitle className={classes.modalTitle}>
        {submitStatus ? "" : "Where can we deliver?"}
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <AddDeliveryLocationForm handleClose={handleClose} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AddDeliveryLocationModal;
