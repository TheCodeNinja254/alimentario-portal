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
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import * as Yup from "yup";
import isEmpty from "lodash.isempty";
import { useMutation } from "@apollo/client";
import { Grid } from "@mui/material";
import { encrypt } from "../../../utils/encryptDecrypt";
import ErrorHandler from "../../../utils/errorHandler";
import Dialog from "../../../components/Dialog";
import StatusIcon from "../../../components/StatusIcon";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import { SIGN_IN } from "../../../api/Mutations/Customers";
import {
  strengthColor,
  strengthIndicator,
} from "../../../utils/password-strength";

const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string().required("Please enter your password"),
});

// style constant
const useStyles = makeStyles((theme) => ({
  loginInput: {
    ...theme.typography.customInput,
  },
  dialogContent: {
    textAlign: "center",
  },
}));

const ChangePasswordForm = () => {
  const classes = useStyles();

  const [changePasswordDetails, setChangePasswordDetails] = React.useState({
    open: false,
    status: false,
    message: "",
    body: "",
  });

  const buttonDisabledStatus = (errors, values, loading) => {
    let status = true;
    if (isEmpty(errors) && values.password !== "" && loading === false) {
      status = false;
    }
    return status;
  };

  const { open, status, message, body } = changePasswordDetails;
  const closeDialog = () => {
    setChangePasswordDetails({ open: false, status: false, message: "", body });
  };

  const [SignInMutation, { loading }] = useMutation(SIGN_IN);

  const [showPassword, setShowPassword] = React.useState(false);
  const [strength, setStrength] = React.useState(0);
  const [level, setLevel] = React.useState("");

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

  return (
    <>
      <Formik
        initialValues={{
          password: "",
          submit: null,
        }}
        validationSchema={ChangePasswordSchema}
        onSubmit={(values, actions) => {
          SignInMutation({
            variables: {
              password: encrypt(values.password),
            },
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
                setChangePasswordDetails({
                  open: true,
                  status: true,
                  message: signInMessage,
                  body,
                });
              } else {
                // login error
                setChangePasswordDetails({
                  open: true,
                  status: false,
                  message: signInMessage,
                  body,
                });
              }
            })
            .catch((res) => {
              setChangePasswordDetails({
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
                        ? "Password changed successfully"
                        : "Password change failed."
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
                  error={Boolean(errors.password)}
                  className={classes.loginInput}
                >
                  <InputLabel htmlFor="outlined-adornment-password-login">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-login"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    name="password"
                    onChange={(e) => {
                      changePassword(e.target.value);
                      setFieldValue("password", e.target.value, true);
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
                    label="Password"
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
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
                      {loading ? "Please wait..." : "Change Password"}
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

export default ChangePasswordForm;
