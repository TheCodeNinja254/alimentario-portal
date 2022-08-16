import React from "react";

// material-ui
import { Grid } from "@material-ui/core";
import { gridSpacing } from "../../store/constant";
import GreetingsCard from "./components/GreetingsCard";
import TitlebarImageList from "../dashboard/Default/ImageGallery";
import MenuCard from "../components/MenuCard";

// project imports

// ===========================|| DEFAULT GALLERY ||=========================== //

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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
