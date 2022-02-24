import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, MobileStepper, Paper } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/*
 * Preferred Image dimensions: w=400, h=250 (Ratio 1.4:1)
 * */

const images = [
  // {
  //   id: 1,
  //   label: "50% off on Home Fiber",
  //   imgPath: "/images/features/promo1.jpg",
  //   action: "Get it now",
  // },
  // {
  //   id: 2,
  //   label: "50% off on Home Fiber",
  //   imgPath: "/images/features/promo2.jpg",
  //   action: "Get it now",
  // },
  {
    id: 1,
    label: "Home Plus",
    imgPath: "/images/features/homePlusBanner.jpg",
    action: "Get connected",
  },
  {
    id: 2,
    label: "Welcome Home",
    imgPath: "/images/features/IntroV2.jpg",
    action: "Get connected",
  },
  {
    id: 3,
    label: "Welcome Home",
    imgPath: "/images/features/Intro.png",
    action: "Get connected",
  },
  {
    id: 4,
    label: "Stay connected and secure",
    imgPath: "/images/features/SecureNet.png",
    action: "Get SecureNet",
  },
  {
    id: 5,
    label: "Safety for your connected Home",
    imgPath: "/images/features/HomeCCTV.png",
    action: "Get Home Surveillance",
  },
  {
    id: 6,
    label: "The Insured Home",
    imgPath: "/images/features/HomeInsuranceImg.png",
    action: "Get Home Insurance",
  },
  {
    id: 7,
    label: "Smart TV Solutions",
    imgPath: "/images/features/EmaticBox.svg",
    action: "See Smart TV Options",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  carouselImages: {
    height: 428,
    display: "block",
    maxWidth: 600,
    maxHeight: 428,
    overflow: "hidden",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      height: 250,
    },
  },
  tagLine: {
    color: theme.palette.black,
    fontWeight: 700,
    fontSize: 20,
    marginBottom: theme.spacing(2),
    maxWidth: 350,
    overflow: "hidden",
  },
}));

const SwipeableTextMobileStepper = () => {
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

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Grid container>
          <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
            <Typography className={classes.tagLine}>
              {images[activeStep].label}
            </Typography>
          </Grid>
          {/* <Grid item lg={5} xl={5} md={5} sm={5} xs={5}> */}
          {/*  <Button size="small" variant="outlined"> */}
          {/*    {images[activeStep].action} */}
          {/*    <KeyboardArrowRight /> */}
          {/*  </Button> */}
          {/* </Grid> */}
        </Grid>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000}
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
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            variant="outlined"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
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
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default SwipeableTextMobileStepper;
