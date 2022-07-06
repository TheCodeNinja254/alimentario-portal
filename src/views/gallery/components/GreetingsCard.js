import React from "react";
import Grid from "@material-ui/core/Grid";
import { Chip, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MuiTypography from "@material-ui/core/Typography";

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

  return (
    <Paper square elevation={0} className={classes.paper}>
      <Grid container>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <MuiTypography
            variant="h1"
            gutterBottom
            className={classes.mainGreeting}
          >
            Chef At Work
          </MuiTypography>

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
