import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Star } from "@material-ui/icons";
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
  button: {
    borderRadius: 10,
    marginTop: theme.spacing(2),
  },
}));

const ProductCard = ({ handleAddToCart, animate, productsList }) => {
  const classes = useStyles();
  const theme = useTheme();

  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const show = false;

  return productsList.map((product) => (
    <Grid item xs={6} sm={6} md={6} lg={4} xl={3} key={product?.productName}>
      <AnimatedSection animate={animate} duration="1.0s">
        <Card>
          <CardActionArea onClick={() => handleAddToCart(product)}>
            <CardMedia
              component="img"
              height="200"
              image={`/images/${product?.productPicMain}`}
              alt={product?.productName}
            />
            <CardContent>
              {product?.productPrice > 0 && (
                <Chip
                  variant="filled"
                  label={
                    <Typography>
                      Ksh. <strong>{product?.productPrice}</strong>
                    </Typography>
                  }
                  className={classes.priceChip}
                />
              )}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={classes.productName}
              >
                {product?.productName}
              </Typography>
              <Typography
                color="text.secondary"
                variant="caption"
                className="typography-two-lines"
              >
                {product?.productDescription}
              </Typography>
              {show && (
                <Stack direction="row" spacing={1} className={classes.infoTab}>
                  <Chip
                    variant="filled"
                    color="primary"
                    label={
                      <Stack direction="row" spacing={1}>
                        <Typography sx={{ marginTop: theme.spacing(0.5) }}>
                          <strong>New</strong>
                        </Typography>
                        <Star />
                      </Stack>
                    }
                    className={classes.chip}
                  />
                  <Chip
                    variant="outlined"
                    label={
                      product?.stockStatus === 1 ? "Available" : "Out of Stock"
                    }
                    className={classes.chip}
                  />
                </Stack>
              )}
              <Button
                size="small"
                className={classes.button}
                disableElevation
                color="primary"
                variant="contained"
                onClick={() => handleAddToCart(product)}
              >
                {product?.productPrice === 0 ? "ADD" : "ADD TO CART"}
              </Button>
              {/* <Button size="small" color="secondary" variant="outlined"> */}
              {/*  REVIEWS */}
              {/* </Button> */}
            </CardContent>
          </CardActionArea>
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
