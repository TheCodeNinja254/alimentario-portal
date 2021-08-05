import React from "react";
import {Box, Button, Divider, FormControl, Grid, InputAdornment, OutlinedInput, Typography,} from "@material-ui/core";
import {Form as FormikForm, Formik} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import * as Yup from "yup";
import isEmpty from "lodash.isempty";
import {useMutation} from "@apollo/client";
import {useHistory} from "react-router-dom";
import ErrorHandler from "../../../utils/errorHandler";
import Dialog from "../../../components/Dialog";
import StatusIcon from "../../../components/StatusIcon";
import {CHECK_TICKET_STATUS} from "../../../api/Mutations/Customers";

const LeadStatusSchema = Yup.object().shape({
  crqNumber: Yup.string()
    .required("Enter the ticket number sent on SMS to see current status")
    .min(13, "Please enter a valid name"),
});

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
  dialogContent: {
    textAlign: "center",
  },
}));

const TicketStatusCheckForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const buttonDisabledStatus = (errors, values, loading) => {
    let buttonStatus = true;
    if (isEmpty(errors) && values.crqNumber !== "" && loading === false) {
      buttonStatus = false;
    }
    return buttonStatus;
  };

  const [CheckLeadDetailsMutation, { loading }] =
    useMutation(CHECK_TICKET_STATUS);

  const [registerLeadDetails, setRegisterLeadDetails] = React.useState({
    open: false,
    status: false,
    message: "",
  });

  const { open, status, message } = registerLeadDetails;
  const closeDialog = () => {
    setRegisterLeadDetails({ open: false, status: false, message: "" });
  };

  return (
    <>
      <Typography variant="h3" className={classes.formHeader}>
        Have a ticket number, check the status of your request here
      </Typography>
      <Formik
        initialValues={{
          crqNumber: "",
        }}
        validationSchema={LeadStatusSchema}
        onSubmit={(values) => {
          CheckLeadDetailsMutation({
            variables: {
              input: {
                crqNumber: values.crqNumber,
              },
            },
          })
            .then((response) => {
              const {
                data: {
                  checkLeadDetails: {
                    getLeadStatus: customerStatus,
                    message: customerMessage,
                    estateName,
                    preferredDate,
                    preferredTimePeriod,
                    crqNumber,
                    firstName,
                    lastName,
                  },
                },
              } = response;
              if (customerStatus) {
                history.push({
                  pathname: "/confirmation",
                  state: {
                    returnType: "statusCheck",
                    estateName,
                    preferredDate,
                    preferredTimePeriod,
                    crqNumber,
                    firstName,
                    lastName,
                  },
                });
              } else {
                // registration error
                setRegisterLeadDetails({
                  open: true,
                  status: customerStatus,
                  message: customerMessage,
                });
              }
            })
            .catch((res) => {
              // error
              setRegisterLeadDetails({
                open: true,
                status: false,
                message: ErrorHandler(
                  res.message || res.graphQLErrors[0].message
                ),
              });
            });
        }}
      >
        {({ errors, setFieldValue, values }) => (
          <FormikForm>
            <Dialog
              open={open}
              modalContent={
                <Box className={classes.dialogContent}>
                  <StatusIcon status={status ? "success" : "error"} />
                  <Typography variant="body1"> {message}</Typography>
                </Box>
              }
              modalActions={
                <Button
                  variant="contained"
                  onClick={() => closeDialog()}
                  color="primary"
                  autoFocus
                >
                  Close
                </Button>
              }
              handleClose={closeDialog}
            />
            <Box className={classes.wrapper}>
              <Typography variant="subtitle2" gutterBottom>
                Enter Ticket Number
              </Typography>
              <FormControl
                className={classes.textFieldWithLable}
                fullWidth
                variant="outlined"
                placeholder="CRQ0000012345"
                name="crqNumber"
                error={!!errors.crqNumber}
                helperText={errors.crqNumber || null}
                onChange={(e) => {
                  setFieldValue("crqNumber", e.target.value, true);
                }}
                value={values.crqNumber}
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <Button
                        color="primary"
                        type="submit"
                        disabled={buttonDisabledStatus(errors, values, loading)}
                        variant="contained"
                      >
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
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default React.memo(TicketStatusCheckForm);
