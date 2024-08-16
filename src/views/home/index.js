import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { gridSpacing } from "../../store/constant";
import ProductsSection from "./components/ProductsSection";
import ImageCarousel from "./components/ImageCarousel";
import GreetingsCard from "./components/GreetingsCard";
import TitlebarImageList from "./components/ImageGallery";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import BrandingSection from "./components/BrandingSection";
import ProductCategorization from "./components/ProductCategorization";
import InformationTab from "../components/InformationTab";

const useStyles = makeStyles((theme) => ({
  root: {},
  subGreeting: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.dark,
  },
  divider: {
    margin: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const location = useLocation();
  const [, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [selectedCat, setSelectedCat] = useState(1);

  useEffect(() => {
    if (location?.state?.newInvite) {
      setFirstName(location?.state?.firstName);
      setOpen(true);
    }

    setLoading(false);
  }, []);

  return (
    <GetSignedInCustomerQuery>
      {({ getSignedInCustomer: { status } }) => (
        <>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <ImageCarousel />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <GreetingsCard />
                </Grid>
                <Grid item xs={12}>
                  <MuiTypography
                    variant="h2"
                    gutterBottom
                    className={classes.subGreeting}
                  >
                    Chef&apos;s Choice
                  </MuiTypography>
                  <BrandingSection />
                  <ProductCategorization
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
                  />
                  <ProductsSection
                    sessionStatus={status}
                    category={selectedCat}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TitlebarImageList />
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

export default Dashboard;
