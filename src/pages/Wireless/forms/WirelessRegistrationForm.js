import "date-fns";
import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import { Form as FormikForm, Formik } from "formik";
import {
  Box,
  Button,
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
import trimNonNumbers from "../../../utils/trimNonNumbers";
import ErrorHandler from "../../../utils/errorHandler";
import Dialog from "../../../components/Dialog";
import StatusIcon from "../../../components/StatusIcon";
import { encrypt } from "../../../utils/encryptDecrypt";
import TimeSlotChips from "../../../components/TimeSlotChips";

const WirelessLeadRegistrationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Name is required, luckily.")
    .min(3, "Please enter a valid name")
    .max(32, "Please enter a valid name"),
  sponsorMsisdn: Yup.string()
    .min(9, "The entered phone number is too short")
    .max(12, "The entered phone number is too long")
    .required("Mobile number is required"),
  productId: Yup.string().required("Which package are you interested in?"),
  preferredDate: Yup.string().required("When can we call you?"),
  productType: Yup.string().required(
    "Where do you wish to use the router? Home or Business"
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
    justifyContent: "left",
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
    backgroundColor: theme.palette.white.dark,
  },
  getConnectedButton: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
    height: "30px",
    width: 150,
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: "8px",
    height: "25px",
    width: "133px",
    fontSize: "12px",
  },
  dialogContent: {
    textAlign: "center",
  },
  packageName: {
    fontWeight: 700,
  },
  productListing: {
    wordWrap: "break-word",
    whiteSpace: "nowrap",
  },
  helperLink: {
    color: theme.palette.primary.main,
  },
}));

const homePackages = [
  {
    productId: 9300001,
    packageName: "4G Wireless",
    packagePrice: "Ksh. 2,999",
    packageBandwidth: "Bronze",
  },
  {
    productId: 9300002,
    packageName: "4G Wireless",
    packagePrice: "Ksh. 4,100",
    packageBandwidth: "Silver",
  },
  {
    productId: 9300003,
    packageName: "4G Wireless",
    packagePrice: "Ksh. 6,299",
    packageBandwidth: "Gold",
  },
  {
    productId: 9300004,
    packageName: "4G Wireless",
    packagePrice: "Ksh. 12,499",
    packageBandwidth: "Diamond",
  },
];

const businessPackages = [
  {
    productId: 93001003,
    packageName: "Fixed  Wireless",
    packagePrice: "Ksh 32,997",
    packageBandwidth: "3 MBPS",
  },
  {
    productId: 93005005,
    packageName: "Fixed  Wireless",
    packagePrice: "Ksh 54,995",
    packageBandwidth: "5 MBPS",
  },
];

const WirelessRegistrationForm = (props) => {
  const classes = useStyles();
  const {
    estateId,
    areaName,
    streetName,
    regionId,
    inputEstate,
    setSuccessfulRegistration,
    setLeadDetails,
    setFormTwoCollapsed,
    setFormOneCollapsed,
  } = props;

  const chipData = [
    { key: 0, label: "Morning: 8 - 10am" },
    { key: 1, label: "Morning: 10 -12 pm" },
    { key: 2, label: "Afternoon: 12 - 1 pm" },
    { key: 3, label: "Afternoon: 1 - 3 pm" },
    { key: 4, label: "Evening: 3 -5 pm" },
    { key: 5, label: "Evening: 5 - 7 pm" },
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
  const [selectedDate, setSelectedDate] = React.useState(
    moment().format("YYYY-MM-DD")
  );

  const mappedProducts = (productTypeSelection) => {
    if (
      productTypeSelection === "4G for Home" ||
      productTypeSelection === "Home"
    ) {
      return homePackages;
    }
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
      <Formik
        initialValues={{
          fullName: "",
          sponsorMsisdn: "",
          emailAddress: "",
          productType: "Home",
          productId: 9300001,
          addOns: "",
          preferredDate: moment().format("YYYY-MM-DD"),
        }}
        validationSchema={WirelessLeadRegistrationSchema}
        onSubmit={(values) => {
          CreateCustomerMutation({
            variables: {
              input: {
                firstName: encrypt(values.fullName.split(" ")[0]), // Non Nullable
                middleName:
                  values.fullName.split(" ")[1] ||
                  values.fullName.split(" ")[2],
                lastName: values.fullName.split(" ")[2] || "",
                sponsorMsisdn: encrypt(values.sponsorMsisdn), // Non Nullable
                sponsorAlternativeMsisdn: "",
                emailAddress: encrypt(values.emailAddress), // Non Nullable
                productId: Number(values.productId), // Non Nullable
                preferredDate: values.preferredDate, // Non Nullable
                preferredTimePeriod: preferredTime, // Non Nullable
                passedEstateId: estateId, // Non Nullable
                areaName,
                regionId: Number(regionId), // Non Nullable
                streetName,
                newEstateName: inputEstate,
                houseNumber: "",
                doctypeId: "",
                documentNumber: "",
                productType: values.productType, // Non Nullable
                addOns: "",
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
                setRegisterLeadDetails({
                  open: true,
                  status: customerStatus,
                  message: customerMessage,
                });
              }
            })
            .catch((res) => {
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
                    const clean = trimNonNumbers(e.target.value);
                    setFieldValue("sponsorMsisdn", clean, true);
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
                  Connect Business/Home
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
                    <MenuItem value="4G for Home">4G for Home</MenuItem>
                    <MenuItem value="4G for Business">4G for Business</MenuItem>
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
                        <Typography className={classes.productListing}>
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
                    onChange={(dateValue) => {
                      setFieldValue("preferredDate", dateValue);
                      setSelectedDate(dateValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        defaultValue={moment().format("YYYY-MM-DD")}
                        helperText={params?.inputProps?.placeholder}
                      />
                    )}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box component="ul" className={classes.chips}>
                  <TimeSlotChips
                    setPreferredTime={setPreferredTime}
                    preferredTime={preferredTime}
                    chipData={chipData}
                    className={classes.chip}
                    selectedDate={selectedDate}
                  />
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
              color="default"
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

WirelessRegistrationForm.propTypes = {
  estateId: PropTypes.number.isRequired,
  regionId: PropTypes.number.isRequired,
  areaName: PropTypes.string.isRequired,
  streetName: PropTypes.string.isRequired,
  inputEstate: PropTypes.string.isRequired,
  setSuccessfulRegistration: PropTypes.func,
  setFormTwoCollapsed: PropTypes.func,
  setFormOneCollapsed: PropTypes.func,
};

export default React.memo(WirelessRegistrationForm);
