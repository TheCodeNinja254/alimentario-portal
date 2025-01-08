import React, { useEffect, useState } from "react";
import { CardActionArea, Grid, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/styles";
import { gridSpacing } from "../../store/constant";
import ProductsSection from "../home/components/ProductsSection";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import ProductCategorization from "../home/components/ProductCategorization";
import InformationTab from "../components/InformationTab";
import AnimatedSection from "../../ui-component/AnimatedSection";
import { CategoryCard } from "../home/components/BrandingSection";

const brandHeader = {
  categoryId: 1,
  title: "",
  categoryName: "Desafio Toasted",
  categoryDisplayPic: "/images/categories/desafioToasted.png",
  link: "/desafio-toasted",
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

const ToastedHome = () => {
  const classes = useStyles();
  const location = useLocation();
  const [, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [selectedCat, setSelectedCat] = useState(0);

  useEffect(() => {
    if (location?.state?.newInvite) {
      setFirstName(location?.state?.firstName);
      setOpen(true);
    }

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
                  <AnimatedSection animate={animate} duration="1.8s">
                    <Card elevation={0}>
                      <CardActionArea>
                        <CategoryCard img={brandHeader.categoryDisplayPic}>
                          <Typography className={classes.branding}>
                            {brandHeader.title}
                          </Typography>
                        </CategoryCard>
                      </CardActionArea>
                    </Card>
                  </AnimatedSection>
                  <ProductCategorization
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
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
          <WelcomeModal open={open} setOpen={setOpen} firstName={firstName} />
        </>
      )}
    </GetSignedInCustomerQuery>
  );
};

export default ToastedHome;
