import React from "react";
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

const ProductCard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState({});

  const handleAddToCart = (product) => {
    setOpen(true);
    setSelectedProduct(product);
    console.log(product);
  };

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
                          label={`Price per ${product?.productUnitOfMeasure}: ${product?.productPrice}`}
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
                      <Button size="small" color="secondary" variant="outlined">
                        REVIEWS
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <NoContentToShow />
            )
          }
        </GetDisplayProductsQuery>
      </Grid>
      <AddToCartModal
        open={open}
        setOpen={setOpen}
        selectedProduct={selectedProduct}
      />
    </>
  );
};

export default ProductCard;
