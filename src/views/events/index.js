import React, { useEffect, useState } from "react";
import { Box, CardActionArea, Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import { makeStyles, useTheme } from "@material-ui/styles";
import { gridSpacing } from "../../store/constant";
import ProductsSection from "../home/components/ProductsSection";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import ProductCategorization from "../home/components/ProductCategorization";
import InformationTab from "../components/InformationTab";
import AnimatedSection from "../../ui-component/AnimatedSection";
import Image from "../../components/Image";
import horseRacingPoster from "../../assets/images/horseRacingTwelve.png";

const brandHeader = {
  categoryId: 1,
  title: "",
  categoryName: "Desafio & Ngong Racecourse",
  categoryDisplayPic: "/images/categories/horseRacingIcon.png",
  link: "/horse-racing",
  type: "navigational",
};

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
      height: 400,
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
          <Grid container spacing={gridSpacing}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} sm={12} md={6}>
                      <AnimatedSection animate={animate} duration="1.8s">
                        <Image
                          src={horseRacingPoster}
                          className={classes.posterImage}
                        />
                      </AnimatedSection>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
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
                        <Typography variant="body1" paragraph>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </Typography>
                        <Typography variant="body1" paragraph>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book.
                        </Typography>
                      </AnimatedSection>
                    </Grid>
                  </Grid>
                  <ProductCategorization
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
                    shouldNavigate={false}
                  />
                  <ProductsSection
                    sessionStatus={status}
                    category={selectedCat}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={8} sm={12} xs={12}>
              <InformationTab />
            </Grid>
          </Grid>
        </>
      )}
    </GetSignedInCustomerQuery>
  );
};

export default Events;
