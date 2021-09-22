import * as React from "react";
import { Container, Grid, Tab, Tabs } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    height: 90,
  },
  menuItems: {
    alignContent: "flex-end",
  },
  Tab: {
    minWidth: 73,
    width: 120,
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
  },
  TabItems: {
    color: theme.palette.white.main,
  },
}));

const SecondaryNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.menuItems}>
        <Grid container spacing={2}>
          <Grid item lg={4} md={4} />
          <Grid item lg={8} md={8}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon label tabs example"
              className={classes.TabItems}
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
            >
              <Tab
                icon={<PhoneIcon />}
                className={classes.Tab}
                label="HOME FIBER"
              />
              <Tab
                icon={<FavoriteIcon />}
                className={classes.Tab}
                label="SECURE NET"
              />
              <Tab
                icon={<PersonPinIcon />}
                className={classes.Tab}
                label="4G WIFI ROUTER"
              />
              <Tab
                icon={<PersonPinIcon />}
                className={classes.Tab}
                label="ENTERTAINMENT"
              />
              <Tab
                icon={<PersonPinIcon />}
                className={classes.Tab}
                label="HOME CCTV"
              />
              <Tab
                icon={<PersonPinIcon />}
                className={classes.Tab}
                label="INSURANCE"
              />
            </Tabs>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default React.memo(SecondaryNavigation);
