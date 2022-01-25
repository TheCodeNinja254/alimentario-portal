import React from "react";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Container,
  Grid,
} from "@material-ui/core";
import { HashLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import IntroImage from "../../../../assets/images/IntroV2.jpg";
import TicketStatusCheckForm from "../../forms/TicketStatusCheckForm";
import ImagesCarousel from "../ImagesCarousel";

const useStyles = makeStyles((theme) => ({
  root: {},
  cardImage: {
    maxHeight: "400px",
    marginLeft: theme.spacing(0),
    borderRadius: 30,
    [theme.breakpoints.down("sm")]: {
      maxHeight: "250px",
    },
  },
  introContainer: {
    paddingTop: theme.spacing(5),
  },
  textInitial: {
    fontSize: 30,
    fontWeight: "lighter",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  textTrailing: {
    fontSize: 30,
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  IntroText: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
    overflowX: "inherit",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(0),
    },
  },
  sloganText: {
    fontSize: 26,
    fontWeight: 500,
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      fontWeight: 300,
    },
  },
  NavigateNextIcon: {
    marginTop: theme.spacing(2),
  },
  exploreHomeButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.white.main,
    fontWeight: "lighter",
  },
  explorePackages: {
    color: theme.palette.primary.main,
    fontWeight: "lighter",
    borderColor: theme.palette.primary.main,
  },
  actionButtons: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2),
  },
  anchorLink: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  anchorButton: {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    textTransform: "none",
    fontSize: 15,
  },
}));
const IntroductionScreen = () => {
  const classes = useStyles();
  const [checkStatus, setCheckStatus] = React.useState(false);

  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <Container>
          <Grid container spacing={3} className={classes.introContainer}>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
              <ImagesCarousel />
            </Grid>
            <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
              <span className={classes.IntroText}>
                <span>
                  <Typography className={classes.textInitial}>
                    Fast, Reliable &{" "}
                  </Typography>
                  <Typography className={classes.textTrailing}>
                    Unlimited Internet Access
                  </Typography>
                </span>
              </span>
              <Typography className={classes.sloganText}>
                Stay connected with Safaricom <br /> Internet
              </Typography>

              <div className={classes.actionButtons}>
                <HashLink to="#get-connected" smooth>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.exploreHomeButton}
                  >
                    Get Connected
                  </Button>
                </HashLink>
                <HashLink to="#packages" smooth>
                  <Button
                    variant="outlined"
                    className={classes.explorePackages}
                  >
                    Explore Packages
                  </Button>
                </HashLink>
                <br />
              </div>
              <HashLink
                to="#checkStatus"
                smooth
                variant="body2"
                onClick={() => setCheckStatus(!checkStatus)}
                className={classes.anchorLink}
              >
                <Button small className={classes.anchorButton}>
                  Already made a request? Check Status <NavigateNextIcon />
                </Button>
              </HashLink>
              <Collapse in={checkStatus}>
                <Card elevation={0}>
                  <TicketStatusCheckForm />
                </Card>
              </Collapse>
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
};

export default IntroductionScreen;
