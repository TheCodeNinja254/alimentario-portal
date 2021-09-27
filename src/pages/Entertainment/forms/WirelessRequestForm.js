import React from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(3),
  },
  actionButtons: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  textArea: {
    marginTop: theme.spacing(0),
  },
  labelTextField: {
    marginTop: theme.spacing(2),
  },
  exploreHomeButton: {
    marginRight: theme.spacing(2),
  },
}));

const WirelessRequestForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.labelTextField}>
        Name
      </Typography>
      <TextField
        id="outlined-size-normal"
        variant="outlined"
        placeholder="Enter your name"
        fullWidth
        className={classes.textArea}
      />
      <Typography variant="body1" className={classes.labelTextField}>
        Name
      </Typography>
      <TextField
        id="outlined-size-normal"
        variant="outlined"
        placeholder="0722 000 000"
        fullWidth
        className={classes.textArea}
      />
      <Typography variant="body1" className={classes.labelTextField}>
        Name
      </Typography>
      <TextField
        id="outlined-size-normal"
        variant="outlined"
        placeholder="Enter your Town Name"
        fullWidth
        className={classes.textArea}
      />
      <Typography variant="body1" className={classes.labelTextField}>
        Name
      </Typography>
      <TextField
        id="outlined-size-normal"
        placeholder="Email Address"
        variant="outlined"
        fullWidth
        className={classes.textArea}
      />
      <div className={classes.actionButtons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.exploreHomeButton}
        >
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default WirelessRequestForm;
