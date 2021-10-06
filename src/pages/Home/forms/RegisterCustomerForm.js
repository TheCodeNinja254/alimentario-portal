import "date-fns";
import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import { Form as FormikForm, Formik } from "formik";
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import isEmpty from "lodash.isempty";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";
import PropTypes from "prop-types";
import moment from "moment";
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
  addOns: Yup.string().nullable(),
  emailAddress: Yup.string()
    .required("Email address is required. We won't spam you. We promise.")
    .email("The email address provided is invalid"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.white.main,
    opacity: "90%",
  },
  chips: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    margin: 0,
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
    marginRight: theme.spacing(3),
    height: "30px",
    width: 150,
  },
  chip: {
    margin: theme.spacing(1),
    borderRadius: "8px",
    height: "25px",
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
  packageName: {
    fontWeight: 500,
  },
}));

const homePackages = [
  {
    productId: 1,
    packageName: "Bronze",
    packagePrice: "Kshs 2,999",
    packageBandwidth: "8 MBPS",
  },
  {
    productId: 2,
    packageName: "Silver",
    packagePrice: "Kshs 4,100",
    packageBandwidth: "20 MBPS",
  },
  {
    productId: 3,
    packageName: "Gold",
    packagePrice: "Kshs 6,299",
    packageBandwidth: "40 MBPS",
  },
  {
    productId: 4,
    packageName: "Diamond",
    packagePrice: "Kshs 12,499",
    packageBandwidth: "100 MBPS",
  },
];

const businessPackages = [
  {
    productId: 5,
    packageName: "Small offices of 1-10 users",
    packagePrice: "Ksh 4,100",
    packageBandwidth: "3 MBPS",
  },
  {
    productId: 6,
    packageName: "Median offices of 10-20 users",
    packagePrice: "Ksh 5,799",
    packageBandwidth: "5 MBPS",
  },
  {
    productId: 7,
    packageName: "Medium offices of 20-30 users",
    packagePrice: "Ksh 15,699",
    packageBandwidth: "10 MBPS",
  },
];

const RegisterCustomerForm = (props) => {
  const classes = useStyles();
  const {
    estateId,
    areaName,
    streetName,
    inputEstate,
    setSuccessfulRegistration,
    setLeadDetails,
    setFormTwoCollapsed,
    setFormOneCollapsed,
  } = props;

  const chipData = [
    { key: 0, label: "Morning: 8 - 10am" },
    { key: 1, label: "Afternoon: 12 - 1 pm" },
    { key: 2, label: "Evening: 3 -5 pm" },
    { key: 3, label: "Morning: 10 -12 pm" },
    { key: 4, label: "Afternoon: 1 - 3 pm" },
    { key: 5, label: "Night: 5 - 7 pm" },
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

  const [selectedProductType, setSelectedProductType] = React.useState("Home");
  const [hideAddonView, setHideAddonView] = React.useState(false);

  const mappedProducts = (productTypeSelection) => {
    if (productTypeSelection === "Home") {
      setHideAddonView(false);
      return homePackages;
    }
    setHideAddonView(true);
    return businessPackages;
  };

  const [preferredTime, setPreferredTime] = React.useState("");

  const [CreateCustomerMutation, { loading }] = useMutation(CREATE_CUSTOMER);

  const { open, status, message } = registerLeadDetails;
  const closeDialog = () => {
    setRegisterLeadDetails({ open: false, status: false, message: "" });
  };

  const returnToCheckAvailability = () => {
    setFormOneCollapsed(true);
    setFormTwoCollapsed(false);
    setSuccessfulRegistration(false);
  };

  return (
    <div>
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
          addOns: "",
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
                addOns: values.addOns,
              },
            },
          })
            .then((response) => {
              const {
                data: {
                  createLead: {
                    status: customerStatus,
                    message: customerMessage,
                    preferredDate,
                    preferredTimePeriod,
                  },
                },
              } = response;
              if (customerStatus) {
                setSuccessfulRegistration(true);
                setFormTwoCollapsed(false);
                setFormOneCollapsed(false);
                setLeadDetails({
                  preferredDate,
                  preferredTimePeriod,
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
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                  variant="standard"
                  className={classes.textFieldWithLable}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                  variant="standard"
                  className={classes.textFieldWithLable}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                  variant="standard"
                  className={classes.textFieldWithLable}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Connection for Business/Home
                </Typography>
                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    fullWidth
                    error={!!errors.productType}
                    helperText={errors.productType || null}
                    onChange={(e) => {
                      setFieldValue("productType", e.target.value, true);
                      setSelectedProductType(e.target.value);
                    }}
                    value={values.productType}
                  >
                    <MenuItem value="Home">Home</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Package Interested in
                </Typography>
                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="demo-simple-select-standard-label-products"
                    id="demo-simple-select-standard-products"
                    fullWidth
                    error={!!errors.productId}
                    helperText={errors.productId || null}
                    onChange={(e) => {
                      setFieldValue("productId", e.target.value, true);
                    }}
                    value={values.productId}
                  >
                    {mappedProducts(selectedProductType).map((product) => (
                      <MenuItem
                        value={product.productId}
                        key={product.productId}
                      >
                        <Typography>
                          <span className={classes.packageName}>
                            {product.packageName}
                          </span>
                          <span>
                            {" "}
                            {product.packageBandwidth} | {product.packagePrice}
                          </span>
                        </Typography>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                hidden={hideAddonView}
              >
                <Typography variant="subtitle2" gutterBottom>
                  Addons
                </Typography>
                <FormControl variant="standard" fullWidth>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    fullWidth
                    error={!!errors.addOns}
                    helperText={errors.addOns || null}
                    onChange={(e) => {
                      setFieldValue("addOns", e.target.value, true);
                    }}
                    value={values.addOns}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Secure Net">Secure Net</MenuItem>
                    <MenuItem value="CCTV">CCTV</MenuItem>
                    <MenuItem value="Home Insurance">Home Insurance</MenuItem>
                    <MenuItem value="Smart TV Box">Smart TV Box</MenuItem>
                    <MenuItem value="WiFi Extender">WiFi Extender</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Preferred call date and times
                </Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    disablePast
                    required
                    fullWidth
                    value={values.preferredDate}
                    error={!!errors.preferredDate}
                    animateYearScrolling
                    minDate={moment().format("YYYY-MM-DD")}
                    format="dd/MM/yyyy"
                    onChange={(dateValue) =>
                      setFieldValue("preferredDate", dateValue)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        helperText={params?.inputProps?.placeholder}
                      />
                    )}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
              </Grid>
            </Grid>
            <Button
              color="primary"
              className={classes.getConnectedButton}
              disabled={buttonDisabledStatus(errors, values, loading)}
              size="small"
              type="submit"
              variant="contained"
            >
              {loading ? "Please wait..." : "Submit Request"}
            </Button>
            <Button
              color="secondary"
              onClick={() => returnToCheckAvailability()}
              className={classes.getConnectedButton}
              size="small"
              variant="contained"
            >
              Cancel
            </Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

RegisterCustomerForm.propTypes = {
  estateId: PropTypes.number.isRequired,
  areaName: PropTypes.string.isRequired,
  streetName: PropTypes.string.isRequired,
  inputEstate: PropTypes.string.isRequired,
  setSuccessfulRegistration: PropTypes.func,
  setFormTwoCollapsed: PropTypes.func,
  setFormOneCollapsed: PropTypes.func,
};

export default React.memo(RegisterCustomerForm);
