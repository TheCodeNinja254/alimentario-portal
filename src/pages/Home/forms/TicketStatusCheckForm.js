import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2),
    height: "100%",
    backgroundColor: "#E5E5E5",
    opacity: "90%",
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
  margin: {
    margin: theme.spacing(1),
  },
}));

const TicketStatusCheckForm = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" className={classes.formHeader}>
        Have a ticket number, check the status of your request here
      </Typography>
      <Box className={classes.wrapper}>
        <Typography variant="subtitle2" gutterBottom>
          Enter Ticket Number
        </Typography>
        <FormControl
          className={classes.textFieldWithLable}
          fullWidth
          variant="outlined"
          placeholder="CRQ0000012345"
        >
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <Button color="primary" disabled variant="contained">
                  Check Status
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>
        <Grid container>
          <Grid item lg={5} xl={5} sm={5} xs={5}>
            <Divider />
          </Grid>
          <Grid item lg={2} xl={2} sm={2} xs={2}>
            <Typography variant="subtitle2" gutterBottom>
              OR
            </Typography>
          </Grid>
          <Grid item lg={5} xl={5} sm={5} xs={5}>
            <Divider />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default React.memo(TicketStatusCheckForm);
