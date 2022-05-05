import React from "react";
import {
  Box,
  Button,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  FMCFaqs,
  HomeCCTV,
  HomeFiber,
  HomeInsurance,
  SecureNet,
  Wireless,
} from "./components";
import Page from "../../components/Page";

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
      {value === index && <Box p={3}>{children}</Box>}
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
    fontSize: 32,
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
    fontSize: 15,
    fontWeight: "bold",
  },
  actionButtons: {
    marginTop: theme.spacing(5),
  },
  exploreButtons: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(8),
  },
}));

const FAQsView = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title="Frequently Asked Questions">
      <Container id="faqs">
        <Typography variant="h2" className={classes.heading}>
          Frequently Asked Questions
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
                  variant={value === 0 ? "outlined" : ""}
                  color="primary"
                  className={classes.tabButton}
                >
                  Home Plus
                </Button>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <Button
                  variant={value === 1 ? "outlined" : ""}
                  color="primary"
                  className={classes.tabButton}
                >
                  Home Fiber
                </Button>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <Button
                  variant={value === 2 ? "outlined" : ""}
                  color="primary"
                  className={classes.tabButton}
                >
                  Secure Net
                </Button>
              }
              {...a11yProps(2)}
            />
            <Tab
              label={
                <Button
                  variant={value === 3 ? "outlined" : ""}
                  color="primary"
                  className={classes.tabButton}
                >
                  4G WiFi Router
                </Button>
              }
              {...a11yProps(3)}
            />
            <Tab
              label={
                <Button
                  variant={value === 4 ? "outlined" : ""}
                  color="primary"
                  className={classes.tabButton}
                >
                  Home CCTV
                </Button>
              }
              {...a11yProps(4)}
            />
            <Tab
              label={
                <Button
                  className={classes.tabButton}
                  color="primary"
                  variant={value === 5 ? "outlined" : ""}
                >
                  Home Insurance
                </Button>
              }
              {...a11yProps(5)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <FMCFaqs />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <HomeFiber />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SecureNet />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Wireless />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <HomeCCTV />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <HomeInsurance />
        </TabPanel>
        <br />
      </Container>
    </Page>
  );
};

export default React.memo(FAQsView);
