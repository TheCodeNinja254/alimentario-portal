import React from "react";
import { Grid } from "@material-ui/core";
import { gridSpacing } from "../../store/constant";
import GreetingsCard from "./components/GreetingsCard";
import TitlebarImageList from "../home/components/ImageGallery";
import MenuCard from "../components/ActionCards";
import WeDeliverCard from "../components/ActionCards/WeDeliverCard";

const Dashboard = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <GreetingsCard />
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
            <WeDeliverCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
