import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Male from "../../../assets/images/Male.png";
import Female from "../../../assets/images/Female.png";
import FaqsAndTermsTab from "./component/FaqsAndTermsTab";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  contentWrapper: {
    paddingLeft: theme.spacing(36),
    paddingRight: theme.spacing(36),
    marginTop: theme.spacing(6),
  },
  cardWithImageText: {
    marginLeft: theme.spacing(2),
  },
  infoIcons: {
    backgroundColor: theme.palette.white.main,
    height: "104px",
    width: "104px",
    borderRadius: "52px",
  },
  requirementsIcons: {
    marginTop: theme.spacing(5),
  },
  infoIconImage: {
    height: "71px",
    width: "55px",
  },
  infoCard: {
    backgroundColor: "#E5E5E5",
  },
  cardImage: {
    height: "315px",
    width: "600px",
  },
  linkItemText: {
    color: theme.palette.black,
    fontSize: 10,
  },
  billingCards: {
    marginBottom: theme.spacing(2),
  },
  exploreButtons: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
  },
  exploreHomeButton: {
    marginRight: theme.spacing(2),
  },
}));

const InformationTab = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.infoCard}>
        <CardContent>
          <div className={classes.contentWrapper}>
            {/* <Typography variant="h2" className={classes.heading}> */}
            {/*  Requirements to Sign Up */}
            {/* </Typography> */}
            {/* <Typography variant="h5"> */}
            {/*  You will be required to visit a Safaricom Shop or sign up online */}
            {/*  with the following documents/details */}
            {/* </Typography> */}
            {/* <Grid container justify="center"> */}
            {/*  <Grid */}
            {/*    item */}
            {/*    lg={2} */}
            {/*    md={6} */}
            {/*    xl={2} */}
            {/*    xs={6} */}
            {/*    sm={6} */}
            {/*    className={classes.requirementsIcons} */}
            {/*  > */}
            {/*    <div align="center"> */}
            {/*      <Box */}
            {/*        className={classes.infoIcons} */}
            {/*        justifyContent="center" */}
            {/*        alignItems="center" */}
            {/*        display="flex" */}
            {/*      > */}
            {/*        <img */}
            {/*          src={clipboard} */}
            {/*          alt="info icon" */}
            {/*          className={classes.infoIconImage} */}
            {/*        /> */}
            {/*      </Box> */}
            {/*      <Typography */}
            {/*        variant="h3" */}
            {/*        align="center" */}
            {/*        className={classes.heading} */}
            {/*      > */}
            {/*        Filled Form */}
            {/*      </Typography> */}
            {/*      <Typography variant="body2" align="center"> */}
            {/*        A duly filled Business Connectivity application form */}
            {/*        provided by a Sales agent or at a Safaricom Shop. */}
            {/*      </Typography> */}
            {/*    </div> */}
            {/*  </Grid> */}
            {/*  <Grid */}
            {/*    item */}
            {/*    lg={2} */}
            {/*    md={6} */}
            {/*    xl={2} */}
            {/*    xs={6} */}
            {/*    sm={6} */}
            {/*    className={classes.requirementsIcons} */}
            {/*  > */}
            {/*    <div align="center"> */}
            {/*      <Box */}
            {/*        className={classes.infoIcons} */}
            {/*        justifyContent="center" */}
            {/*        alignItems="center" */}
            {/*        display="flex" */}
            {/*      > */}
            {/*        <img */}
            {/*          src={checkedIcon} */}
            {/*          alt="info icon" */}
            {/*          className={classes.infoIconImage} */}
            {/*        /> */}
            {/*      </Box> */}
            {/*      <Typography */}
            {/*        variant="h3" */}
            {/*        align="center" */}
            {/*        className={classes.heading} */}
            {/*      > */}
            {/*        Certificate/Permit */}
            {/*      </Typography> */}
            {/*      <Typography variant="body2" align="center"> */}
            {/*        Certificate of Incorporation or Business Permit for the */}
            {/*        business. */}
            {/*      </Typography> */}
            {/*    </div> */}
            {/*  </Grid> */}
            {/*  <Grid */}
            {/*    item */}
            {/*    lg={2} */}
            {/*    md={6} */}
            {/*    xl={2} */}
            {/*    xs={6} */}
            {/*    sm={6} */}
            {/*    className={classes.requirementsIcons} */}
            {/*  > */}
            {/*    <div align="center"> */}
            {/*      <Box */}
            {/*        className={classes.infoIcons} */}
            {/*        justifyContent="center" */}
            {/*        alignItems="center" */}
            {/*        display="flex" */}
            {/*      > */}
            {/*        <img */}
            {/*          src={brandingIcon} */}
            {/*          alt="info icon" */}
            {/*          className={classes.infoIconImage} */}
            {/*        /> */}
            {/*      </Box> */}
            {/*      <Typography */}
            {/*        variant="h3" */}
            {/*        align="center" */}
            {/*        className={classes.heading} */}
            {/*      > */}
            {/*        KRA PIN */}
            {/*      </Typography> */}
            {/*      <Typography variant="body2" align="center"> */}
            {/*        KRA PIN Certificate */}
            {/*      </Typography> */}
            {/*    </div> */}
            {/*  </Grid> */}
            {/*  <Grid */}
            {/*    item */}
            {/*    lg={2} */}
            {/*    md={6} */}
            {/*    xl={2} */}
            {/*    xs={6} */}
            {/*    sm={6} */}
            {/*    className={classes.requirementsIcons} */}
            {/*  > */}
            {/*    <div align="center"> */}
            {/*      <Box */}
            {/*        className={classes.infoIcons} */}
            {/*        justifyContent="center" */}
            {/*        alignItems="center" */}
            {/*        display="flex" */}
            {/*      > */}
            {/*        <img */}
            {/*          src={personIcon} */}
            {/*          alt="info icon" */}
            {/*          className={classes.infoIconImage} */}
            {/*        /> */}
            {/*      </Box> */}
            {/*      <Typography */}
            {/*        variant="h3" */}
            {/*        align="center" */}
            {/*        className={classes.heading} */}
            {/*      > */}
            {/*        Details */}
            {/*      </Typography> */}
            {/*      <Typography variant="body2" align="center"> */}
            {/*        Details of the Contact Person */}
            {/*      </Typography> */}
            {/*    </div> */}
            {/*  </Grid> */}
            {/*  <Grid */}
            {/*    item */}
            {/*    lg={2} */}
            {/*    md={6} */}
            {/*    xl={2} */}
            {/*    xs={6} */}
            {/*    sm={6} */}
            {/*    className={classes.requirementsIcons} */}
            {/*  > */}
            {/*    <div align="center"> */}
            {/*      <Box */}
            {/*        className={classes.infoIcons} */}
            {/*        justifyContent="center" */}
            {/*        alignItems="center" */}
            {/*        display="flex" */}
            {/*      > */}
            {/*        <img */}
            {/*          src={cardIcon} */}
            {/*          alt="info icon" */}
            {/*          className={classes.infoIconImage} */}
            {/*        /> */}
            {/*      </Box> */}
            {/*      <Typography */}
            {/*        variant="h3" */}
            {/*        align="center" */}
            {/*        className={classes.heading} */}
            {/*      > */}
            {/*        Payment */}
            {/*      </Typography> */}
            {/*      <Typography variant="body2" align="center"> */}
            {/*        For the post-pay plan, a deposit payment equivalent to one */}
            {/*        month’s payment will be required and for prepay plan, no */}
            {/*        deposit is required during the service activation process. */}
            {/*        The deposit is refundable upon termination of the service. */}
            {/*      </Typography> */}
            {/*    </div> */}
            {/*  </Grid> */}
            {/* </Grid> */}
            <Typography variant="h2" className={classes.heading}>
              How Does Billing Work?
            </Typography>
            <Card elevation={0} className={classes.billingCards}>
              <CardContent>
                <Grid container>
                  <Grid item lg={6} md={6} xl={6} xs={6} sm={6}>
                    <img
                      src={Male}
                      alt="info icon"
                      className={classes.cardImage}
                    />
                  </Grid>
                  <Grid item lg={6} md={6} xl={6} xs={6} sm={6}>
                    <div className={classes.cardWithImageText}>
                      <Typography variant="h3" className={classes.heading}>
                        For Post-Pay service
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemText
                            className={classes.linkItemText}
                            primary="Monthly bills will be sent to you via email at the end of the month. Initial month will only be billed for the number of days used from the date of installation."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            className={classes.linkItemText}
                            primary="The bill can be paid via M-PESA or at any Safaricom Shop."
                          />
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card elevation={0}>
              <CardContent>
                <Grid container>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    xs={6}
                    sm={6}
                    justify="center"
                    spacing={0}
                  >
                    <div className={classes.cardWithImageText}>
                      <Typography variant="h3" className={classes.heading}>
                        For PrePay service
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemText
                            className={classes.linkItemText}
                            primary="You will be required to make your monthly payment in advance for the package you have subscribed to for any support or queries please email us at; business.support@safaricom.co.ke or request for a call back"
                          />
                        </ListItem>
                      </List>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    xs={6}
                    sm={6}
                    justify="center"
                    spacing={0}
                  >
                    <img
                      src={Female}
                      alt="info icon"
                      className={classes.cardImage}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
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
                Frequently asked questions
              </Button>
              <Button variant="contained">Terms & Conditions</Button>
            </Box>
            <FaqsAndTermsTab />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default React.memo(InformationTab);
