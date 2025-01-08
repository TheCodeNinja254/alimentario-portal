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
                  <Box
                    sx={{
                      marginTop: theme.spacing(2),
                      marginBottom: theme.spacing(2),
                    }}
                  >
                    <AnimatedSection animate={animate} duration="1.8s">
                      <Typography variant="body1" paragraph>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.
                      </Typography>
                      <Typography variant="body1" paragraph>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book.
                      </Typography>
                    </AnimatedSection>
                  </Box>
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

export default HarvestHome;
