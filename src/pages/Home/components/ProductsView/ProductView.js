import React from "react";
import { Box, Button, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import HomeProducts from "./HomeProducts";
import EnterpriseProducts from "./EnterpriseProducts";

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
    marginRight: theme.spacing(2),
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
    <>
      <Box
        display="flex"
        justifyContent="center"
        className={classes.exploreButtons}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
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
                color="primary"
                className={classes.exploreHomeButton}
              >
                Explore Home
              </Button>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={<Button variant="contained">Explore Business</Button>}
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HomeProducts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EnterpriseProducts />
      </TabPanel>
    </>
  );
};

export default React.memo(ProductView);
