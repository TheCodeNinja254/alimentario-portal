import React, { useEffect, useState } from "react";
import { Box, CardActionArea, Grid } from "@material-ui/core";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/styles";
import { gridSpacing } from "../../store/constant";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import ProductCategorization from "../home/components/ProductCategorization";
import InformationTab from "../components/InformationTab";
import AnimatedSection from "../../ui-component/AnimatedSection";
import Image from "../../components/Image";
import comingSoon from "../../assets/images/comingSoon.png";

const brandHeader = {
  categoryId: 1,
  title: "",
  categoryName: "Desafio Food Club",
  categoryDisplayPic: "/images/categories/desafioFoodClub.png",
  link: "/desafio-foodclub",
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

const Events = () => {
  const classes = useStyles();
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
                <Grid item xs={12}>
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
                  <ProductCategorization
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
                    shouldNavigate={false}
                  />
                  <Box>
                    <Image src={comingSoon} alt="coming soon" />
                  </Box>
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
