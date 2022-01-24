import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, MobileStepper, Paper } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/*
 * Preferred Image dimensions: w=400, h=250 (Ratio 1.4:1)
 * */
const images = [
  {
    label: "50% off on Home Fiber",
    imgPath: "/images/features/promo1.jpg",
  },
  {
    label: "50% off on Home Fiber",
    imgPath: "/images/features/promo2.jpg",
  },
  {
    label: "Welcome Home",
    imgPath: "/images/features/IntroV2.jpg",
  },
  {
    label: "Welcome Home",
    imgPath: "/images/features/Intro.png",
  },
  {
    label: "Stay connected and secure",
    imgPath: "/images/features/SecureNet.png",
  },
  {
    label: "Safety for your connected Home",
    imgPath: "/images/features/HomeCCTV.png",
  },
  {
    label: "The Insured Home",
    imgPath: "/images/features/HomeInsuranceImg.png",
  },
  {
    label: "Smart TV Solutions",
    imgPath: "/images/features/EmaticBox.svg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  carouselImages: {
    // height: 400,
    display: "block",
    maxWidth: 600,
    maxHeight: 400,
    overflow: "hidden",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  tagLine: {
    color: theme.palette.black,
    fontWeight: 700,
    fontSize: 20,
    marginBottom: theme.spacing(2),
    // textDecorationStyle: "solid",
    // textDecoration: "underline",
    // textDecorationThickness: "30%",
    // textDecorationColor: theme.palette.error.main,
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
        <Typography className={classes.tagLine}>
          {images[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                className={classes.carouselImages}
                // sx={{
                //   height: 400,
                //   display: "block",
                //   maxWidth: 400,
                //   maxHeight: 400,
                //   overflow: "hidden",
                //   // width: "100%",
                // }}
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
