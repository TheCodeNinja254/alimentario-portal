import React from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

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
    textDecoration: "bold",
  },
  productCard: {
    backgroundColor: "rgba(229, 229, 229, 0.4)",
    marginTop: theme.spacing(2),
  },
  bundleBrief: {
    backgroundColor: "rgba(229, 229, 229, 0.6)",
    height: "100%",
    marginBottom: theme.spacing(0.5),
  },
  productCardExtended: {
    backgroundColor: "rgba(229, 229, 229, 0.2)",
    fontSize: "12px",
  },
  availableIconColor: {
    color: theme.palette.primary.main,
  },
  unavailableIconColor: {
    color: theme.palette.error.main,
  },
  listText: {
    fontSize: "8px",
  },
  expand: {
    transform: "rotate(0deg)",
    // marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
    color: theme.palette.primary.main,
  },
}));

const ProductView = () => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expandedP2, setExpandedP2] = React.useState(false);

  const handleExpandClickP2 = () => {
    setExpandedP2(!expandedP2);
  };

  const [expandedP3, setExpandedP3] = React.useState(false);

  const handleExpandClickP3 = () => {
    setExpandedP3(!expandedP3);
  };

  const [expandedP4, setExpandedP4] = React.useState(false);

  const handleExpandClickP4 = () => {
    setExpandedP4(!expandedP4);
  };

  return (
    <>
      <Card className={classes.productCard} elevation={0}>
        <CardContent>
          <div>
            <Grid container spacing={4}>
              <Grid
                item
                lg={1}
                md={1}
                xl={1}
                xs={1}
                justifyContent="center"
                className={classes.bundleBrief}
              >
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
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        className={classes.productCardExtended}
        elevation={0}
      >
        <CardContent>
          <div>
            <Grid container spacing={0}>
              <Grid item lg={4} md={4} xl={4} xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem className={classes.listText}>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2"> Frequent Email</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Light Web Browsing
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Light File Sharing
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={5} md={5} xl={5} xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">CCTV Backup</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.unavailableIconColor}>
                      <CancelIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Online Based Businesses
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.unavailableIconColor}>
                      <CancelIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Cloud Connectivity
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} xl={3} xs={12} justifyContent="center">
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
      </Collapse>
      <Card className={classes.productCard} elevation={0}>
        <CardContent>
          <div>
            <Grid container spacing={4} justify="center">
              <Grid
                item
                lg={1}
                md={1}
                xl={1}
                xs={1}
                className={classes.bundleBrief}
              >
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
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expandedP2,
                  })}
                  onClick={handleExpandClickP2}
                  aria-expanded={expandedP2}
                  aria-label="show more"
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
      <Collapse
        in={expandedP2}
        timeout="auto"
        unmountOnExit
        className={classes.productCardExtended}
        elevation={0}
      >
        <CardContent>
          <div>
            <Grid container spacing={0}>
              <Grid item lg={4} md={4} xl={4} xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem className={classes.listText}>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2"> Frequent Email</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Light Web Browsing
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Light File Sharing
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={5} md={5} xl={5} xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">CCTV Backup</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.unavailableIconColor}>
                      <CancelIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Online Based Businesses
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.unavailableIconColor}>
                      <CancelIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Cloud Connectivity
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} xl={3} xs={12} justifyContent="center">
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
      </Collapse>
      <Card className={classes.productCard} elevation={0}>
        <CardContent>
          <div>
            <Grid container spacing={4}>
              <Grid
                item
                lg={1}
                md={1}
                xl={1}
                xs={1}
                className={classes.bundleBrief}
              >
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
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expandedP3,
                  })}
                  onClick={handleExpandClickP3}
                  aria-expanded={expandedP3}
                  aria-label="show more"
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
      <Collapse
        in={expandedP3}
        timeout="auto"
        unmountOnExit
        className={classes.productCardExtended}
        elevation={0}
      >
        <CardContent>
          <div>
            <Grid container spacing={0}>
              <Grid item lg={4} md={4} xl={4} xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem className={classes.listText}>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2"> Frequent Email</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Light Web Browsing
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Light File Sharing
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={5} md={5} xl={5} xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">CCTV Backup</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.unavailableIconColor}>
                      <CancelIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Online Based Businesses
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.unavailableIconColor}>
                      <CancelIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Cloud Connectivity
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} xl={3} xs={12} justifyContent="center">
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
      </Collapse>
      <Card className={classes.productCard} elevation={0}>
        <CardContent>
          <div>
            <Grid container spacing={4}>
              <Grid
                item
                lg={1}
                md={1}
                xl={1}
                xs={1}
                className={classes.bundleBrief}
              >
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
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expandedP4,
                  })}
                  onClick={handleExpandClickP4}
                  aria-expanded={expandedP4}
                  aria-label="show more"
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
      <Collapse
        in={expandedP4}
        timeout="auto"
        unmountOnExit
        className={classes.productCardExtended}
        elevation={0}
      >
        <CardContent>
          <div>
            <Grid container spacing={0}>
              <Grid item lg={4} md={4} xl={4} xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem className={classes.listText}>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2"> Frequent Email</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Light Web Browsing
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Light File Sharing
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={5} md={5} xl={5} xs={12}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">CCTV Backup</Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.unavailableIconColor}>
                      <CancelIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Online Based Businesses
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.unavailableIconColor}>
                      <CancelIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Cloud Connectivity
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} xl={3} xs={12} justifyContent="center">
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
      </Collapse>
    </>
  );
};

export default React.memo(ProductView);
