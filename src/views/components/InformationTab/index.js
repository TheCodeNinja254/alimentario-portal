import { Grid, Box } from "@material-ui/core";
import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { gridSpacing } from "../../../store/constant";
import MenuCard from "../ActionCards";
import BannerCard from "../ActionCards/BannerCard";
import WeDeliverCard from "../ActionCards/WeDeliverCard";
import PopularCard from "../../home/components/PopularCard";
import BrandsQuickLinks from "../../../components/BrandsQuickLinks";

const InformationTab = ({ showRecentOrders = true }) => {
  const showFeature = false;
  const isLoading = false;
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, paddingX: theme.spacing(2) }}>
      <Grid container spacing={gridSpacing}>
        <BrandsQuickLinks />
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
    </Box>
  );
};

export default InformationTab;
