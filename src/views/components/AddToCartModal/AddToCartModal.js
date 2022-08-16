import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Chip, Stack, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Divider, Grid } from "@mui/material";
import Image from "../../../components/Image";
import AddToCartForm from "../CommonForms/AddToCartForm";

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
}));

const AddToCartModal = ({ open, setOpen, selectedProduct }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogTitle className={classes.modalTitle}>Add to cart</DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography className={classes.productTitle}>
              {selectedProduct.productName}
            </Typography>
            <Typography variant="caption">
              {selectedProduct.productDescription}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Image
              alt="Img"
              src={`/images/${selectedProduct?.productPicMain}`}
              className={classes.productImage}
            />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={1} className={classes.infoTab}>
              <Chip
                variant="filled"
                label={
                  selectedProduct?.stockStatus === 1
                    ? "In Stock"
                    : "Out of Stock"
                }
                className={classes.priceChip}
              />
              <Chip
                variant="filled"
                label={`Price per ${selectedProduct?.productUnitOfMeasure}: ${selectedProduct?.productPrice}`}
                className={classes.priceChip}
              />
            </Stack>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <AddToCartForm productId={selectedProduct.id} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddToCartModal;
