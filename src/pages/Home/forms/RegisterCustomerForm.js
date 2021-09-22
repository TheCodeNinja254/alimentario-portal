import "date-fns";
import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import { Form as FormikForm, Formik } from "formik";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@material-ui/core";
import isEmpty from "lodash.isempty";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { CREATE_CUSTOMER } from "../../../api/Mutations/Customers";
import ErrorHandler from "../../../utils/errorHandler";
import Dialog from "../../../components/Dialog";
import StatusIcon from "../../../components/StatusIcon";

const LeadRegistrationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Name is required, luckily.")
    .min(3, "Please enter a valid name"),
  sponsorMsisdn: Yup.string()
    .min(9)
    .max(12)
    .required("Mobile number is required"),
  productId: Yup.string().required("Which package are you interested in?"),
  preferredDate: Yup.string().required("When can we call you?"),
  productType: Yup.string().required(
    "Where do you wish to have the connection? Home or Business"
  ),
  emailAddress: Yup.string()
    .required("Email address is required. We won't spam you. We promise.")
    .email("The email address provided is invalid"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2),
    height: "100%",
    backgroundColor: theme.palette.white.main,
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
    fontWeight: 700,
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
    borderRadius: "8px",
    height: "39px",
    width: "133px",
    fontSize: "12px",
  },
  formSubtitle: {
    fontSize: 13,
    fontWeight: 500,
  },
  dialogContent: {
    textAlign: "center",
  },
}));

const RegisterCustomerForm = (props) => {
  const classes = useStyles();
  const { estateId, areaName, streetName, inputEstate } = props;
  const history = useHistory();

  const chipData = [
    { key: 0, label: "Morning: 8 - 10am" },
    { key: 1, label: "Afternoon: 12 - 3 pm" },
    { key: 2, label: "Evening: 3 -5 pm" },
    { key: 3, label: "Morning: 10 -12 pm" },
    { key: 4, label: "Afternoon: 1 - 3 pm" },
    { key: 5, label: "Night: 5 - 8 pm" },
  ];

  const buttonDisabledStatus = (errors, values, loading) => {
    let buttonStatus = true;
    if (
      isEmpty(errors) &&
      values.fullName !== "" &&
      values.sponsorMsisdn !== "" &&
      values.emailAddress !== "" &&
      values.productType !== "" &&
      values.productId !== "" &&
      values.preferredDate !== null &&
      loading === false
    ) {
      buttonStatus = false;
    }
    return buttonStatus;
  };

  const [registerLeadDetails, setRegisterLeadDetails] = React.useState({
    open: false,
    status: false,
    message: "",
  });

  const [preferredTime, setPreferredTime] = React.useState("");

  const [CreateCustomerMutation, { loading }] = useMutation(CREATE_CUSTOMER);

  const { open, status, message } = registerLeadDetails;
  const closeDialog = () => {
    setRegisterLeadDetails({ open: false, status: false, message: "" });
  };

  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <Typography variant="h3" className={classes.formHeader}>
          Get Connected to Safaricom Fibre
        </Typography>
        <Typography className={classes.formSubtitle} gutterBottom>
          Please fill out the form below and we will be in touch with you within
          24 hours
        </Typography>
        <Formik
          initialValues={{
            fullName: "",
            sponsorMsisdn: "",
            emailAddress: "",
            productType: "Home",
            productId: "3",
          }}
          validationSchema={LeadRegistrationSchema}
          onSubmit={(values) => {
            CreateCustomerMutation({
              variables: {
                input: {
                  firstName: values.fullName.split(" ")[0],
                  middleName:
                    values.fullName.split(" ")[1] === ""
                      ? values.fullName.split(" ")[1]
                      : values.fullName.split(" ")[2],
                  lastName: values.fullName.split(" ")[2] || "",
                  sponsorMsisdn: values.sponsorMsisdn,
                  sponsorAlternativeMsisdn: "",
                  emailAddress: values.emailAddress,
                  productId: Number(values.productId),
                  preferredDate: values.preferredDate,
                  preferredTimePeriod: preferredTime,
                  passedEstateId: estateId,
                  areaName,
                  streetName,
                  nonCoveredEstateName: inputEstate,
                  houseNumber: "",
                  doctypeId: "",
                  documentNumber: "",
                  productType: values.productType,
                },
              },
            })
              .then((response) => {
                const {
                  data: {
                    createLead: {
                      status: customerStatus,
                      message: customerMessage,
                      estateName,
                      preferredDate,
                      preferredTimePeriod,
                      crqNumber,
                    },
                  },
                } = response;
                if (customerStatus) {
                  history.push({
                    pathname: "/confirmation",
                    state: {
                      returnType: "registrationSubmission",
                      estateName,
                      preferredDate,
                      preferredTimePeriod,
                      crqNumber,
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
                  Name
                </Typography>
                <TextField
                  fullWidth
                  placeholder="E.g John Doe"
                  margin="normal"
                  name="fullName"
                  error={!!errors.fullName}
                  helperText={errors.fullName || null}
                  onChange={(e) => {
                    setFieldValue("fullName", e.target.value, true);
                  }}
                  value={values.fullName}
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
                  name="sponsorMsisdn"
                  error={!!errors.sponsorMsisdn}
                  helperText={errors.sponsorMsisdn || null}
                  onChange={(e) => {
                    setFieldValue("sponsorMsisdn", e.target.value, true);
                  }}
                  value={values.sponsorMsisdn}
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
                  name="emailAddress"
                  error={!!errors.emailAddress}
                  helperText={errors.emailAddress || null}
                  onChange={(e) => {
                    setFieldValue("emailAddress", e.target.value, true);
                  }}
                  value={values.emailAddress}
                  variant="outlined"
                  className={classes.textFieldWithLable}
                />
                <Typography variant="subtitle2" gutterBottom>
                  Connection for Business/Home
                </Typography>
                <TextField
                  id="standard-select-currency-native"
                  select
                  fullWidth
                  placeholder="E.g Business"
                  margin="normal"
                  name="productType"
                  variant="outlined"
                  className={classes.textFieldWithLable}
                  error={!!errors.productType}
                  helperText={errors.productType || null}
                  onChange={(e) => {
                    setFieldValue("productType", e.target.value, true);
                  }}
                  value={values.productType}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option key="business" value="Business">
                    Business
                  </option>
                  <option key="personal" value="Home">
                    Home
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
                  name="productId"
                  variant="outlined"
                  className={classes.textFieldWithLable}
                  error={!!errors.productId}
                  helperText={errors.productId || null}
                  onChange={(e) => {
                    setFieldValue("productId", e.target.value, true);
                  }}
                  value={values.productId}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option key="1" value="1">
                    Bronze
                  </option>
                  <option key="2" value="2">
                    Silver
                  </option>
                  <option key="3" value="3">
                    Gold
                  </option>
                  <option key="4" value="4">
                    Diamond
                  </option>
                </TextField>
                <Typography variant="subtitle2" gutterBottom>
                  Preferred call date and times
                </Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    name="preferredDate"
                    required
                    minDate={moment().format("YYYY-MM-DD")}
                    format="dd/MM/yyyy"
                    inputVariant="outlined"
                    className={classes.textFieldWithLable}
                    error={!!errors.preferredDate}
                    helperText={errors.preferredDate || null}
                    onChange={(dateValue) =>
                      setFieldValue("preferredDate", dateValue)
                    }
                    value={values.preferredDate}
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
                          color={
                            data.label === preferredTime ? "primary" : "default"
                          }
                          className={classes.chip}
                          onClick={() => setPreferredTime(data.label)}
                        />
                      </li>
                    );
                  })}
                </Box>
                <Button
                  color="primary"
                  disabled={buttonDisabledStatus(errors, values, loading)}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  {loading ? "Please wait..." : "Get Connected"}
                </Button>
              </Box>
            </FormikForm>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

RegisterCustomerForm.propTypes = {
  estateId: PropTypes.string.isRequired,
  areaName: PropTypes.array.isRequired,
  streetName: PropTypes.array.isRequired,
  inputEstate: PropTypes.array.isRequired,
};

export default React.memo(RegisterCustomerForm);
