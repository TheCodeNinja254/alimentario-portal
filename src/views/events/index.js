import React, { useEffect, useState } from "react";
import { Box, CardActionArea, Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import { makeStyles, useTheme } from "@material-ui/styles";
import ProductsSection from "../home/components/ProductsSection";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import InformationTab from "../components/InformationTab";
import AnimatedSection from "../../ui-component/AnimatedSection";
import AppCarousel from "../../components/AppCarousel";
import EventsProductCategorization from "../../components/EventsProductCategorization";

const brandHeader = {
  categoryId: 1,
  title: "",
  categoryName: "Desafio & Ngong Racecourse",
  categoryDisplayPic: "/images/categories/horseRacingIcon.png",
  link: "/horse-racing",
  type: "navigational",
};

const carouselImages = [
  {
    id: 1,
    image: "/images/promotions/horseRacingTwelve.png",
    title: "First",
  },
  {
    id: 2,
    image: "/images/promotions/horseRacesPast.png",
    title: "First",
  },
  {
    id: 3,
    image: "/images/promotions/horseRacingOld.png",
    title: "First",
  },
  {
    id: 4,
    image: "/images/promotions/afterParty.png",
    title: "First",
  },
  {
    id: 5,
    image: "/images/promotions/food1.png",
    title: "First",
  },
  {
    id: 6,
    image: "/images/promotions/food2.png",
    title: "First",
  },
  {
    id: 7,
    image: "/images/promotions/burger.png",
    title: "First",
  },
];

const useStyles = makeStyles((theme) => ({
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
  brandImages: {
    height: 40,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
  },
  posterImage: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
}));

const Events = () => {
  const classes = useStyles();
  const [, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    setLoading(false);
  }, []);

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <GetSignedInCustomerQuery>
      {({ getSignedInCustomer: { status } }) => (
        <>
          <Grid container>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box sx={{ marginTop: theme.spacing(6) }}>
                        <AppCarousel imageList={carouselImages} />
                      </Box>
                    </Grid>
                    <Grid item xs={11} sm={11} md={6}>
                      <AnimatedSection animate={animate} duration="2.0s">
                        <Box sx={{ width: "40%", marginTop: theme.spacing(6) }}>
                          <Card elevation={0}>
                            <CardActionArea>
                              <img
                                src={brandHeader.categoryDisplayPic}
                                alt="Brand Logo"
                                className={classes.brandImages}
                              />
                            </CardActionArea>
                          </Card>
                        </Box>
                        <Box sx={{ marginTop: theme.spacing(2) }}>
                          <Typography variant="h3" paragraph>
                            The Sport of Kings is back, and we got you!
                          </Typography>
                          <Typography variant="body1" paragraph>
                            For all your Steak from the grill, starters,
                            sandwiches, burgers, Wine and more.
                          </Typography>
                          <Typography variant="h4" paragraph>
                            <strong>Pre-book here</strong> or{" "}
                            <strong>visit our stand</strong>
                          </Typography>
                        </Box>
                      </AnimatedSection>
                    </Grid>
                  </Grid>
                  <EventsProductCategorization
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
                    shouldNavigate={false}
                  />
                  <ProductsSection
                    sessionStatus={status}
                    category={selectedCat}
                    title="Racecourse Special"
                    productFamily="racecourse"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <InformationTab />
            </Grid>
          </Grid>
        </>
      )}
    </GetSignedInCustomerQuery>
  );
};

export default Events;
