import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

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
  bundleSizeText: {
    height: 32,
    fontWeight: 700,
  },
  productCard: {
    backgroundColor: "#E5E5E5",
    marginTop: theme.spacing(2),
  },
  productCardExtended: {
    backgroundColor: "#F3F3F3",
  },
  availableIconColor: {
    color: theme.palette.primary.main,
  },
  unavailableIconColor: {
    color: theme.palette.error.main,
  },
  listText: {
    fontSize: 18,
  },
}));

const ProductView = () => {
  const classes = useStyles();
  return (
      <>
        <Typography variant="h1" className={classes.pageHeading}>
          Get connected
        </Typography>
        <Typography variant="h5">
          See if your area is fibre ready and explore the best internet package
          for you
        </Typography>
        <Box
            display="flex"
            justifyContent="center"
            className={classes.exploreButtons}
        >
          <Button
              variant="contained"
              color="primary"
              className={classes.exploreHomeButton}
          >
            Explore Home
          </Button>
          <Button variant="contained">Explore Business</Button>
        </Box>
        <Card className={classes.productCard} elevation={0}>
          <CardContent>
            <div>
              <Grid container spacing={4}>
                <Grid item lg={1} md={1} xl={1} xs={1} justifyContent="center">
                <span>
                  <Typography align="center" className={classes.bundleSizeText}>
                    8
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2" align="center">
                    MBPS
                  </Typography>
                </span>
                </Grid>
                <Grid item lg={7} md={7} xl={7} xs={7}>
                <span>
                  <Typography className={classes.bundleSizeText}>
                    BRONZE
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2">
                    Small offices of 1-10 users
                  </Typography>
                </span>
                </Grid>
                <Grid item lg={3} md={3} xl={3} xs={3}>
                <span>
                  <Typography className={classes.bundleSizeText}>
                    Ksh. 3,999
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2">Valid for 30 days</Typography>
                </span>
                </Grid>
                <Grid item lg={1} md={1} xl={1} xs={1} justifyContent="center">
                  <KeyboardArrowDownIcon/>
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.productCardExtended} elevation={0}>
          <CardContent>
            <div>
              <Grid container spacing={4}>
                <Grid item lg={4} md={4} xl={4} xs={4} justifyContent="center">
                  <List
                      component="nav"
                      aria-label="main mailbox folders"
                      className={classes.listText}
                  >
                    <ListItem button>
                      <ListItemIcon className={classes.availableIconColor}>
                        <CheckCircleIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Frequent Email"/>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon className={classes.availableIconColor}>
                        <CheckCircleIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Light Web Browsing"/>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon className={classes.availableIconColor}>
                        <CheckCircleIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Light File Sharing"/>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={4} justifyContent="center">
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                      <ListItemIcon className={classes.availableIconColor}>
                        <CheckCircleIcon/>
                      </ListItemIcon>
                      <ListItemText primary="CCTV Backup"/>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon className={classes.unavailableIconColor}>
                        <CancelIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Online Based Businesses"/>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon className={classes.unavailableIconColor}>
                        <CancelIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Cloud Connectivity"/>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item lg={4} md={4} xl={4} xs={4} justifyContent="center">
                  <Button
                      variant="contained"
                      color="primary"
                      className={classes.getConnectedButton}
                  >
                    Get Connected
                  </Button>
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.productCard} elevation={0}>
          <CardContent>
            <div>
              <Grid container spacing={4}>
                <Grid item lg={1} md={1} xl={1} xs={1} justifyContent="center">
                <span>
                  <Typography align="center" className={classes.bundleSizeText}>
                    20
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2" align="center">
                    MBPS
                  </Typography>
                </span>
                </Grid>
                <Grid item lg={7} md={7} xl={7} xs={7}>
                <span>
                  <Typography className={classes.bundleSizeText}>
                    SILVER
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2">
                    Small offices of 1-10 users
                  </Typography>
                </span>
                </Grid>
                <Grid item lg={3} md={3} xl={3} xs={3}>
                <span>
                  <Typography className={classes.bundleSizeText}>
                    Ksh. 4,999
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2">Valid for 30 days</Typography>
                </span>
                </Grid>
                <Grid item lg={1} md={1} xl={1} xs={1} justifyContent="center">
                  <NavigateNextIcon/>
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.productCard} elevation={0}>
          <CardContent>
            <div>
              <Grid container spacing={4}>
                <Grid item lg={1} md={1} xl={1} xs={1} justifyContent="center">
                <span>
                  <Typography align="center" className={classes.bundleSizeText}>
                    40
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2" align="center">
                    MBPS
                  </Typography>
                </span>
                </Grid>
                <Grid item lg={7} md={7} xl={7} xs={7}>
                <span>
                  <Typography className={classes.bundleSizeText}>
                    GOLD
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2">
                    Small offices of 1-10 users
                  </Typography>
                </span>
                </Grid>
                <Grid item lg={3} md={3} xl={3} xs={3}>
                <span>
                  <Typography className={classes.bundleSizeText}>
                    Ksh. 5,999
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2">Valid for 30 days</Typography>
                </span>
                </Grid>
                <Grid item lg={1} md={1} xl={1} xs={1} justifyContent="center">
                  <NavigateNextIcon/>
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
        <Card className={classes.productCard} elevation={0}>
          <CardContent>
            <div>
              <Grid container spacing={4}>
                <Grid item lg={1} md={1} xl={1} xs={1} justifyContent="center">
                <span>
                  <Typography align="center" className={classes.bundleSizeText}>
                    80
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2" align="center">
                    MBPS
                  </Typography>
                </span>
                </Grid>
                <Grid item lg={7} md={7} xl={7} xs={7}>
                <span>
                  <Typography className={classes.bundleSizeText}>
                    DIAMOND
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2">
                    Small offices of 1-10 users
                  </Typography>
                </span>
                </Grid>
                <Grid item lg={3} md={3} xl={3} xs={3}>
                <span>
                  <Typography className={classes.bundleSizeText}>
                    Ksh. 10,999
                  </Typography>
                </span>
                  <span>
                  <Typography variant="body2">Valid for 30 days</Typography>
                </span>
                </Grid>
                <Grid item lg={1} md={1} xl={1} xs={1} justifyContent="center">
                  <NavigateNextIcon/>
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
      </>
  );
};

export default React.memo(ProductView);
