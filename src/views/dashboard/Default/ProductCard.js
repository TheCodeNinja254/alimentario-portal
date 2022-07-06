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
import { gridSpacing } from "../../../store/constant";

const products = [
  {
    productName: "Costata Fiorentina Steak",
    imgPath: "/images/Costata_fiorentina.jpg",
    productDescription:
      "Juicy and tasty. Get your delicious steak from Desafio Alimentario today",
  },
  {
    productName: "Crudo Senza Osso Parma Steak",
    imgPath: "/images/Crudo_senza_osso_Parma.jpg",
    productDescription:
      "Juicy and tasty. Get your delicious steak from Desafio Alimentario today",
  },
  {
    productName: "Filetto Di Bovino Steak",
    imgPath: "/images/Filetto_Di_Bovino.jpg",
    productDescription:
      "Juicy and tasty. Get your delicious steak from Desafio Alimentario today",
  },
  {
    productName: "Pancetta stagionata Steak",
    imgPath: "/images/Pancetta_stagionata.jpg",
    productDescription:
      "Juicy and tasty. Get your delicious steak from Desafio Alimentario today",
  },
  {
    productName: "Salame nostrano steak",
    imgPath: "/images/Salame_nostrano.jpg",
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
                  image={product.imgPath}
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
