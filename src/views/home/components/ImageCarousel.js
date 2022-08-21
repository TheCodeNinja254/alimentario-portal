import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@material-ui/core/styles";
import { Box, MobileStepper, Paper } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import AnimatedSection from "../../../ui-component/AnimatedSection";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/*
 * Preferred Image dimensions: w=400, h=250 (Ratio 1.4:1)
 * */

const images = [
  {
    id: 1,
    label: "Costata Fiorentina Steak",
    imgPath: "/images/Costata_fiorentina.jpg",
    action: "Buy Now",
  },
  {
    id: 2,
    label: "Crudo Senza Osso Parma Steak",
    imgPath: "/images/Crudo_senza_osso_Parma.jpg",
    action: "Buy Now",
  },
  {
    id: 3,
    label: "Filetto Di Bovino Steak",
    imgPath: "/images/Filetto_Di_Bovino.jpg",
    action: "Buy Now",
  },
  {
    id: 4,
    label: "Pancetta stagionata Steak",
    imgPath: "/images/Pancetta_stagionata.jpg",
    action: "Buy Now",
  },
  {
    id: 5,
    label: "Salame nostrano steak",
    imgPath: "/images/Salame_nostrano.jpg",
    action: "Buy Now",
  },
  // {
  //   id: 6,
  //   label: "Preparing the table",
  //   imgPath: "/images/gallery/1.jpg",
  //   action: "Buy Now",
  // },
  // {
  //   id: 7,
  //   label: "Preparing the table",
  //   imgPath: "/images/gallery/2.jpg",
  //   action: "Buy Now",
  // },
  {
    id: 8,
    label: "Preparing the table",
    imgPath: "/images/gallery/3.jpg",
    action: "Buy Now",
  },
  // {
  //   id: 9,
  //   label: "Preparing the table",
  //   imgPath: "/images/gallery/4.jpg",
  //   action: "Buy Now",
  // },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  carouselImages: {
    height: 338,
    display: "block",
    maxWidth: "100%",
    maxHeight: 338,
    overflow: "hidden",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      height: 250,
    },
  },
  tagLine: {
    color: theme.palette.primary.dark,
    fontWeight: 700,
    fontSize: 20,
    marginBottom: theme.spacing(2),
    maxWidth: 350,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  paper: {
    display: "flex",
    alignItems: "center",
    height: 50,
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.primary.light,
  },
}));

const ImageCarousel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="1.0s">
      <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
        <Paper square elevation={0} className={classes.paper}>
          <Grid container>
            <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
              <Typography className={classes.tagLine}>
                {images[activeStep].label}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={6000}
        >
          {images.map((step, index) => (
            <div key={step.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  className={classes.carouselImages}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          className={classes.paper}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              variant=""
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              variant=""
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Box>
    </AnimatedSection>
  );
};

export default ImageCarousel;
