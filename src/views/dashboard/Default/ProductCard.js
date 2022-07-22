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
import { gridSpacing } from "../../../store/constant";
import frownFace from "../../../assets/images/Graphics/frown.jpg";
import GetDisplayProductsQuery from "../../../api/Queries/Products/GetDisplayProducts";

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
}));

const ProductCard = () => {
  const classes = useStyles();

  return (
    <>
      <MuiTypography variant="h2" gutterBottom className={classes.subGreeting}>
        Chef&apos;s Choice
      </MuiTypography>
      <Grid container spacing={gridSpacing}>
        <GetDisplayProductsQuery>
          {({ getDisplayProducts: { status, productsList } }) =>
            status && productsList?.length > 0 ? (
              productsList.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  key={product?.productName}
                >
                  <Card sx={{ maxWidth: 345 }}>
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
                      <Button size="small" color="primary" variant="contained">
                        ORDER NOW
                      </Button>
                      <Button size="small" color="secondary" variant="outlined">
                        REVIEWS
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <Card sx={{ maxWidth: 345 }} className={classes.errorCard}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={frownFace}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Oops! Something went wrong
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          We are unable to show any products right here, right
                          now. Please return soon as we work to resolve this.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            )
          }
        </GetDisplayProductsQuery>
      </Grid>
    </>
  );
};

export default ProductCard;
