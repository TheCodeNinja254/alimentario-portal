import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { Form as FormikForm, Formik } from "formik";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import * as Yup from "yup";
import isEmpty from "lodash.isempty";
import { useMutation } from "@apollo/client";
import { Grid } from "@mui/material";
import { IconPhone, IconUser } from "@tabler/icons";
import { encrypt } from "../../../utils/encryptDecrypt";
import { GET_SIGNED_IN_CUSTOMER } from "../../../api/Queries/Authentication/GetSignedInCustomer";
import ErrorHandler from "../../../utils/errorHandler";
import Dialog from "../../../components/Dialog";
import StatusIcon from "../../../components/StatusIcon";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import { SIGN_IN } from "../../../api/Mutations/Customers";

const EditAccountInfoSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  msisdn: Yup.string()
    .min(9)
    .max(12)
    .required("Please enter your mobile number"),
});

// style constant
const useStyles = makeStyles((theme) => ({
  inputField: {
    ...theme.typography.customInput,
  },
  dialogContent: {
    textAlign: "center",
  },
}));

const EditAccountInfoForm = () => {
  const classes = useStyles();

  const [updateAccountDetails, setUpdateAccountDetails] = React.useState({
    open: false,
    status: false,
    message: "",
    body: "",
  });

  const buttonDisabledStatus = (errors, values, loading) => {
    let status = true;
    if (
      isEmpty(errors) &&
      values.firstName !== "" &&
      values.lastName !== "" &&
      values.msisdn !== "" &&
      loading === false
    ) {
      status = false;
    }
    return status;
  };

  const { open, status, message, body } = updateAccountDetails;
  const closeDialog = () => {
    setUpdateAccountDetails({ open: false, status: false, message: "", body });
  };

  const [SignInMutation, { loading }] = useMutation(SIGN_IN);

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          msisdn: "",
          submit: null,
        }}
        validationSchema={EditAccountInfoSchema}
        onSubmit={(values, actions) => {
          SignInMutation({
            variables: {
              firstName: values.firstName,
              lastName: values.lastName,
              msisdn: encrypt(values.msisdn),
            },
            refetchQueries: [
              {
                query: GET_SIGNED_IN_CUSTOMER,
                variables: { awaitRefetchQueries: true },
              },
            ],
          })
            .then((response) => {
              const {
                data: {
                  customerAuthentication: {
                    status: signInStatus,
                    message: signInMessage,
                  },
                },
              } = response;
              if (signInStatus) {
                actions.resetForm();
                setUpdateAccountDetails({
                  open: true,
                  status: true,
                  message: signInMessage,
                  body,
                });
              } else {
                // login error
                setUpdateAccountDetails({
                  open: true,
                  status: false,
                  message: signInMessage,
                  body,
                });
              }
            })
            .catch((res) => {
              setUpdateAccountDetails({
                open: true,
                status: false,
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
                    text={
                      status
                        ? "Account Info Updated Successfully"
                        : "Your information could not be saved."
                    }
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

            <Grid container spacing={0} direction="row">
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormControl
                  fullWidth
                  error={Boolean(errors.firstName)}
                  className={classes.inputField}
                >
                  <InputLabel htmlFor="outlined-adornment-password-login">
                    First Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-login"
                    type="text"
                    value={values.firstName}
                    name="firstName"
                    onChange={(e) => {
                      setFieldValue("firstName", e.target.value, true);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <IconUser />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="First Name"
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {errors.firstName && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.firstName}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  fullWidth
                  error={Boolean(errors.lastName)}
                  className={classes.inputField}
                >
                  <InputLabel htmlFor="outlined-adornment-password-login">
                    Last Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-last-name-login"
                    type="text"
                    value={values.lastName}
                    name="lastName"
                    onChange={(e) => {
                      setFieldValue("lastName", e.target.value, true);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <IconUser />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Last Name"
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {errors.lastName && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-last-name-login"
                    >
                      {errors.lastName}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  fullWidth
                  error={Boolean(errors.msisdn)}
                  className={classes.inputField}
                >
                  <InputLabel htmlFor="outlined-adornment-msisdn-login">
                    Mobile Number
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-msisdn-login"
                    type="text"
                    value={values.msisdn}
                    name="msisdn"
                    onChange={(e) => {
                      setFieldValue("msisdn", e.target.value, true);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <IconPhone />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Mobile Number"
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {errors.msisdn && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-msisdn-login"
                    >
                      {" "}
                      {errors.msisdn}{" "}
                    </FormHelperText>
                  )}
                </FormControl>

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
                      disabled={buttonDisabledStatus(errors, values, loading)}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="secondary"
                    >
                      {loading ? "Please wait..." : "Save Account Info"}
                    </Button>
                  </AnimateButton>
                </Box>
              </Grid>
            </Grid>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default EditAccountInfoForm;
