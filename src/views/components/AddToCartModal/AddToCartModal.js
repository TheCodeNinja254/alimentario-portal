import * as React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Chip,
  Typography,
  Box,
  Divider,
  Grid,
  IconButton,
} from "@material-ui/core";
import { Stack, Alert } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Close } from "@material-ui/icons";
import { useContext } from "react";
import Image from "../../../components/Image";
import AddToCartForm from "../CommonForms/AddToCartForm";
import StatusIcon from "../../../components/StatusIcon";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import { AlertContext } from "../../../context/AlertProvider";

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
    height: "75%",
  },
  infoTab: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  nextActionsArea: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
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
  const theme = useTheme();

  const { alertVisible, hideAlert } = useContext(AlertContext);

  const {
    status: submitStatus,
    quantity,
    customerSpecification,
  } = submitDetails;

  const handleClose = () => {
    setOpen(false);
  };

  const TagsSection = ({ stage = "initial" }) => {
    return (
      <Box
        display="flex"
        justifyContent="left"
        flexWrap="wrap"
        className={classes.infoTab}
      >
        <Chip
          style={{ margin: theme.spacing(1) }}
          variant="outlined"
          size="small"
          color="primary"
          label={
            stage === "initial" ? (
              <Typography variant="caption">
                Ksh. <strong>{selectedProduct?.productPrice}</strong>
              </Typography>
            ) : (
              <Typography variant="caption">
                <strong>
                  {quantity} {selectedProduct?.productUnitOfMeasure}
                </strong>{" "}
                @ Ksh. <strong>{selectedProduct?.productPrice}</strong>
              </Typography>
            )
          }
          className={classes.priceChip}
        />
        {stage !== "initial" && (
          <Chip
            style={{ margin: theme.spacing(1) }}
            variant="outlined"
            color="primary"
            size="small"
            label={
              <Typography variant="caption">
                Ksh.{" "}
                <strong>
                  {selectedProduct?.productPrice * Number(quantity)}
                </strong>
              </Typography>
            }
            className={classes.priceChip}
          />
        )}
        {selectedProduct?.tag &&
          selectedProduct?.tag !== "" &&
          selectedProduct.tag
            .split(",")
            .map((tag) => (
              <Chip
                style={{ margin: theme.spacing(1) }}
                key={tag}
                variant="default"
                color="primary"
                size="small"
                label={<Typography variant="caption">{tag.trim()}</Typography>}
                className={classes.chip}
              />
            ))}
      </Box>
    );
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
              <Image
                alt="Img"
                src={`/images/${selectedProduct?.productPicMain}`}
                className={classes.productImage}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="caption">PRODUCT</Typography>
              <Typography className={classes.productTitle}>
                {selectedProduct.productName?.toUpperCase()}
              </Typography>
              <Typography variant="caption">
                has been added to you cart.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TagsSection stage="after" />
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
                    size="small"
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
                    size="small"
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
              <Image
                alt="Img"
                src={`/images/${selectedProduct?.productPicMain}`}
                className={classes.productImage}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.productTitle}>
                {selectedProduct?.productName?.toUpperCase()}
              </Typography>
              <Typography variant="caption">
                {selectedProduct.productDescription}
              </Typography>

              <TagsSection stage="initial" />
            </Grid>
            <Grid item xs={12}>
              {alertVisible && (
                <Alert
                  severity="info"
                  sx={{ marginTop: theme.spacing(2) }}
                  action={
                    <Button onClick={hideAlert}>
                      <Typography variant="caption">
                        Normal Order Instead
                      </Typography>
                    </Button>
                  }
                >
                  <strong>Pre-order now!</strong>
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              {selectedProduct?.stockStatus === 1 ? (
                <AddToCartForm
                  productId={selectedProduct.id}
                  setSubmitDetails={setSubmitDetails}
                />
              ) : (
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  label={
                    <Typography variant="caption">
                      <strong>Out of Stock, Check again later!</strong>
                    </Typography>
                  }
                  className={classes.priceChip}
                />
              )}
            </Grid>
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddToCartModal;
