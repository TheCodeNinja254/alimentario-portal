import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@material-ui/core";

import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { Divider } from "@mui/material";
import { gridSpacing } from "../../../store/constant";
import GetDisplayProductsQuery from "../../../api/Queries/Products/GetDisplayProducts";
import NoContentToShow from "../../components/NoContentToShow";
import AddToCartModal from "../../components/AddToCartModal";
import SignInModal from "../../components/SignInModal/SignInModal";
import AnimatedSection from "../../../ui-component/AnimatedSection";

const useStyles = makeStyles((theme) => ({
  root: {},
  subGreeting: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.dark,
  },
  errorCard: {
    margin: theme.spacing(3),
  },
  chip: {
    marginRight: theme.spacing(1),
    borderColor: theme.palette.primary.dark,
  },
  infoTab: {
    marginTop: theme.spacing(2),
  },
  priceChip: {
    fontSize: 13,
    fontWeight: "bolder",
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.lighter,
  },
  productName: {
    marginTop: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2),
  },
}));

const ProductCard = ({ sessionStatus }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState({});

  const [submitDetails, setSubmitDetails] = useState({
    status: false,
    quantity: 0,
    customerSpecification: "",
  });

  const handleAddToCart = (product) => {
    setOpen(true);
    setSubmitDetails({
      status: false,
      quantity: 0,
      customerSpecification: "",
    });
    setSelectedProduct(product);
  };

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <>
      <MuiTypography variant="h2" gutterBottom className={classes.subGreeting}>
        Chef&apos;s Choice
      </MuiTypography>
      <MuiTypography variant="h4" gutterBottom className={classes.subGreeting}>
        Our Products
      </MuiTypography>
      <Divider className={classes.divider} />
      <Grid container spacing={gridSpacing}>
        <GetDisplayProductsQuery>
          {({ getDisplayProducts: { status, productsList } }) =>
            status && productsList?.length > 0 ? (
              productsList.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                  key={product?.productName}
                >
                  <AnimatedSection animate={animate} duration="1.8s">
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
                          image={`/images/${product?.productPicMain}`}
                          alt={product?.productName}
                        />
                        <CardContent>
                          <Chip
                            variant="filled"
                            label={
                              <Typography>
                                Price per {product?.productUnitOfMeasure}:{" "}
                                <strong>Ksh. {product?.productPrice}</strong>
                              </Typography>
                            }
                            className={classes.priceChip}
                          />
                          <Typography
                            gutterBottom
                            variant="h4"
                            component="div"
                            className={classes.productName}
                          >
                            {product?.productName}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product?.productDescription}
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={1}
                            className={classes.infoTab}
                          >
                            <Chip
                              variant="outlined"
                              label={`Sold in: ${product?.productUnitOfMeasure}`}
                              className={classes.chip}
                            />
                            <Chip
                              variant="outlined"
                              label={
                                product?.stockStatus === 1
                                  ? "In Stock"
                                  : "Out of Stock"
                              }
                              className={classes.chip}
                            />
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          onClick={() => handleAddToCart(product)}
                        >
                          ADD TO CART
                        </Button>
                        <Button
                          size="small"
                          color="secondary"
                          variant="outlined"
                        >
                          REVIEWS
                        </Button>
                      </CardActions>
                    </Card>
                  </AnimatedSection>
                </Grid>
              ))
            ) : (
              <AnimatedSection animate={animate} duration="1.0s">
                <NoContentToShow />
              </AnimatedSection>
            )
          }
        </GetDisplayProductsQuery>
      </Grid>
      {sessionStatus ? (
        <AddToCartModal
          open={open}
          setOpen={setOpen}
          selectedProduct={selectedProduct}
          submitDetails={submitDetails}
          setSubmitDetails={setSubmitDetails}
        />
      ) : (
        <SignInModal open={open} setOpen={setOpen} />
      )}
    </>
  );
};

export default ProductCard;
