import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import MainCard from "../../ui-component/cards/MainCard";
import PDFFileDisplay from "../../components/PDFFileDisplay";
import cookiePolicy from "../../assets/Documents/DesafioAlimentarioCookiePolicy.pdf";
import Image from "../../components/Image";
import cookiePolicyImage from "../../assets/images/Graphics/cookiePolicy.jpg";

const useStyles = makeStyles((theme) => ({
  productImage: {
    marginTop: theme.spacing(2),
    width: "100%",
    maxHeight: 280,
  },
  cardTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: 16,
    marginTop: theme.spacing(3),
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  cardSubtitle: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
    fontSize: 13,
    textAlign: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  bottomNavigation: {
    textAlign: "center",
    justifyContent: "center",
  },
}));
const CookiePolicy = () => {
  const classes = useStyles();

  return (
    <MainCard>
      <Grid item xs={12}>
        <Image
          src={cookiePolicyImage}
          alt="terms"
          className={classes.productImage}
        />
        <Typography className={classes.cardTitle}>Cookie Policy</Typography>
        <Typography className={classes.cardSubtitle}>
          We use cookies to enhance the experience on the platform. Understand
          what information we handle in cookies.
        </Typography>
      </Grid>
      <PDFFileDisplay pdf={cookiePolicy} className={classes.bottomNavigation} />
    </MainCard>
  );
};

export default CookiePolicy;
