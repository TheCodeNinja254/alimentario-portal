import * as React from "react";
import { Dialog, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useEffect, useState } from "react";
import Image from "../../../components/Image";
import photo from "../../../assets/images/desafioBurger.jpg";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import HorseRacePromotional from "../../../components/HorseRacePromotional";
import ToastedPromotion from "../../../components/ToastedPromotion";

const useStyles = makeStyles((theme) => ({
  modalTitle: {
    color: theme.palette.secondary.dark,
    fontWeight: 700,
    fontSize: 16,
  },
  cardTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 200,
    fontSize: 16,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  cardSubtitle: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
    fontSize: 16,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  sloganText: {
    color: theme.palette.common.black,
    fontWeight: 300,
    fontSize: 13,
    marginBottom: theme.spacing(2),
  },
  productImage: {
    marginTop: theme.spacing(0),
    width: "100%",
    maxHeight: 350,
  },
  infoTab: {
    marginBottom: theme.spacing(2),
  },
  nextActionsArea: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
  },
  socialsArea: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-start",
  },
}));

const PromotionalModal = ({ open, setOpen }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClose = () => {
    setOpen(false);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 100);
  }, [animate]);

  const promotionTopic = "toasted";

  return (
    <Dialog fullWidth open={open} onClose={handleClose} fullScreen={isMobile}>
      <AnimatedSection animate={animate} duration="1.1s">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Image alt="Img" src={photo} className={classes.productImage} />
          </Grid>
        </Grid>
      </AnimatedSection>
      {promotionTopic === "toasted" ? (
        <ToastedPromotion setOpen={setOpen} />
      ) : (
        <HorseRacePromotional setOpen={setOpen} />
      )}
    </Dialog>
  );
};

export default PromotionalModal;
