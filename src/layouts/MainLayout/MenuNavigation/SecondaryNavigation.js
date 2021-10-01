import * as React from "react";
import { useHistory } from "react-router-dom";
import { Container, Grid, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "../../../assets/images/Icons/NavIcons/HomeIcon.png";
import SecureNetIcon from "../../../assets/images/Icons/NavIcons/SecureNet.png";
import WirelessRouterIcon from "../../../assets/images/Icons/NavIcons/WirelessRouter.png";
import Entertainment from "../../../assets/images/Icons/NavIcons/Entertainment.png";
import HomeCCTV from "../../../assets/images/Icons/NavIcons/HomeCCTV.png";
import HomeInsurance from "../../../assets/images/Icons/NavIcons/HomeInsurance.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    height: 95,
    marginTop: theme.spacing(13),
  },
  menuItems: {
    alignContent: "flex-end",
  },
  Tab: {
    minWidth: 73,
    width: 120,
    fontSize: 11,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    "&:hover": {
      color: theme.palette.black,
    },
  },
  TabItems: {
    color: theme.palette.white.main,
  },
}));

const SecondaryNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleRouteChange = (path) => {
    history.push(path);
  };

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
                icon={<img src={HomeIcon} alt="Home Icon" />}
                className={classes.Tab}
                label="HOME FIBER"
                onClick={() => handleRouteChange("/")}
              />
              <Tab
                icon={<img src={SecureNetIcon} alt="Secure Net Icon" />}
                className={classes.Tab}
                label="SECURE NET"
                onClick={() => handleRouteChange("/secure-net")}
              />
              <Tab
                icon={<img src={WirelessRouterIcon} alt="Wireless Icon" />}
                className={classes.Tab}
                label="4G WIFI ROUTER"
                onClick={() => handleRouteChange("/4g-wifi-router")}
              />
              <Tab
                icon={<img src={Entertainment} alt="Wireless Icon" />}
                className={classes.Tab}
                label="ENTERTAINMENT"
                onClick={() => handleRouteChange("/entertainment")}
              />
              <Tab
                icon={<img src={HomeCCTV} alt="Wireless Icon" />}
                className={classes.Tab}
                label="HOME CCTV"
                onClick={() => handleRouteChange("/home-cctv")}
              />
              <Tab
                icon={<img src={HomeInsurance} alt="Wireless Icon" />}
                className={classes.Tab}
                label="INSURANCE"
                onClick={() => handleRouteChange("/home-insurance")}
              />
            </Tabs>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default React.memo(SecondaryNavigation);
