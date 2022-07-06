import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import steak from "../../../assets/images/steak/steak.jpg";
import { gridSpacing } from "../../../store/constant";

const products = [
  {
    productName: "Steak 1",
    productDescription:
      "Juicy and tasty. Get your delicious steak from Desafio Alimentario today",
  },
  {
    productName: "Steak 2",
    productDescription:
      "Juicy and tasty. Get your delicious steak from Desafio Alimentario today",
  },
  {
    productName: "Steak 3",
    productDescription:
      "Juicy and tasty. Get your delicious steak from Desafio Alimentario today",
  },
  {
    productName: "Steak 4",
    productDescription:
      "Juicy and tasty. Get your delicious steak from Desafio Alimentario today",
  },
  {
    productName: "Steak 5",
    productDescription:
      "Juicy and tasty. Get your delicious steak from Desafio Alimentario today",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  subGreeting: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.dark,
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
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            key={product.productName}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={steak}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.productDescription}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  BUY NOW
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductCard;
