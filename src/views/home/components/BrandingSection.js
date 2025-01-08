import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Box, CardActionArea, Grid, Typography } from "@material-ui/core";
import { makeStyles, styled, useTheme } from "@material-ui/styles";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { useNavigate } from "react-router";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import PromotionalModal from "../../components/PromotionalModal";

const productCategories = [
  {
    categoryId: 1,
    title: "",
    categoryName: "Desafio Toasted",
    categoryDisplayPic: "/images/categories/desafioToasted.png",
    link: "/desafio-toasted",
    type: "navigational",
  },
  {
    categoryId: 2,
    title: "",
    categoryName: "",
    categoryDisplayPic: "/images/categories/horseRacing.png",
    link: "",
    type: "promotional",
  },
  {
    categoryId: 3,
    title: "",
    categoryName: "Desafio Harvest",
    categoryDisplayPic: "/images/categories/desafioHarvest.png",
    link: "/desafio-harvest",
    type: "navigational",
  },
  {
    categoryId: 4,
    title: "",
    categoryName: "Desafio Food Club",
    categoryDisplayPic: "/images/categories/desafioFoodClub.png",
    link: "/desafio-foodclub",
    type: "navigational",
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  categoryCardText: {
    marginTop: theme.spacing(0),
    marginRight: theme.spacing(2),
    color: theme.palette.common.black,
    fontSize: 25,
    fontWeight: 700,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: theme.spacing(0),
      fontSize: 25,
    },
  },
  branding: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: theme.palette.common.black,
    fontSize: 10,
    fontWeight: 300,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: theme.spacing(1),
      fontSize: 10,
      fontWeight: 300,
    },
  },
}));

export const CategoryCard = styled(Card)(({ img }) => ({
  backgroundImage: `url(${img})`,
  height: 130,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 10,
}));

const BrandingSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleCardClick = (_type, _link) => {
    if (_type === "promotional") setOpen(true);

    if (_type === "navigational") navigate(_link);
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <Box sx={{ marginTop: theme.spacing(2) }}>
      <Box>
        <AutoPlaySwipeableViews
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={8000}
        >
          {productCategories.map((cat) => (
            <Grid container spacing={2} key={cat.categoryId}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={4}
                id={cat.categoryId}
                key={cat.categoryId}
              >
                <AnimatedSection animate={animate} duration="1.8s">
                  <Card elevation={0}>
                    <CardActionArea
                      onClick={() => handleCardClick(cat.type, cat.link)}
                    >
                      <CategoryCard img={cat.categoryDisplayPic}>
                        <Typography className={classes.branding}>
                          {cat.title}
                        </Typography>
                      </CategoryCard>
                    </CardActionArea>
                  </Card>
                </AnimatedSection>
              </Grid>
            </Grid>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <PromotionalModal open={open} setOpen={setOpen} />
    </Box>
  );
};

export default BrandingSection;
