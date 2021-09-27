import React from "react";
import { Box, Button, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IndoorCameras from "./IndoorCameras";
import OutdoorCameras from "./OutdoorCameras";

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
  heading: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    fontSize: 45,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    textTransform: "capitalize",
  },
  exploreHomeButton: {
    marginRight: theme.spacing(2),
  },
  tabButton: {
    textTransform: "capitalize",
  },
  actionButtons: {
    marginTop: theme.spacing(5),
  },
  exploreButtons: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(8),
  },
}));

const CamerasView = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="home-cctv-cameras">
      <Typography variant="h2" className={classes.heading}>
        Camera
      </Typography>
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
                variant={value === 0 ? "outlined" : ""}
                color="primary"
                className={classes.tabButton}
              >
                Indoor Cameras
              </Button>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Button
                className={classes.tabButton}
                color="primary"
                variant={value === 1 ? "outlined" : ""}
              >
                Outdoor Cameras
              </Button>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <IndoorCameras />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OutdoorCameras />
      </TabPanel>
      <div align="center">
        <Button small variant="outlined" className={classes.actionButtons}>
          FAQs <ArrowForwardIcon />
        </Button>
      </div>
      <br />
    </div>
  );
};

export default React.memo(CamerasView);
