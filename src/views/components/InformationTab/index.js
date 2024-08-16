import { Grid } from "@material-ui/core";
import React from "react";
import { gridSpacing } from "../../../store/constant";
import MenuCard from "../ActionCards";
import BannerCard from "../ActionCards/BannerCard";
import WeDeliverCard from "../ActionCards/WeDeliverCard";
import PopularCard from "../../home/components/PopularCard";

const InformationTab = ({ showRecentOrders = true }) => {
  const showFeature = false;
  const isLoading = false;

  return (
    <Grid container spacing={gridSpacing}>
      {showRecentOrders && (
        <Grid item xs={12}>
          <MenuCard />
        </Grid>
      )}

      <Grid item xs={12}>
        <BannerCard />
      </Grid>
      <Grid item xs={12}>
        <WeDeliverCard />
      </Grid>
      <Grid item xs={12}>
        {showFeature && <PopularCard isLoading={isLoading} />}
      </Grid>
    </Grid>
  );
};

export default InformationTab;
