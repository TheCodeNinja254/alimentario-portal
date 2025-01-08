import {
  Box,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useNavigate } from "react-router";
import Image from "./Image";
import desafioToasted from "../assets/images/desafioToasted.png";
import desafioHarvest from "../assets/images/desafioHarvest.png";
import desafioFoodClub from "../assets/images/desafioFoodClub.png";

const ourBrands = [
  { id: 1, link: "/toasted", image: desafioToasted },
  { id: 1, link: "/desafio-harvest", image: desafioHarvest },
  { id: 1, link: "/desafio-foodclub", image: desafioFoodClub },
];

const useStyles = makeStyles(() => ({
  brandImages: {
    height: 25,
  },
}));

const DesafioBrands = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="left"
      flexWrap="wrap"
      sx={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2) }}
    >
      <Typography
        variant="caption"
        className={classes.menuCaption}
        display="block"
        gutterBottom
      >
        More from Desafio
      </Typography>
      {ourBrands.map((brand) => (
        <CardActionArea onClick={() => navigate(brand.link)}>
          <CardContent>
            <Image
              key={brand.id}
              src={brand.image}
              alt="Brand Logo"
              className={classes.brandImages}
            />
          </CardContent>
        </CardActionArea>
      ))}
    </Box>
  );
};

export default DesafioBrands;
