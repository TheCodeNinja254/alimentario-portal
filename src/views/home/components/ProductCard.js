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
import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import AnimatedSection from "../../../ui-component/AnimatedSection";

const useStyles = makeStyles((theme) => ({
  root: {},
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
}));

const ProductCard = ({ handleAddToCart, animate, productsList }) => {
  const classes = useStyles();

  return productsList.map((product) => (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={product?.productName}>
      <AnimatedSection animate={animate} duration="1.0s">
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
              <Stack direction="row" spacing={1} className={classes.infoTab}>
                <Chip
                  variant="outlined"
                  label={`Sold in: ${product?.productUnitOfMeasure}`}
                  className={classes.chip}
                />
                <Chip
                  variant="outlined"
                  label={
                    product?.stockStatus === 1 ? "In Stock" : "Out of Stock"
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
      </AnimatedSection>
    </Grid>
  ));
};

ProductCard.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  animate: PropTypes.bool.isRequired,
  productsList: PropTypes.array.isRequired,
};

export default ProductCard;
