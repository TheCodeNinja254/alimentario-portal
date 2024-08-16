import * as React from "react";
import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@material-ui/core/styles";
import { Box, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import NoContentToShow from "../../components/NoContentToShow";
import GetDisplayProductsQuery from "../../../api/Queries/Products/GetDisplayProducts";

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
  const [, setMaxSteps] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };
  //
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

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
        <GetDisplayProductsQuery variables={{ productCategory: 0 }}>
          {({ getDisplayProducts: { status, productsList } }) => {
            setMaxSteps(productsList.length);

            return status && productsList?.length > 0 ? (
              <>
                <Paper square elevation={0} className={classes.paper}>
                  <Grid container>
                    <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                      <Typography className={classes.tagLine}>
                        {productsList[activeStep].productName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                  interval={4000}
                >
                  {productsList.map((step, index) => (
                    <div key={step.id}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <Box
                          component="img"
                          className={classes.carouselImages}
                          src={`/images/${step?.productPicMain}`}
                          alt={step.productName}
                        />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
              </>
            ) : (
              <AnimatedSection animate={animate} duration="1.0s">
                <NoContentToShow />
              </AnimatedSection>
            );
          }}
        </GetDisplayProductsQuery>
        {/* <MobileStepper */}
        {/*  steps={maxSteps} */}
        {/*  className={classes.paper} */}
        {/*  position="static" */}
        {/*  activeStep={activeStep} */}
        {/*  nextButton={ */}
        {/*    <Button */}
        {/*      size="small" */}
        {/*      variant="" */}
        {/*      onClick={handleNext} */}
        {/*      disabled={activeStep === maxSteps - 1} */}
        {/*    > */}
        {/*      {theme.direction === "rtl" ? ( */}
        {/*        <KeyboardArrowLeft /> */}
        {/*      ) : ( */}
        {/*        <KeyboardArrowRight /> */}
        {/*      )} */}
        {/*    </Button> */}
        {/*  } */}
        {/*  backButton={ */}
        {/*    <Button */}
        {/*      size="small" */}
        {/*      variant="" */}
        {/*      onClick={handleBack} */}
        {/*      disabled={activeStep === 0} */}
        {/*    > */}
        {/*      {theme.direction === "rtl" ? ( */}
        {/*        <KeyboardArrowRight /> */}
        {/*      ) : ( */}
        {/*        <KeyboardArrowLeft /> */}
        {/*      )} */}
        {/*    </Button> */}
        {/*  } */}
        {/* /> */}
      </Box>
    </AnimatedSection>
  );
};

export default ImageCarousel;
