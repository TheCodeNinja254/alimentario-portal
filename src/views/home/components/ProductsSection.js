import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { Divider } from "@mui/material";
import { gridSpacing } from "../../../store/constant";
import AddToCartModal from "../../components/AddToCartModal";
import SignInModal from "../../components/SignInModal/SignInModal";
import ProductCategorization from "./ProductCategorization";
import ProductCard from "./ProductCard";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import NoContentToShow from "../../components/NoContentToShow";
import GetDisplayProductsQuery from "../../../api/Queries/Products/GetDisplayProducts";

const useStyles = makeStyles((theme) => ({
  root: {},
  subGreeting: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.dark,
  },
  divider: {
    margin: theme.spacing(2),
  },
}));

const ProductsSection = ({ sessionStatus }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState({});
  const [filter, setFilter] = React.useState(0);
  const [productCategory, setProductCategory] = React.useState("");

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
      <ProductCategorization
        setFilter={setFilter}
        setProductCategory={setProductCategory}
      />
      <MuiTypography variant="h4" gutterBottom className={classes.subGreeting}>
        {productCategory === "" ? "Our Products" : `Our ${productCategory}`}
      </MuiTypography>
      <Divider className={classes.divider} />
      <Grid container spacing={gridSpacing}>
        <GetDisplayProductsQuery>
          {({ getDisplayProducts: { status, productsList } }) =>
            status && productsList?.length > 0 ? (
              <ProductCard
                handleAddToCart={handleAddToCart}
                animate={animate}
                productsList={
                  filter === 0
                    ? productsList
                    : productsList.filter(
                        (item) => item.productCategory === filter
                      )
                }
              />
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

export default ProductsSection;
