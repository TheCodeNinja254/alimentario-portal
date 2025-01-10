import React, { useEffect, useState } from "react";
import { Box, CardActionArea, Grid, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import { makeStyles, useTheme } from "@material-ui/styles";
import { gridSpacing } from "../../store/constant";
import ProductsSection from "../home/components/ProductsSection";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import InformationTab from "../components/InformationTab";
import AnimatedSection from "../../ui-component/AnimatedSection";
import HarvestProductCategorization from "../../components/HarvestProductCategorization";
import ImageCarousel from "../../components/ImageCarousel";

const brandHeader = {
  categoryId: 1,
  title: "",
  categoryName: "Desafio Harvest",
  categoryDisplayPic: "/images/categories/desafioHarvest.png",
  link: "/desafio-harvest",
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
}));

const HarvestHome = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState(0);

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
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <ImageCarousel
                    productFamily="harvest"
                    showNameTitle={false}
                    showPriceChip={false}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box sx={{ width: "40%" }}>
                    <AnimatedSection animate={animate} duration="1.8s">
                      <Card elevation={0}>
                        <CardActionArea>
                          <img
                            src={brandHeader.categoryDisplayPic}
                            alt="Brand Logo"
                            className={classes.brandImages}
                          />
                        </CardActionArea>
                      </Card>
                    </AnimatedSection>
                  </Box>
                  <Box
                    sx={{
                      marginTop: theme.spacing(2),
                      marginBottom: theme.spacing(2),
                    }}
                  >
                    <AnimatedSection animate={animate} duration="1.8s">
                      <Typography variant="h3" paragraph>
                        Indulge in the Finest Steaks and Cheese!
                      </Typography>
                      <Typography variant="body1" paragraph>
                        Savor premium Kenyan steaks and authentic Italian cheese
                        for a perfect blend of bold flavors and unmatched
                        quality.
                      </Typography>
                    </AnimatedSection>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <HarvestProductCategorization
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
                    shouldNavigate={false}
                  />
                  <ProductsSection
                    sessionStatus={status}
                    category={selectedCat}
                    productFamily="harvest"
                    title="Desafio Harvest"
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

export default HarvestHome;
