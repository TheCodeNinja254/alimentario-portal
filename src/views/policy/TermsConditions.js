import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import MainCard from "../../ui-component/cards/MainCard";
import PDFFileDisplay from "../../components/PDFFileDisplay";
import termsAndConditions from "../../assets/Documents/DesafioAlimentarioLTDPrivacyPolicy.pdf";
import Image from "../../components/Image";
import termsImage from "../../assets/images/Graphics/terms.jpg";
import AnimatedSection from "../../ui-component/AnimatedSection";

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
const TermsConditions = () => {
  const classes = useStyles();

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="1.4s">
      <MainCard>
        <Grid item xs={12}>
          <Image
            src={termsImage}
            alt="terms"
            className={classes.productImage}
          />
          <Typography className={classes.cardTitle}>
            Terms & Conditions
          </Typography>
          <Typography className={classes.cardSubtitle}>
            Understand how we handle your data as we also explain what we expect
            from you.
          </Typography>
        </Grid>
        <PDFFileDisplay
          pdf={termsAndConditions}
          className={classes.bottomNavigation}
        />
      </MainCard>
    </AnimatedSection>
  );
};

export default TermsConditions;
