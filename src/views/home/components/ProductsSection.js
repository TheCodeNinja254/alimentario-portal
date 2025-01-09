import React, { useEffect, useState } from "react";
import { Grid, Stack, Box, Divider } from "@mui/material";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Fastfood } from "@material-ui/icons";
import { gridSpacing } from "../../../store/constant";
import AddToCartModal from "../../components/AddToCartModal";
import SignInModal from "../../components/SignInModal/SignInModal";
import ProductCard from "./ProductCard";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import NoContentToShow from "../../components/NoContentToShow";
import GetDisplayProductsQuery from "../../../api/Queries/Products/GetDisplayProducts";
import PreorderAlert from "../../../components/PreorderAlert";

const useStyles = makeStyles((theme) => ({
  root: {},
  subGreeting: {
    marginTop: theme.spacing(0),
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
  // "Fresh Juices",
  "",
  "Dressings",
  "",
  "",
  "",
  "Wine",
  "Coffee & Tea",
];

const ProductsSection = ({
  defaultCategoryId,
  sessionStatus,
  category,
  title,
  productFamily = "toasted",
}) => {
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
      setAnimate(true);
    }, 1);
  }, [animate]);

  const displayName = _categories[category - 1] ?? "Special";

  return (
    <>
      <Stack direction="row" sx={{ marginBottom: theme.spacing(1) }}>
        <Fastfood color="primary" sx={{ marginTop: theme.spacing(2) }} />
        {title ? (
          <MuiTypography
            variant="h4"
            gutterBottom
            className={classes.subGreeting}
          >
            {title}
          </MuiTypography>
        ) : (
          <MuiTypography
            variant="h4"
            gutterBottom
            className={classes.subGreeting}
          >
            {category ? `Desafio ${displayName}` : "Toasted by Desafio"}
          </MuiTypography>
        )}
      </Stack>
      <Divider className={classes.divider} />
      <Box>
        <PreorderAlert
          sx={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
        />
      </Box>
      <Grid
        container
        spacing={gridSpacing}
        sx={{ marginTop: theme.spacing(3) }}
      >
        <GetDisplayProductsQuery
          variables={{
            productCategory: defaultCategoryId || category,
            productFamily,
          }}
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
