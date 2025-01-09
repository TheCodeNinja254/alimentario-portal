import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import AnimatedSection from "../../../ui-component/AnimatedSection";

const useStyles = makeStyles((theme) => ({
  root: {},
  chip: {
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
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
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  productName: {
    marginTop: theme.spacing(2),
  },
  button: {
    borderRadius: 10,
    fontSize: 10,
    marginTop: theme.spacing(2),
  },
  scrollText: {
    display: "inline-block",
    maxWidth: "100%", // Adjust based on parent container width
    whiteSpace: "nowrap",
    // overflow: "hidden",
    // textOverflow: "ellipsis", // Optional: For a graceful fade effect
    animation: "$scroll 10s linear infinite",
  },
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  },
}));

const ProductCard = ({
  handleAddToCart,
  animate,
  productsList,
  productFamily = "normal",
}) => {
  const classes = useStyles();

  const show = true;

  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const charactersBeforeSlide = matchDownSM ? 15 : 25;

  const submitButtonText =
    productFamily === "racecourse" ? "PRE-ORDER" : "ADD TO CART";

  return productsList.map((product) => (
    <Grid item xs={6} sm={6} md={6} lg={4} xl={3} key={product?.productName}>
      <AnimatedSection animate={animate} duration="1.0s">
        <Card elevation={0}>
          <CardActionArea onClick={() => handleAddToCart(product)}>
            <CardMedia
              component="img"
              height="200"
              image={`/images/${product?.productPicMain}`}
              alt={product?.productName}
            />
            <CardContent>
              <Box display="flex" justifyContent="left" flexWrap="wrap">
                {product?.productPrice > 0 ? (
                  <Chip
                    variant="outlined"
                    color="primary"
                    size="small"
                    label={
                      <Typography variant="caption">
                        Ksh. <strong>{product?.productPrice}</strong>
                      </Typography>
                    }
                    className={classes.priceChip}
                  />
                ) : (
                  <Chip
                    variant="outlined"
                    color="primary"
                    size="small"
                    label={<Typography variant="caption">Extra</Typography>}
                    className={classes.priceChip}
                  />
                )}
                {show &&
                  product?.tag &&
                  product?.tag !== "" &&
                  product.tag
                    .split(",")
                    .map((tag) => (
                      <Chip
                        key={tag}
                        variant="default"
                        color="primary"
                        size="small"
                        label={
                          <Typography variant="caption">
                            {tag.trim()}
                          </Typography>
                        }
                        className={classes.chip}
                      />
                    ))}
              </Box>
              <Typography
                gutterBottom
                variant="body2"
                className={`${classes.productName} ${
                  product?.productName?.length > charactersBeforeSlide
                    ? classes.scrollText
                    : ""
                }`}
              >
                {product?.productName?.toUpperCase()}
              </Typography>
              <Typography
                color="text.secondary"
                variant="caption"
                className="typography-two-lines"
              >
                {product?.productPrice <= 0
                  ? "An great addition to any meal."
                  : product?.productDescription}
              </Typography>
              <Button
                size="small"
                className={classes.button}
                disableElevation
                color="primary"
                variant="contained"
                onClick={() => handleAddToCart(product)}
              >
                {product?.productPrice === 0 ? "ADD" : submitButtonText}
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
