import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Chip, Stack, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Box, Divider, Grid, IconButton } from "@mui/material";
import { Close } from "@material-ui/icons";
import Image from "../../../components/Image";
import AddToCartForm from "../CommonForms/AddToCartForm";
import StatusIcon from "../../../components/StatusIcon";
import AnimateButton from "../../../ui-component/extended/AnimateButton";

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
  priceChip: {
    fontWeight: 700,
  },
}));

const AddToCartModal = ({
  open,
  setOpen,
  selectedProduct,
  submitDetails,
  setSubmitDetails,
}) => {
  const classes = useStyles();

  const {
    status: submitStatus,
    quantity,
    customerSpecification,
  } = submitDetails;

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
            {submitStatus ? "" : "Add to cart"}
          </DialogTitle>
          <Box>
            <IconButton onClick={() => handleClose()}>
              <Close />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>

      <DialogContent>
        {submitStatus ? (
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <StatusIcon status="success" text="Successfully added to cart" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption">PRODUCT</Typography>
              <Typography className={classes.productTitle}>
                {selectedProduct.productName}
              </Typography>
              <Typography variant="caption">
                has been added to you cart.
              </Typography>
              <br />
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
                    <Typography>
                      <strong>
                        {quantity} {selectedProduct?.productUnitOfMeasure}
                      </strong>{" "}
                      @ Ksh. <strong>{selectedProduct?.productPrice}</strong>
                    </Typography>
                  }
                  className={classes.priceChip}
                />
                <Chip
                  variant="filled"
                  label={
                    <Typography>
                      Ksh.{" "}
                      <strong>
                        {selectedProduct?.productPrice * Number(quantity)}
                      </strong>
                    </Typography>
                  }
                  className={classes.priceChip}
                />
              </Stack>
              {customerSpecification !== "" && (
                <>
                  <Typography variant="caption">ADDITIONAL INFO</Typography>
                  <Divider />
                  <Typography variant="caption">
                    {customerSpecification}
                  </Typography>
                </>
              )}

              <Stack
                direction="row"
                spacing={2}
                className={classes.nextActionsArea}
              >
                <AnimateButton>
                  <Button
                    disableElevation
                    fullWidth
                    size="large"
                    variant="contained"
                    color="secondary"
                    component={RouterLink}
                    to="/checkout"
                  >
                    Checkout
                  </Button>
                </AnimateButton>
                <AnimateButton>
                  <Button
                    disableElevation
                    fullWidth
                    size="large"
                    variant="outlined"
                    color="secondary"
                    onClick={handleClose}
                  >
                    Shop More
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>
          </Grid>
        ) : (
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
                      ? "Available"
                      : "Out of Stock"
                  }
                  className={classes.priceChip}
                />
                <Chip
                  variant="filled"
                  label={`Ksh. ${selectedProduct?.productPrice}`}
                  className={classes.priceChip}
                />
              </Stack>
            </Grid>
            <Divider />
            <Grid item xs={12}>
              <AddToCartForm
                productId={selectedProduct.id}
                setSubmitDetails={setSubmitDetails}
              />
            </Grid>
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartModal;
