import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import isEmpty from "lodash.isempty";
import * as Yup from "yup";
import { Form as FormikForm, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router";
import AnimateButton from "../../../../ui-component/extended/AnimateButton";
import StatusIcon from "../../../../components/StatusIcon";
import Dialog from "../../../../components/Dialog";
import { SIGN_IN } from "../../../../api/Mutations/Customers";
import { encrypt } from "../../../../utils/encryptDecrypt";
import ErrorHandler from "../../../../utils/errorHandler";
import { GET_SIGNED_IN_CUSTOMER } from "../../../../api/Queries/Authentication/GetSignedInCustomer";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: Yup.string().required("Please enter your password"),
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
  dialogContent: {
    textAlign: "center",
  },
}));

//= ===========================|| PASSWORD RESET ||============================//

const LoginForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [signInDetails, setSignInDetails] = React.useState({
    open: false,
    status: false,
    message: "",
    body: "",
  });

  const buttonDisabledStatus = (errors, values, loading) => {
    let status = true;
    if (
      isEmpty(errors) &&
      values.email !== "" &&
      values.password !== "" &&
      loading === false
    ) {
      status = false;
    }
    return status;
  };

  const { open, status, message, body } = signInDetails;
  const closeDialog = () => {
    setSignInDetails({ open: false, status: false, message: "", body });
  };

  const [SignInMutation, { loading }] = useMutation(SIGN_IN);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: null,
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, actions) => {
          SignInMutation({
            variables: {
              email: encrypt(values.email),
              password: encrypt(values.password),
            },
            refetchQueries: [
              {
                query: GET_SIGNED_IN_CUSTOMER,
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
                navigate("/");
              } else {
                // login error
                setSignInDetails({
                  open: true,
                  status: false,
                  message: signInMessage,
                  body,
                });
              }
            })
            .catch((res) => {
              setSignInDetails({
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
            <FormControl
              fullWidth
              error={Boolean(errors.email)}
              className={classes.loginInput}
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                Email Address / Username
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onChange={(e) => {
                  setFieldValue("email", e.target.value, true);
                }}
                label="Email Address"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              {errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {" "}
                  {errors.email}{" "}
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
                  {loading ? "Please wait..." : "Send Reset Link"}
                </Button>
              </AnimateButton>
            </Box>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
