import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { gridSpacing } from "../../../store/constant";
import PopularCard from "./PopularCard";
import TotalOrderLineChartCard from "./TotalOrderLineChartCard";
import ProductCard from "./ProductCard";
import ImageCarousel from "./ImageCarousel";
import MenuCard from "../../components/MenuCard";
import GreetingsCard from "./GreetingsCard";
import TitlebarImageList from "./ImageGallery";

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
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
            <ProductCard />
          </Grid>
          <Grid item xs={12}>
            <TitlebarImageList />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4} md={8} sm={12} xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <MenuCard />
          </Grid>
          <Grid item xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item xs={12}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
