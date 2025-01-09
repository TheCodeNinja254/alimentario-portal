import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router";
import { makeStyles, useTheme } from "@material-ui/styles";
import Image from "./Image";
import desafioToasted from "../assets/images/desafioToasted.png";
import desafioHarvest from "../assets/images/desafioHarvest.png";
import desafioFoodClub from "../assets/images/desafioFoodClub.png";
import horseRacing from "../assets/images/horseRacingAlternative.png";

const ourBrands = [
  { id: 1, link: "/toasted", image: desafioToasted },
  { id: 2, link: "/desafio-harvest", image: desafioHarvest },
  { id: 3, link: "/desafio-foodclub", image: desafioFoodClub },
  { id: 4, link: "/horse-racing", image: horseRacing },
];

const useStyles = makeStyles((theme) => ({
  brandImages: {
    height: 30,
  },
  menuCaption: {
    color: theme.palette.primary.primary,
    fontWeight: 700,
  },
  brandCard: {
    background: theme.palette.primary.light,
    marginTop: theme.spacing(2),
    marginBottom: "16px",
    overflow: "hidden",
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "19px solid ",
      borderColor: theme.palette.primary.main,
      borderRadius: "50%",
      top: "-95px",
      right: "-150px",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "200px",
      height: "200px",
      border: "3px solid ",
      borderColor: theme.palette.primary.main,
      borderRadius: "50%",
      top: "-135px",
      right: "-70px",
    },
  },
}));

const BrandsQuickLinks = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(() => theme.breakpoints.down("sm"));

  return (
    <Container>
      <Box
        sx={{
          marginRight: theme.spacing(isMobile ? 0 : 2),
          width: "100%",
          marginTop: theme.spacing(isMobile ? 0 : 6),
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card className={classes.brandCard} elevation={0}>
              <CardContent>
                <Typography
                  variant="h3"
                  className={classes.menuCaption}
                  display="block"
                  gutterBottom
                >
                  More from Desafio
                </Typography>
                {ourBrands.map((brand) => (
                  <CardActionArea
                    onClick={() => navigate(brand.link)}
                    key={brand.id}
                  >
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
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BrandsQuickLinks;
