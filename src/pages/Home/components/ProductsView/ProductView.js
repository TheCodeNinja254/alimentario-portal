import React from "react";
import { Box, Button, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import HomeProducts from "./HomeProducts";
import EnterpriseProducts from "./EnterpriseProducts";
import HomePlusPackages from "./HomePusProducts";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    "& span": {
      fontSize: 20,
    },
  },
  pageHeading: {
    marginTop: theme.spacing(6),
    height: 70,
    fontWeight: 800,
    textAlign: "center",
  },
  exploreHomeButton: {
    marginRight: theme.spacing(1),
  },
  getConnectedButton: {
    marginTop: theme.spacing(8),
  },
  exploreButtons: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
}));

const ProductView = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        className={classes.exploreButtons}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="scrollable"
          scrollButtons="on"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          <Tab
            label={
              <Button
                variant="contained"
                color={value === 0 ? "primary" : "default"}
                className={classes.exploreHomeButton}
              >
                Explore Home
              </Button>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Button
                variant="contained"
                color={value === 1 ? "primary" : "default"}
                className={classes.exploreHomeButton}
              >
                Explore Home Plus
              </Button>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Button
                variant="contained"
                color={value === 2 ? "primary" : "default"}
              >
                Explore Business
              </Button>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HomeProducts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HomePlusPackages />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EnterpriseProducts />
      </TabPanel>
    </div>
  );
};

export default React.memo(ProductView);
