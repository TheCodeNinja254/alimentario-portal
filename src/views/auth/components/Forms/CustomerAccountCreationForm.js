import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router";
import isEmpty from "lodash.isempty";
import { useMutation } from "@apollo/client";
import AnimateButton from "../../../../ui-component/extended/AnimateButton";
import {
  strengthColor,
  strengthIndicator,
} from "../../../../utils/password-strength";
import CUSTOMER_ACCOUNT_CREATION from "../../../../api/Mutations/CustomerAccount";
import { encrypt } from "../../../../utils/encryptDecrypt";
import { GET_SIGNED_IN_CUSTOMER } from "../../../../api/Queries/Authentication/GetSignedInCustomer";
import { GET_CART_ITEMS } from "../../../../api/Queries/Cart/GetCartItems";
import ErrorHandler from "../../../../utils/errorHandler";
import Dialog from "../../../../components/Dialog";
import StatusIcon from "../../../../components/StatusIcon";
import trimNonNumbers from "../../../../utils/trimNonNumbers";

const CustomerAccountCreationSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: Yup.string().required("Create a password for your auth"),
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Name is required"),
  msisdn: Yup.string().min(9).max(12).required("Mobile number is required."),
});

// style constant
const useStyles = makeStyles((theme) => ({
  redButton: {
    fontSize: "1rem",
    fontWeight: 500,
    backgroundColor: theme.palette.grey[50],
    border: "1px solid",
    borderColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  signDivider: {
    flexGrow: 1,
  },
  signText: {
    cursor: "unset",
    margin: theme.spacing(2),
    padding: "5px 56px",
    borderColor: `${theme.palette.grey[100]} !important`,
    color: `${theme.palette.grey[900]}!important`,
    fontWeight: 500,
  },
  loginIcon: {
    marginRight: "16px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "8px",
    },
  },
  loginInput: {
    ...theme.typography.customInput,
  },
}));

const CustomerAccountCreationForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [showPassword, setShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState("");

  const [registerDetails, setRegisterDetails] = React.useState({
    open: false,
    status: false,
    message: "",
    messageHeader: "Account creation failed",
    body: "",
  });

  const buttonDisabledStatus = (errors, values, loading) => {
    let status = true;
    if (
      isEmpty(errors) &&
      values.emailAddress !== "" &&
      values.firstName !== "" &&
      values.lastName !== "" &&
      values.msisdn !== "" &&
      values.password !== "" &&
      loading === false
    ) {
      status = false;
    }
    return status;
  };

  const { open, status, message, messageHeader, body } = registerDetails;

  const [AccountCreationMutation, { loading }] = useMutation(
    CUSTOMER_ACCOUNT_CREATION
  );

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  const closeDialog = () => {
    setRegisterDetails({ open: false, status: false, message: "", body });
  };

  // useEffect(() => {
  //   changePassword("123456");
  // }, []);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Typography variant="subtitle1">
              Sign up with Email address
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          emailAddress: "",
          firstName: "",
          lastName: "",
          msisdn: "",
          password: "",
          submit: null,
        }}
        validationSchema={CustomerAccountCreationSchema}
        onSubmit={(values, actions) => {
          AccountCreationMutation({
            variables: {
              input: {
                emailAddress: encrypt(values.emailAddress),
                firstName: values.firstName,
                lastName: values.lastName,
                msisdn: encrypt(values.msisdn),
                password: encrypt(values.password),
              },
            },
            refetchQueries: [
              {
                query: GET_SIGNED_IN_CUSTOMER,
                variables: { awaitRefetchQueries: true },
              },
              {
                query: GET_CART_ITEMS,
                variables: { awaitRefetchQueries: true },
              },
            ],
          })
            .then((response) => {
              const {
                data: {
                  customerAccountCreation: {
                    status: mutationStatus,
                    message: customerMessage,
                  },
                },
              } = response;
              if (mutationStatus) {
                actions.resetForm();
                navigate("/", {
                  state: { newInvite: true, firstName: values.firstName },
                });
              } else {
                // auth creation error
                setRegisterDetails({
                  open: true,
                  status: false,
                  messageHeader: "Account creation failed",
                  message: customerMessage,
                  body,
                });
              }
            })
            .catch((res) => {
              // auth creation error
              setRegisterDetails({
                open: true,
                status: false,
                messageHeader: "Account creation failed",
                message: ErrorHandler(
                  res.message || res.graphQLErrors[0].message
                ),
                body,
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
                  <StatusIcon
                    status={status ? "success" : "error"}
                    text={messageHeader}
                  />
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
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  error={Boolean(errors.firstName)}
                  label="First Name"
                  margin="normal"
                  value={values.firstName}
                  name="firstName"
                  onChange={(e) => {
                    setFieldValue("firstName", e.target.value, true);
                  }}
                  type="text"
                  className={classes.loginInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  error={Boolean(errors.email)}
                  label="Last Name"
                  margin="normal"
                  value={values.lastName}
                  name="lastName"
                  onChange={(e) => {
                    setFieldValue("lastName", e.target.value, true);
                  }}
                  type="text"
                  className={classes.loginInput}
                />
              </Grid>
            </Grid>
            <FormControl
              fullWidth
              error={Boolean(errors.emailAddress)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-email-register">
                Email Address
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.emailAddress}
                name="emailAddress"
                onChange={(e) => {
                  setFieldValue("emailAddress", e.target.value, true);
                }}
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {errors.emailAddress && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text--register"
                >
                  {errors.emailAddress}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(errors.msisdn)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-email-msisdn">
                Mobile Phone Number
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-msisdn"
                type="tel"
                value={values.msisdn}
                name="msisdn"
                onChange={(e) => {
                  const clean = trimNonNumbers(e.target.value);
                  setFieldValue("msisdn", clean, true);
                }}
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {errors.msisdn && (
                <FormHelperText error id="standard-weight-helper-text--msisdn">
                  {errors.msisdn}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(errors.password)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-password-register">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                label="Password"
                onChange={(e) => {
                  setFieldValue("password", e.target.value, true);
                  changePassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-register"
                >
                  {" "}
                  {errors.password}{" "}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box
                        backgroundColor={level.color}
                        sx={{
                          width: 85,
                          height: 8,
                          borderRadius: "7px",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="subtitle1">
                      Agree with &nbsp;
                      <Typography variant="subtitle1" component={Link} to="#">
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box
              sx={{
                mt: 2,
              }}
            >
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={
                    buttonDisabledStatus(errors, values, loading) || !checked
                  }
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  {loading ? "Please wait..." : "Sign up"}
                </Button>
              </AnimateButton>
            </Box>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default CustomerAccountCreationForm;
