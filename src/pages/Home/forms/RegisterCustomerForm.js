import "date-fns";
import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import TicketStatusCheckForm from "./TicketStatusCheckForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2),
    height: "100%",
    backgroundColor: "rgba(229, 229, 229, 0.3)",
    opacity: "90%",
  },
  chips: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  wrapper: {
    padding: theme.spacing(2),
  },
  formHeader: {
    fontWeight: 500,
    marginBottom: theme.spacing(2),
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
  chip: {
    margin: theme.spacing(0.5),
    // backgroundColor: "#E5E5E5",
    borderRadius: "8px",
    height: "39px",
    width: "133px",
    fontSize: "12px",
  },
}));

const RegisterCustomerForm = ({ handleChange }) => {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Morning: 6 - 8am" },
    { key: 1, label: "Afternoon: 11 - 1 pm" },
    { key: 2, label: "Evening: 3 -5 pm" },
    { key: 3, label: "Morning: 8 -10 am" },
    { key: 4, label: "Afternoon: 1 - 3 pm" },
    { key: 5, label: "Night: 6 - 8 pm" },
  ]);

  // eslint-disable-next-line no-unused-vars
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <TicketStatusCheckForm />
        <Typography variant="h3" className={classes.formHeader}>
          Find out if your area is fibre ready
        </Typography>
        <Box className={classes.wrapper}>
          <Typography variant="subtitle2" gutterBottom>
            Name
          </Typography>
          <TextField
            fullWidth
            placeholder="E.g John Doe"
            margin="normal"
            name="component"
            onChange={handleChange}
            variant="outlined"
            className={classes.textFieldWithLable}
          />
          <Typography variant="subtitle2" gutterBottom>
            Phone Number
          </Typography>
          <TextField
            fullWidth
            placeholder="E.g 0700 000 001"
            margin="normal"
            name="component"
            onChange={handleChange}
            variant="outlined"
            className={classes.textFieldWithLable}
          />
          <Typography variant="subtitle2" gutterBottom>
            Email Address
          </Typography>
          <TextField
            fullWidth
            placeholder="E.g johndoe@gmail.com"
            margin="normal"
            name="component"
            onChange={handleChange}
            variant="outlined"
            className={classes.textFieldWithLable}
          />
          <Typography variant="subtitle2" gutterBottom>
            Connection for Business/Personal
          </Typography>
          <TextField
            id="standard-select-currency-native"
            select
            fullWidth
            placeholder="E.g johndoe@gmail.com"
            margin="normal"
            name="component"
            variant="outlined"
            className={classes.textFieldWithLable}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
          >
            <option key="business" value="business">
              Business
            </option>
            <option key="personal" value="persona">
              Personal/Home
            </option>
          </TextField>
          <Typography variant="subtitle2" gutterBottom>
            Package Interested in
          </Typography>
          <TextField
            id="standard-select-currency-native"
            select
            fullWidth
            placeholder="E.g johndoe@gmail.com"
            margin="normal"
            name="component"
            variant="outlined"
            className={classes.textFieldWithLable}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
          >
            <option key="bronze" value="bronze">
              Bronze
            </option>
            <option key="silver" value="silver">
              Silver
            </option>
          </TextField>
          <Typography variant="subtitle2" gutterBottom>
            Package Interested in
          </Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              name="activationDate"
              required
              minDate={moment().format("YYYY-MM-DD")}
              format="dd/MM/yyyy"
              inputVariant="outlined"
              className={classes.textFieldWithLable}
              onChange={handleChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </MuiPickersUtilsProvider>
          <Box component="ul" className={classes.chips}>
            {chipData.map((data) => {
              return (
                <li key={data.key}>
                  <Chip
                    label={data.label}
                    color="primary"
                    className={classes.chip}
                  />
                </li>
              );
            })}
          </Box>
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

RegisterCustomerForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(RegisterCustomerForm);
