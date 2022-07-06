import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@material-ui/core/styles";
import { Box, Button, MobileStepper, Paper } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/*
 * Preferred Image dimensions: w=400, h=250 (Ratio 1.4:1)
 * */

const images = [
  {
    id: 1,
    label: "Mouth Watering steak: Wagyu",
    imgPath: "/images/steak.jpg",
    action: "Get connected",
  },
  {
    id: 2,
    label: "Mouth Watering steak: Wagyu",
    imgPath: "/images/steak.jpg",
    action: "Get connected",
  },
  {
    id: 3,
    label: "Mouth Watering steak: Wagyu",
    imgPath: "/images/steak.jpg",
    action: "Get connected",
  },
  {
    id: 4,
    label: "Mouth Watering steak: Wagyu",
    imgPath: "/images/steak.jpg",
    action: "Get SecureNet",
  },
  {
    id: 5,
    label: "Mouth Watering steak: Wagyu",
    imgPath: "/images/steak.jpg",
    action: "Get Home Surveillance",
  },
  {
    id: 6,
    label: "Mouth Watering steak: Wagyu",
    imgPath: "/images/steak.jpg",
    action: "Get Home Insurance",
  },
  {
    id: 7,
    label: "Mouth Watering steak: Wagyu",
    imgPath: "/images/steak.jpg",
    action: "See Smart TV Options",
  },
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
    color: theme.palette.secondary.dark,
    fontWeight: 700,
    fontSize: 20,
    marginBottom: theme.spacing(2),
    maxWidth: 350,
    overflow: "hidden",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    height: 50,
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.secondary.light,
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
        interval={5000}
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
