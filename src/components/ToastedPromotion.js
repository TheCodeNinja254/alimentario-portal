import {
  Button,
  DialogContent,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { ShoppingCart } from "@material-ui/icons";
import * as React from "react";
import { useEffect, useState } from "react";
import styled from "@mui/material/styles/styled";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useNavigate } from "react-router";
import AnimateButton from "../ui-component/extended/AnimateButton";
import trackInExpandText from "../animation/trackInExpandText";

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

const ToastedPromotion = ({ setOpen }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 100);
  }, [animate]);

  const handleLearnMoreClick = async () => {
    handleClose();
    navigate("/toasted");
  };

  return (
    <DialogContent>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <NameTypography variant="h1" gutterBottom animate={animate}>
            Get our <strong>Top selling burger</strong> and more from Toasted by
            Desafio
          </NameTypography>
          <Typography className={classes.cardSubtitle}>
            Meet Toasted by Desafio
          </Typography>
          <Typography variant="caption">
            Enjoy <strong>Burgers, Sandwiches, Fries, Wine, Tea, Coffee</strong>{" "}
            and more from <strong>Toasted by Desafio</strong>
          </Typography>
        </Grid>

        <Grid item xs={12}>
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
                onClick={handleLearnMoreClick}
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
  );
};

export default ToastedPromotion;
