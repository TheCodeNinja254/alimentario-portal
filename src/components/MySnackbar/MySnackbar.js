import React from "react";
import { Alert, Snackbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

// style constant
const useStyles = makeStyles((theme) => ({
  alertMessage: {
    color: theme.palette.common.white,
  },
}));
const MySnackbar = ({ open, message, severity, setOpen }) => {
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
        variant="filled"
      >
        <Typography className={classes.alertMessage}>{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

MySnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MySnackbar;
