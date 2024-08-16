import React, { useState } from "react";
import isEmpty from "lodash.isempty";
import * as Yup from "yup";
import { Form as FormikForm, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { Alert, AlertTitle, Typography } from "@mui/material";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ErrorHandler from "../../../../utils/errorHandler";
import GetCounties from "../../../../api/Queries/Locations/GetCounties";
import CustomAutoComplete from "../../../../CustomAutoComplete";
import AnimateButton from "../../../../ui-component/extended/AnimateButton";
import { GET_DELIVERY_LOCATIONS } from "../../../../api/Queries/Locations/GetDeliveryLocations";
import GetLocales from "../../../../api/Queries/Locations/GetLocales";
import { ADD_DELIVERY_LOCATION } from "../../../../api/Mutations/Locations";

const AddDeliveryLocationSchema = Yup.object().shape({
  countyId: Yup.number().required("Please select a county"),
  localeId: Yup.number().required("Please select an area"),
  deliveryPreciseLocation: Yup.string().required(
    "This information is required"
  ),
  alternativePhoneNumber: Yup.string().min(9).max(12).nullable(),
});

const useStyles = makeStyles((theme) => ({
  actionButton: {
    marginTop: theme.spacing(2),
  },
  inputField: {
    marginTop: theme.spacing(2),
  },
}));

const AddDeliveryLocationForm = ({ handleClose }) => {
  const classes = useStyles();

  const [submitError, setSubmitError] = useState("");
  const [, setSubmitDetails] = useState("");

  const buttonDisabledStatus = (errors, values, loading) => {
    let status = true;
    if (isEmpty(errors) && values.countyId !== "" && loading === false) {
      status = false;
    }
    return status;
  };

  const [AddDeliverLocationMutation, { loading }] = useMutation(
    ADD_DELIVERY_LOCATION
  );

  return (
    <>
      <Formik
        initialValues={{
          submit: null,
        }}
        validationSchema={AddDeliveryLocationSchema}
        onSubmit={(values) => {
          setSubmitError("");
          setSubmitDetails({
            status: false,
            quantity: "",
            customerSpecification: "",
          });
          AddDeliverLocationMutation({
            variables: {
              input: {
                countyId: Number(values.countyId),
                localeId: Number(values.localeId),
                deliveryPreciseLocation: values.deliveryPreciseLocation,
                alternativePhoneNumber: values.alternativePhoneNumber,
              },
            },
            refetchQueries: [
              {
                query: GET_DELIVERY_LOCATIONS,
                variables: { awaitRefetchQueries: true },
              },
            ],
          })
            .then((response) => {
              const {
                data: {
                  addDeliveryLocation: {
                    status: addDeliveryLocationStatus,
                    message: addDeliveryLocationMessage,
                  },
                },
              } = response;
              if (addDeliveryLocationStatus) {
                handleClose();
              } else {
                setSubmitError(addDeliveryLocationMessage);
              }
            })
            .catch((res) => {
              setSubmitError(
                ErrorHandler(res.message || res.graphQLErrors[0].message)
              );
            });
        }}
      >
        {({ errors, setFieldValue, values }) => (
          <FormikForm>
            <GetCounties variables={{ countryId: 1 }}>
              {({ getCounties: { status, countiesList } }) =>
                status && countiesList?.length > 0 ? (
                  <CustomAutoComplete
                    setFieldValue={setFieldValue}
                    id="counties-list"
                    label="Select your county"
                    name="countyId"
                    options={countiesList}
                    renderOptionName="countyName"
                    noOptionsText="No match for the county you searched for"
                    error={errors.countyId}
                    value={values.countyId}
                    renderOptionId="id"
                  />
                ) : (
                  <Alert>
                    <AlertTitle>
                      <Typography>
                        <strong>Failed</strong>
                      </Typography>
                    </AlertTitle>
                    <Typography>Could not get a list of counties</Typography>
                  </Alert>
                )
              }
            </GetCounties>

            {values?.countyId > 0 && (
              <>
                <GetLocales variables={{ countyId: values.countyId }}>
                  {({ getLocales: { status, localesList } }) =>
                    status && localesList?.length > 0 ? (
                      <CustomAutoComplete
                        setFieldValue={setFieldValue}
                        id="locales-list"
                        label="Select an area near you"
                        name="localeId"
                        options={localesList}
                        renderOptionName="localeName"
                        noOptionsText="No match for the area you searched for"
                        error={errors.localeId}
                        value={values.localeId}
                        renderOptionId="id"
                      />
                    ) : (
                      <Alert>
                        <AlertTitle>
                          <Typography>
                            <strong>Failed</strong>
                          </Typography>
                        </AlertTitle>
                        <Typography>
                          Could not get a list of areas in your county
                        </Typography>
                      </Alert>
                    )
                  }
                </GetLocales>
                <FormControl
                  fullWidth
                  error={Boolean(errors.deliveryPreciseLocation)}
                >
                  <InputLabel htmlFor="outlined-adornment-delete-login">
                    Apartment Name & House No.
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-delete-login"
                    type="text"
                    value={values.deliveryPreciseLocation}
                    name="deliveryPreciseLocation"
                    onChange={(e) => {
                      setFieldValue(
                        "deliveryPreciseLocation",
                        e.target.value,
                        true
                      );
                    }}
                    label="Apartment Name & House No."
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {errors.deliveryPreciseLocation && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-hse-login"
                    >
                      {errors.deliveryPreciseLocation}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl
                  fullWidth
                  error={Boolean(errors.alternativePhoneNumber)}
                  className={classes.inputField}
                >
                  <InputLabel htmlFor="outlined-adornment-alt-phone-login">
                    Alternative Number we can reach you on.
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-alt-phone-login"
                    type="tel"
                    value={values.alternativePhoneNumber}
                    name="alternativePhoneNumber"
                    onChange={(e) => {
                      setFieldValue(
                        "alternativePhoneNumber",
                        e.target.value,
                        true
                      );
                    }}
                    label="Alternative Number we can reach you on."
                    inputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  />
                  {errors.alternativePhoneNumber && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-alt-phone-login"
                    >
                      {errors.alternativePhoneNumber}
                    </FormHelperText>
                  )}
                </FormControl>
              </>
            )}
            <Typography color="error">{submitError}</Typography>
            <AnimateButton>
              <Button
                disableElevation
                disabled={buttonDisabledStatus(errors, values, loading)}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.actionButton}
              >
                {loading ? "Please wait..." : "Add Your Location"}
              </Button>
            </AnimateButton>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default AddDeliveryLocationForm;
