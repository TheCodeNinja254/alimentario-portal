import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@material-ui/core";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Divider } from "@mui/material";
import { Fastfood } from "@material-ui/icons";
import { gridSpacing } from "../../../store/constant";
import AddToCartModal from "../../components/AddToCartModal";
import SignInModal from "../../components/SignInModal/SignInModal";
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

const _categories = [
  "Sandwiches & Burgers",
  "Sandwiches Extras",
  "Fresh Juices",
  "Dressings",
];

const ProductsSection = ({ defaultCategoryId, sessionStatus, category }) => {
  const classes = useStyles();
  const theme = useTheme();

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
      <Stack direction="row">
        <Fastfood color="primary" sx={{ marginTop: theme.spacing(2) }} />
        <MuiTypography
          variant="h4"
          gutterBottom
          className={classes.subGreeting}
        >
          {category === ""
            ? "Desafio Sandwiches & Burgers"
            : `Desafio ${_categories[category - 1]}`}
        </MuiTypography>
      </Stack>
      <Divider className={classes.divider} />
      <Grid container spacing={gridSpacing}>
        <GetDisplayProductsQuery
          variables={{ productCategory: defaultCategoryId || category }}
        >
          {({ getDisplayProducts: { status, productsList } }) =>
            status && productsList?.length > 0 ? (
              <ProductCard
                handleAddToCart={handleAddToCart}
                animate={animate}
                productsList={productsList}
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
