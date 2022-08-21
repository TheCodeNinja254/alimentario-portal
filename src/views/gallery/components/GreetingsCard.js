import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Chip, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MuiTypography from "@material-ui/core/Typography";
import styled from "@mui/material/styles/styled";
import { Typography } from "@mui/material";
import trackInExpandText from "../../../animation/trackInExpandText";

const NameTypography = styled(Typography)(({ theme, animate }) => ({
  color: theme.palette.secondary.dark,
  marginBottom: theme.spacing(3),
  animation:
    animate &&
    `${trackInExpandText} 2.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
}));

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.secondary.light,
  },
  mainGreeting: {
    color: theme.palette.secondary.dark,
    marginBottom: theme.spacing(3),
  },
  subGreeting: {
    color: theme.palette.primary.dark,
  },
  slogan: {
    color: theme.palette.primary.main,
  },
  contextText: {
    marginTop: theme.spacing(4),
    color: theme.palette.common.black,
  },
  actionText: {
    marginTop: theme.spacing(5),
    color: theme.palette.secondary.dark,
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderColor: theme.palette.primary.dark,
  },
}));

const GreetingsCard = () => {
  const classes = useStyles();

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 100);
  }, [animate]);

  return (
    <Paper square elevation={0} className={classes.paper}>
      <Grid container>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <NameTypography variant="h1" gutterBottom animate={animate}>
            Chef At Work
          </NameTypography>

          <MuiTypography variant="body2" className={classes.contextText}>
            At Desafio, we provide you with more than a meal, we give you an
            experience. An experience with cuts from across the world.
          </MuiTypography>
          <MuiTypography
            variant="h3"
            gutterBottom
            className={classes.actionText}
          >
            What would you like?
          </MuiTypography>
          <Chip
            variant="outlined"
            label="Attend Next Steak Dinner"
            className={classes.chip}
          />
          <Chip
            variant="outlined"
            label="Invite Chef to your event"
            className={classes.chip}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GreetingsCard;
