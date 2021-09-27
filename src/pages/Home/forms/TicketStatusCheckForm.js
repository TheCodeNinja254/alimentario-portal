import React from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { Form as FormikForm, Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import isEmpty from "lodash.isempty";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import ErrorHandler from "../../../utils/errorHandler";
import Dialog from "../../../components/Dialog";
import StatusIcon from "../../../components/StatusIcon";
import { CHECK_TICKET_STATUS } from "../../../api/Mutations/Customers";

const LeadStatusSchema = Yup.object().shape({
  uniqueIdentity: Yup.string()
    .required("Use your mobile number to check your request's status")
    .min(9, "Please enter a valid mobile number"),
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
    fontSize: 18,
  },
  textFieldWithLable: {
    marginTop: theme.spacing(0),
    backgroundColor: theme.palette.white.main,
  },
  margin: {
    margin: theme.spacing(1),
  },
  dialogContent: {
    textAlign: "center",
  },
  submitButton: {
    marginBottom: theme.spacing(2),
  },
}));

const TicketStatusCheckForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const buttonDisabledStatus = (errors, values, loading) => {
    let buttonStatus = true;
    if (isEmpty(errors) && values.uniqueIdentity !== "" && loading === false) {
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
          uniqueIdentity: "",
        }}
        validationSchema={LeadStatusSchema}
        onSubmit={(values) => {
          CheckLeadDetailsMutation({
            variables: {
              input: {
                uniqueIdentity: values.uniqueIdentity,
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
                    uniqueIdentity,
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
                    uniqueIdentity,
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
                Enter Mobile Number
              </Typography>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="standard"
                placeholder="0722 000 000"
                name="uniqueIdentity"
                error={!!errors.uniqueIdentity}
                helperText={errors.uniqueIdentity || null}
                onChange={(e) => {
                  setFieldValue("uniqueIdentity", e.target.value, true);
                }}
                value={values.uniqueIdentity}
              >
                <Input
                  id="input-with-icon-adornment"
                  endAdornment={
                    <InputAdornment position="start">
                      <Button
                        color="primary"
                        className={classes.submitButton}
                        type="submit"
                        disabled={buttonDisabledStatus(errors, values, loading)}
                        variant="contained"
                      >
                        {loading ? "Please wait" : "Check status"}
                      </Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default TicketStatusCheckForm;
