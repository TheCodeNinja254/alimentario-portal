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
import { IconTrash } from "@tabler/icons";
import { GET_SIGNED_IN_CUSTOMER } from "../../../api/Queries/Authentication/GetSignedInCustomer";
import ErrorHandler from "../../../utils/errorHandler";
import Dialog from "../../../components/Dialog";
import StatusIcon from "../../../components/StatusIcon";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import { SIGN_IN } from "../../../api/Mutations/Customers";

const EditAccountInfoSchema = Yup.object().shape({
  deleteReason: Yup.string().nullable(),
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

const DeleteAccountSchema = () => {
  const classes = useStyles();

  const [deleteAccountDetails, setDeleteAccountDetails] = React.useState({
    open: false,
    status: false,
    message: "",
    body: "",
  });

  const buttonDisabledStatus = (errors, loading) => {
    let status = true;
    if (isEmpty(errors) && loading === false) {
      status = false;
    }
    return status;
  };

  const { open, status, message, body } = deleteAccountDetails;
  const closeDialog = () => {
    setDeleteAccountDetails({ open: false, status: false, message: "", body });
  };

  const [SignInMutation, { loading }] = useMutation(SIGN_IN);

  return (
    <>
      <Formik
        initialValues={{
          deleteReason: "",
          submit: null,
        }}
        validationSchema={EditAccountInfoSchema}
        onSubmit={(values, actions) => {
          SignInMutation({
            variables: {
              deleteReason: values.deleteReason || "",
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
                setDeleteAccountDetails({
                  open: true,
                  status: true,
                  message: signInMessage,
                  body,
                });
              } else {
                // login error
                setDeleteAccountDetails({
                  open: true,
                  status: false,
                  message: signInMessage,
                  body,
                });
              }
            })
            .catch((res) => {
              setDeleteAccountDetails({
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
                        ? "Account deleted successfully"
                        : "Something went wrong!"
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
                  error={Boolean(errors.deleteReason)}
                  className={classes.inputField}
                >
                  <InputLabel htmlFor="outlined-adornment-delete-login">
                    Why do you wish to delete the account?
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-delete-login"
                    type="text"
                    value={values.deleteReason}
                    name="deleteReason"
                    onChange={(e) => {
                      setFieldValue("deleteReason", e.target.value, true);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <IconTrash />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Why do you wish to delete the account?"
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {errors.deleteReason && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-delete-login"
                    >
                      {errors.deleteReason}
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
                      disabled={buttonDisabledStatus(errors, loading)}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="secondary"
                    >
                      {loading ? "Please wait..." : "Delete Your Account"}
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

export default DeleteAccountSchema;
