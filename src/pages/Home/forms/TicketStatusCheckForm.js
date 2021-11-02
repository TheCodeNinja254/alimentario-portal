import React from "react";
import {
  Box,
  Button,
  Divider,
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
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import moment from "moment";
import { InfoRounded } from "@material-ui/icons";
import ErrorHandler from "../../../utils/errorHandler";
import Dialog from "../../../components/Dialog";
import { CHECK_TICKET_STATUS } from "../../../api/Mutations/Customers";
import { decrypt, encrypt } from "../../../utils/encryptDecrypt";

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
    marginTop: theme.spacing(2),
    maxWidth: 450,
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
  dialogListBody: {
    height: 100,
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0),
  },
  dialogContent: {
    textAlign: "center",
  },
  ListDialogContent: {
    textAlign: "left",
    margin: theme.spacing(2),
    maxHeight: 500,
    height: "auto",
  },
  dialogIcon: {
    textAlign: "center",
  },
  salutation: {
    fontWeight: 700,
    marginLeft: theme.spacing(2),
  },
  checkIcon: {
    fontSize: 72,
    color: theme.palette.primary.main,
  },
  modalText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  submitButton: {
    marginBottom: theme.spacing(2),
  },
}));

const TicketStatusCheckForm = () => {
  const classes = useStyles();

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

  const { open, message } = registerLeadDetails;

  const [leadListModal, setLeadListModal] = React.useState({
    listModalOpen: false,
    leadsList: [],
  });

  const { listModalOpen, leadsList } = leadListModal;

  const firstName =
    leadsList.length > 0 ? decrypt(leadsList[0].firstName) : " ";

  const closeDialog = () => {
    setRegisterLeadDetails({ open: false, status: false, message: "" });
  };

  const handleClose = () =>
    setLeadListModal({ listModalOpen: false, leadsList: [] });

  return (
    <>
      <Formik
        initialValues={{
          uniqueIdentity: "",
        }}
        validationSchema={LeadStatusSchema}
        onSubmit={(values) => {
          CheckLeadDetailsMutation({
            variables: {
              input: {
                uniqueIdentity: encrypt(values.uniqueIdentity),
              },
            },
          })
            .then((response) => {
              const {
                data: {
                  checkLeadDetails: {
                    getLeadStatus: customerStatus,
                    message: customerMessage,
                    leads,
                  },
                },
              } = response;
              if (customerStatus) {
                setLeadListModal({
                  listModalOpen: true,
                  leadsList: leads,
                  message: customerMessage,
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
                  <Box className={classes.dialogIcon}>
                    <InfoRounded className={classes.checkIcon} />
                  </Box>
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

            <Dialog
              open={listModalOpen}
              modalContent={
                <>
                  <Box className={classes.dialogIcon}>
                    <CheckCircleIcon className={classes.checkIcon} />
                  </Box>
                  <Typography className={classes.salutation}>
                    Hello {firstName}
                  </Typography>
                  <Box className={classes.ListDialogContent}>
                    {leadsList.map((record) => (
                      <div>
                        <Divider />
                        <Typography
                          variant="body1"
                          className={classes.modalText}
                        >
                          Your fiber coverage confirmation request at{" "}
                          {record.estateName} was scheduled for{" "}
                          {moment(record.preferredDate).format("MMMM Do YYYY")}{" "}
                          between {record.preferredTimePeriod}
                        </Typography>
                      </div>
                    ))}
                  </Box>
                </>
              }
              modalActions={
                <Button
                  variant="contained"
                  onClick={() => handleClose()}
                  color="primary"
                >
                  Done
                </Button>
              }
              handleClose={handleClose}
            />
            <Box className={classes.wrapper}>
              <Typography variant="subtitle2" gutterBottom>
                Use your mobile number to check the status of your request
              </Typography>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="standard"
                name="uniqueIdentity"
                onChange={(e) => {
                  setFieldValue("uniqueIdentity", e.target.value, true);
                }}
                value={values.uniqueIdentity}
              >
                <Input
                  id="input-with-icon-adornment"
                  placeholder="Enter phone number"
                  error={!!errors.sponsorMsisdn}
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
