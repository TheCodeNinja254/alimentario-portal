import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  root: {},
  productCard: {
    height: 599,
    borderRadius: 10,
    backgroundColor: theme.palette.white.main,
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
  amountText: {
    height: 59,
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
    fontSize: "8px",
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
}));

const EnterpriseProductsView = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={10}>
        <Grid item sm={12} lg={4} md={4} xl={4} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <CardContent>
              <Typography className={classes.productCardTitle}>
                Internet For Business
              </Typography>
              <Typography className={classes.bundleSizeText}>3</Typography>
              <Typography className={classes.productCardTitle}>MBPS</Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.productCardSubtitle}
              >
                Small offices of 1-10 users
              </Typography>
              <div>
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
              </div>
              <Typography className={classes.amountText}>Ksh 4,100</Typography>
              <Typography className={classes.validityCardTitle}>
                Valid for 30 days
              </Typography>
            </CardContent>
            <CardActions className={classes.getConnectedButton}>
              <a
                href="https://www.safaricom.co.ke/business/sme/fixed-line-solutions/internet-for-business"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary">
                  Get Connected
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} lg={4} md={4} xl={4} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <CardContent>
              <Typography className={classes.productCardTitle}>
                Internet For Business
              </Typography>
              <Typography className={classes.bundleSizeText}>5</Typography>
              <Typography className={classes.productCardTitle}>MBPS</Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.productCardSubtitle}
              >
                Medium offices of 10-20 users
              </Typography>
              <div>
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
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
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
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
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
              </div>
              <Typography className={classes.amountText}>Ksh 5,799</Typography>
              <Typography className={classes.validityCardTitle}>
                Valid for 30 days
              </Typography>
            </CardContent>
            <CardActions className={classes.getConnectedButton}>
              <a
                href="https://www.safaricom.co.ke/business/sme/fixed-line-solutions/internet-for-business"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary">
                  Get Connected
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} xl={4} xs={12} sm={12}>
          <Card className={classes.productCard} elevation={0}>
            <CardContent>
              <Typography className={classes.productCardTitle}>
                Internet For Business
              </Typography>
              <Typography className={classes.bundleSizeText}>10</Typography>
              <Typography className={classes.productCardTitle}>MBPS</Typography>
              <Typography
                variant="body2"
                component="p"
                className={classes.productCardSubtitle}
              >
                Medium offices of 20-30 users
              </Typography>
              <div>
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
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
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
                    <ListItemIcon className={classes.availableIconColor}>
                      <CheckCircleIcon />
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
              </div>
              <Typography className={classes.amountText}>Ksh 15,699</Typography>
              <Typography className={classes.validityCardTitle}>
                Valid for 30 days
              </Typography>
            </CardContent>
            <CardActions className={classes.getConnectedButton}>
              <a
                href="https://www.safaricom.co.ke/business/sme/fixed-line-solutions/internet-for-business"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained" color="primary">
                  Get Connected
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(EnterpriseProductsView);
