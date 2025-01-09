import * as React from "react";
import { Stack } from "@mui/material";
import {
  Button,
  Dialog,
  DialogContent,
  Typography,
  Divider,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Instagram, ShoppingCart } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "@mui/material/styles/styled";
import { useNavigate } from "react-router";
import Image from "../../../components/Image";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import photo from "../../../assets/promotions/horseRacingTwelve.png";
import trackInExpandText from "../../../animation/trackInExpandText";
import AnimatedSection from "../../../ui-component/AnimatedSection";

const NameTypography = styled(Typography)(({ theme, animate }) => ({
  color: theme.palette.common.black,
  fontSize: 25,
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
    fontWeight: 700,
  },
  animation:
    animate &&
    `${trackInExpandText} 2.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
}));

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
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrebookingPrompt = async () => {
    handleClose();
    navigate("/horse-racing");
  };

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 100);
  }, [animate]);

  return (
    <Dialog fullWidth open={open} onClose={handleClose} fullScreen={isMobile}>
      <AnimatedSection animate={animate} duration="1.1s">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Image alt="Img" src={photo} className={classes.productImage} />
          </Grid>
        </Grid>
      </AnimatedSection>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <NameTypography variant="h1" gutterBottom animate={animate}>
              The <strong>Sport Of Kings</strong> is back!
            </NameTypography>
            <Typography className={classes.cardSubtitle}>
              Meet Toasted by Desafio @ Gong Racecourse
            </Typography>
            <Typography variant="caption">
              A good run needs you settled and we got you. You can{" "}
              <strong>pre-order your meals here.</strong>
              Toasted By Desafio will deliver to you at your preferred time.{" "}
            </Typography>
            <Typography variant="caption">
              Brought to you by{" "}
              <a
                href="https://www.instagram.com/jockeyclubke"
                target="_blank"
                rel="noopener noreferrer"
              >
                @jockeyclubke
              </a>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.cardSubtitle}>
              Connect on Socials
            </Typography>
            <Stack direction="row" spacing={2} className={classes.socialsArea}>
              <AnimateButton>
                <a
                  href="https://www.instagram.com/jockeyclubke/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    disableElevation
                    fullWidth
                    size="small"
                    variant="contained"
                    color="secondary"
                    startIcon={<Instagram size={10} />}
                  >
                    @jockeyclubke
                  </Button>
                </a>
              </AnimateButton>
              <AnimateButton>
                <a
                  href="https://www.instagram.com/desafio_alimentario/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    disableElevation
                    fullWidth
                    size="small"
                    variant="outlined"
                    color="secondary"
                    startIcon={<Instagram size={10} />}
                  >
                    @desafio_alimentario
                  </Button>
                </a>
              </AnimateButton>
            </Stack>
            <Divider />
            <Stack
              direction="row"
              spacing={2}
              className={classes.nextActionsArea}
            >
              <AnimateButton>
                <Button
                  disableElevation
                  fullWidth
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={handlePrebookingPrompt}
                  startIcon={<ShoppingCart size={10} />}
                >
                  Learn more
                </Button>
              </AnimateButton>
              <AnimateButton>
                <Button
                  disableElevation
                  fullWidth
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionalModal;
