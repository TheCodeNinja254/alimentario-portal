import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { Box, Button, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TicketStatusCheckForm from "./TicketStatusCheckForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2),
    height: "100%",
    backgroundColor: "rgba(229, 229, 229, 0.3)",
  },
  wrapper: {
    padding: theme.spacing(2),
  },
  formHeader: {
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    textDecoration: "bold",
  },
  textFieldWithLable: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.white.main,
  },
  getConnectedButton: {
    marginTop: theme.spacing(3),
    height: "56px",
  },
}));

const FiberAvailabilityForm = ({ handleChange }) => {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <TicketStatusCheckForm />
        <Typography variant="h3" className={classes.formHeader}>
          Find out if your area is fibre ready
        </Typography>
        <Box className={classes.wrapper}>
          <Typography variant="subtitle2" gutterBottom>
            Enter building name
          </Typography>
          <TextField
            fullWidth
            placeholder="E.g Mayow Apartment"
            margin="normal"
            name="component"
            onChange={handleChange}
            variant="outlined"
            className={classes.textFieldWithLable}
          />
          <Typography variant="subtitle2" gutterBottom>
            Area
          </Typography>
          <TextField
            fullWidth
            placeholder="E.g Kahawa Wendani"
            margin="normal"
            name="component"
            onChange={handleChange}
            variant="outlined"
            className={classes.textFieldWithLable}
          />
          <Typography variant="subtitle2" gutterBottom>
            Road
          </Typography>
          <TextField
            fullWidth
            placeholder="E.g Peponi Road"
            margin="normal"
            name="component"
            onChange={handleChange}
            variant="outlined"
            className={classes.textFieldWithLable}
          />
          <Typography variant="subtitle2" gutterBottom>
            Enter Address
          </Typography>
          <TextField
            fullWidth
            placeholder="Town/Street"
            margin="normal"
            name="component"
            onChange={handleChange}
            variant="outlined"
            className={classes.textFieldWithLable}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled
            className={classes.getConnectedButton}
          >
            Get Connected
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

FiberAvailabilityForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(FiberAvailabilityForm);
