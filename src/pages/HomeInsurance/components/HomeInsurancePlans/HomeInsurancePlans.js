import React from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontSize: 45,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
  },
  plansContainer: {
    marginTop: theme.spacing(4),
  },
  productCard: {
    borderRadius: 10,
    backgroundColor: theme.palette.white.main,
    marginTop: theme.spacing(0),
  },
  cardContent: {
    alignContent: "center",
    textAlign: "center",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  amountText: {
    fontWeight: "900",
  },
  disclaimerText: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
  },
  disclaimerTextLink: {
    fontSize: 18,
    fontWeight: "500",
    fontStyle: "normal",
    color: theme.palette.primary.main,
  },
  cardDivider: {
    backgroundColor: theme.palette.black,
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
  },
  chargeTitle: {
    marginTop: theme.spacing(3),
  },
  productCardTitle: {
    fontSize: 18,
    fontWeight: "lighter",
    fontStyle: "normal",
    textAlign: "center",
    color: theme.palette.black,
    textTransform: "uppercase",
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
    marginTop: theme.spacing(2),
    height: "72px",
    borderRadius: 5,
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  silverProductColorHeader: {
    background:
      "linear-gradient(0deg, #515151 0%, rgba(255, 255, 255, 0) 181.63%)",
    marginTop: theme.spacing(2),
    height: "72px",
    borderRadius: 5,
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  goldProductColorHeader: {
    background:
      "linear-gradient(0deg, #E5BF4F 57.88%, rgba(255, 255, 255, 0) 246.94%)",
    marginTop: theme.spacing(2),
    height: "72px",
    borderRadius: 5,
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  actionButtons: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },
}));

const HomeInsurancePlans = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.heading}>
        HOME Insurance Plans
      </Typography>
      <Grid
        container
        spacing={7}
        justify="center"
        className={classes.plansContainer}
      >
        <Grid item lg={4} md={4} xl={4} sm={12} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <Paper elevation={1} className={classes.bronzeProductColorHeader}>
              <Typography className={classes.productColorName}>
                HERO PLUS
              </Typography>
            </Paper>
            <CardContent className={classes.cardContent}>
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                HOME CONTENT(HC) (SUM INSURED)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>250,000</span>
              </Typography>
              <Divider className={classes.cardDivider} />
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                ALL RISK( MAX 30% OF HC) (SUM INSURED)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>75,000</span>
              </Typography>
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                ANNUAL PREMIUM
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>3,000</span>
              </Typography>
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                MONTHLY PREMIUM
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>250</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} xl={4} sm={12} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <Paper elevation={1} className={classes.silverProductColorHeader}>
              <Typography className={classes.productColorName}>
                HERO PLUS
              </Typography>
            </Paper>
            <CardContent className={classes.cardContent}>
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                HOME CONTENT(HC) (SUM INSURED)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>500,000</span>
              </Typography>
              <Divider className={classes.cardDivider} />
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                ALL RISK( MAX 30% OF HC) (SUM INSURED)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>150,000</span>
              </Typography>
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                ANNUAL PREMIUM
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>5,700</span>
              </Typography>
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                MONTHLY PREMIUM
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>475</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} xl={4} sm={12} xs={12}>
          <Card className={classes.productCard} elevation={0}>
            <Paper elevation={1} className={classes.goldProductColorHeader}>
              <Typography className={classes.productColorName}>
                HERO PLUS
              </Typography>
            </Paper>
            <CardContent className={classes.cardContent}>
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                HOME CONTENT(HC) (SUM INSURED)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>1,000,000</span>
              </Typography>
              <Divider className={classes.cardDivider} />
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                ALL RISK( MAX 30% OF HC) (SUM INSURED)
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>300,000</span>
              </Typography>
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                ANNUAL PREMIUM
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>16,200</span>
              </Typography>
              <Typography
                variant="body1"
                className={classes.chargeTitle}
                gutterBottom
              >
                MONTHLY PREMIUM
              </Typography>
              <Typography variant="body1" gutterBottom>
                Kshs <span className={classes.amountText}>1,350</span>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="body1" className={classes.disclaimerText}>
        *All risk items are only covered up to 30% of the value of the Home
        insurance package.{" "}
        <span className={classes.disclaimerTextLink}>Terms and conditions</span>{" "}
        apply.
      </Typography>
      <div align="center">
        <Button
          small
          variant="outlined"
          href="tel://*400#"
          className={classes.actionButtons}
        >
          Dial *400# To Get Your Plan <ArrowForwardIcon />
        </Button>
      </div>
    </Container>
  );
};

export default React.memo(HomeInsurancePlans);
