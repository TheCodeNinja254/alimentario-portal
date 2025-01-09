import * as React from "react";
import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AnimatedSection from "../ui-component/AnimatedSection";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {},
  carouselImages: {
    height: 250,
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
  paper: {
    display: "flex",
    alignItems: "center",
    height: 50,
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.background.default,
  },
}));

const AppCarousel = ({ imageList }) => {
  const classes = useStyles();
  const theme = useTheme();
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
    <AnimatedSection animate={animate} duration="1.0s">
      <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={8000}
        >
          {imageList.map((step, index) => (
            <div key={step.id} style={{ position: "relative", height: "100%" }}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  {/* Image Container */}
                  <Box
                    component="img"
                    className={classes.carouselImages}
                    src={step.image}
                    alt={step.title}
                    sx={{ width: "90%", height: "auto" }}
                  />
                </>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </AnimatedSection>
  );
};

export default AppCarousel;
