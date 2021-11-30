import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { HashLink } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({
  root: {},
  productCard: {
    height: 780,
    borderRadius: 10,
    backgroundColor: theme.palette.white.main,
    marginTop: theme.spacing(0),
  },
  productCardTitle: {
    fontSize: 18,
    fontWeight: "lighter",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
    textTransform: "uppercase",
  },
  validityCardTitle: {
    fontSize: 17,
    fontWeight: "lighter",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
  },
  productCardSubtitle: {
    height: 18,
    fontSize: 15,
    fontWeight: "bolder",
    fontStyle: "normal",
    textAlign: "center",
  },
  bundleSizeText: {
    height: 59,
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
  },
  productColorName: {
    height: 48,
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.white.main,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  bronzeProductColorHeader: {
    background:
      "linear-gradient(0deg, #8B5A44 0%, rgba(156, 116, 97, 0) 202.04%)",
    paddingTop: theme.spacing(-2),
    marginTop: theme.spacing(-1),
    height: "66px",
    borderRadius: "0 0 5 5",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  silverProductColorHeader: {
    background:
      "linear-gradient(0deg, #515151 0%, rgba(255, 255, 255, 0) 181.63%)",
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(-1),
    height: "66px",
    borderRadius: "0 0 5 5",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  goldProductColorHeader: {
    background:
      "linear-gradient(0deg, #E5BF4F 57.88%, rgba(255, 255, 255, 0) 246.94%)",
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(-1),
    height: "66px",
    borderRadius: "0 0 5 5",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  diamondProductColorHeader: {
    background:
      "linear-gradient(0deg, #C2576C 0%, rgba(255, 255, 255, 0) 403.06%)",
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(-1),
    height: "66px",
    borderRadius: "0 0 5 5",
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  amountText: {
    height: 59,
    marginTop: theme.spacing(1),
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
  },
  productCardTitleHolder: {
    marginTop: theme.spacing(1),
  },
  listText: {
    fontSize: 8,
  },
  availableIconColor: {
    color: theme.palette.primary.main,
  },
  unavailableIconColor: {
    color: theme.palette.error.main,
  },
  getConnectedButton: {
    marginTop: theme.spacing(1),
    justifyContent: "center",
  },
  additionalFeatures: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    fontSize: 14,
  },
  plusPackageNotation: {
    textAlign: "center",
    fontSize: 15,
    marginTop: theme.spacing(1),
    fontWeight: 700,
  },
}));

const packageCapabilities = {
  bronze: [
    {
      capabilityName: "Fast web browsing",
      capabilityAvailability: true,
    },
    {
      capabilityName: "SD Movie & music streaming",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Internet surfing, social media & email",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Multiple device streaming",
      capabilityAvailability: false,
    },
    {
      capabilityName: "Superfast video downloads",
      capabilityAvailability: false,
    },
    {
      capabilityName: "CCTV devices Capability",
      capabilityAvailability: false,
    },
  ],
  silver: [
    {
      capabilityName: "Fast web browsing & Video calls",
      capabilityAvailability: true,
    },
    {
      capabilityName: "HD TV shows and movies upto 3 connected devices",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Internet surfing, social media & email",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Moderate streaming",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Superfast video downloads",
      capabilityAvailability: true,
    },
    {
      capabilityName: "CCTV devices Capability",
      capabilityAvailability: true,
    },
  ],
  gold: [
    {
      capabilityName: "Fast web browsing",
      capabilityAvailability: true,
    },
    {
      capabilityName: "4K Movies & TV Shows",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Online gaming and downloading",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Multiple device music streaming",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Superfast video downloads",
      capabilityAvailability: true,
    },
    {
      capabilityName: "CCTV devices Capability",
      capabilityAvailability: true,
    },
  ],
  diamond: [
    {
      capabilityName: "Fast web browsing",
      capabilityAvailability: true,
    },
    {
      capabilityName: "4K Movie & TV Shows",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Heavy online gaming and downloading ",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Multiple device streaming",
      capabilityAvailability: true,
    },
    {
      capabilityName: "Superfast video downloads & music streaming",
      capabilityAvailability: true,
    },
    {
      capabilityName: "CCTV devices Capability",
      capabilityAvailability: true,
    }, // 4k movies and video streaming, heavy online gaming and downloading .
  ],
};

const HomePlusPackages = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={3} md={3} xl={3} sm={12} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <Paper elevation={1} className={classes.bronzeProductColorHeader}>
              <Typography className={classes.productColorName}>
                BRONZE
              </Typography>
            </Paper>
            <CardContent>
              <Typography className={classes.bundleSizeText}>8</Typography>
              <Typography className={classes.productCardTitle}>MBPS</Typography>
              <div>
                <List component="nav" aria-label="main mailbox folders">
                  {packageCapabilities.bronze.map((packageCapability) => (
                    <ListItem
                      className={classes.listText}
                      key={packageCapability.capabilityName}
                    >
                      <ListItemIcon
                        className={
                          packageCapability.capabilityAvailability
                            ? classes.availableIconColor
                            : classes.unavailableIconColor
                        }
                      >
                        {packageCapability.capabilityAvailability ? (
                          <CheckCircleIcon />
                        ) : (
                          <CancelIcon />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2">
                            {packageCapability.capabilityName}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
              <Typography className={classes.plusPackageNotation}>
                PLUS
              </Typography>
              <Divider />
              <Typography className={classes.additionalFeatures}>
                5GB Mobile Data <br />
                400 Minutes across networks <br />
                Unlimited SMS across networks
              </Typography>
              <Divider />
              <Typography className={classes.amountText}>Ksh 4,049</Typography>
              <Typography className={classes.validityCardTitle}>
                Valid for 30 days
              </Typography>
            </CardContent>
            <CardActions className={classes.getConnectedButton}>
              <HashLink to="#get-connected" smooth>
                <Button variant="contained" color="primary">
                  Get Connected
                </Button>
              </HashLink>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={3} xl={3} sm={12} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <Paper elevation={1} className={classes.silverProductColorHeader}>
              <Typography className={classes.productColorName}>
                SILVER
              </Typography>
            </Paper>
            <CardContent>
              <Typography className={classes.bundleSizeText}>20</Typography>
              <Typography className={classes.productCardTitle}>MBPS</Typography>
              <div>
                <List component="nav" aria-label="main mailbox folders">
                  {packageCapabilities.silver.map((packageCapability) => (
                    <ListItem
                      className={classes.listText}
                      key={packageCapability.capabilityName}
                    >
                      <ListItemIcon
                        className={
                          packageCapability.capabilityAvailability
                            ? classes.availableIconColor
                            : classes.unavailableIconColor
                        }
                      >
                        {packageCapability.capabilityAvailability ? (
                          <CheckCircleIcon />
                        ) : (
                          <CancelIcon />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2">
                            {packageCapability.capabilityName}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
              <Typography className={classes.plusPackageNotation}>
                PLUS
              </Typography>
              <Divider />
              <Typography className={classes.additionalFeatures}>
                5GB Mobile Data <br />
                400 Minutes across networks <br />
                Unlimited SMS across networks
              </Typography>
              <Divider />
              <Typography className={classes.amountText}>Ksh 5,349</Typography>
              <Typography className={classes.validityCardTitle}>
                Valid for 30 days
              </Typography>
            </CardContent>
            <CardActions className={classes.getConnectedButton}>
              <HashLink to="#get-connected" smooth>
                <Button variant="contained" color="primary">
                  Get Connected
                </Button>
              </HashLink>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={3} xl={3} sm={12} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <Paper elevation={1} className={classes.goldProductColorHeader}>
              <Typography className={classes.productColorName}>GOLD</Typography>
            </Paper>
            <CardContent>
              <Typography className={classes.bundleSizeText}>40</Typography>
              <Typography className={classes.productCardTitle}>MBPS</Typography>
              <div>
                <List component="nav" aria-label="main mailbox folders">
                  {packageCapabilities.gold.map((packageCapability) => (
                    <ListItem
                      className={classes.listText}
                      key={packageCapability.capabilityName}
                    >
                      <ListItemIcon
                        className={
                          packageCapability.capabilityAvailability
                            ? classes.availableIconColor
                            : classes.unavailableIconColor
                        }
                      >
                        {packageCapability.capabilityAvailability ? (
                          <CheckCircleIcon />
                        ) : (
                          <CancelIcon />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2">
                            {packageCapability.capabilityName}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
              <Typography className={classes.plusPackageNotation}>
                PLUS
              </Typography>
              <Divider />
              <Typography className={classes.additionalFeatures}>
                5GB Mobile Data <br />
                400 Minutes across networks <br />
                Unlimited SMS across networks
              </Typography>
              <Divider />
              <Typography className={classes.amountText}>Ksh 7,349</Typography>
              <Typography className={classes.validityCardTitle}>
                Valid for 30 days
              </Typography>
            </CardContent>
            <CardActions className={classes.getConnectedButton}>
              <HashLink to="#get-connected" smooth>
                <Button variant="contained" color="primary">
                  Get Connected
                </Button>
              </HashLink>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={3} xl={3} sm={12} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <Paper elevation={1} className={classes.diamondProductColorHeader}>
              <Typography className={classes.productColorName}>
                DIAMOND
              </Typography>
            </Paper>
            <CardContent>
              <Typography className={classes.bundleSizeText}>100</Typography>
              <Typography className={classes.productCardTitle}>MBPS</Typography>
              <div>
                <List component="nav" aria-label="main mailbox folders">
                  {packageCapabilities.diamond.map((packageCapability) => (
                    <ListItem
                      className={classes.listText}
                      key={packageCapability.capabilityName}
                    >
                      <ListItemIcon
                        className={
                          packageCapability.capabilityAvailability
                            ? classes.availableIconColor
                            : classes.unavailableIconColor
                        }
                      >
                        {packageCapability.capabilityAvailability ? (
                          <CheckCircleIcon />
                        ) : (
                          <CancelIcon />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2">
                            {packageCapability.capabilityName}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
              <Typography className={classes.plusPackageNotation}>
                PLUS
              </Typography>
              <Divider />
              <Typography className={classes.additionalFeatures}>
                5GB Mobile Data <br />
                400 Minutes across networks <br />
                Unlimited SMS across networks
              </Typography>
              <Divider />
              <Typography className={classes.amountText}>Ksh 13,549</Typography>
              <Typography className={classes.validityCardTitle}>
                Valid for 30 days
              </Typography>
            </CardContent>
            <CardActions className={classes.getConnectedButton}>
              <HashLink to="#get-connected" smooth>
                <Button variant="contained" color="primary">
                  Get Connected
                </Button>
              </HashLink>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(HomePlusPackages);
