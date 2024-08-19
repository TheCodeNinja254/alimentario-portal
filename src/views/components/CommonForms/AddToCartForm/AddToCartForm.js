import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import isEmpty from "lodash.isempty";
import * as Yup from "yup";
import { Form as FormikForm, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import AnimateButton from "../../../../ui-component/extended/AnimateButton";
import ErrorHandler from "../../../../utils/errorHandler";
import { GET_CART_ITEMS } from "../../../../api/Queries/Cart/GetCartItems";
import { ADD_TO_CART } from "../../../../api/Mutations/Cart";

const AddToCartSchema = Yup.object().shape({
  quantity: Yup.number().max(100).required("Please enter the amount you need"),
  customerSpecification: Yup.string()
    .max(255, "Cannot exceed 255 characters")
    .nullable(),
});

const useStyles = makeStyles((theme) => ({
  formInput: {
    ...theme.typography.customInput,
  },
}));

const AddToCartForm = ({ productId, setSubmitDetails }) => {
  const classes = useStyles();

  const [submitError, setSubmitError] = useState("");

  const buttonDisabledStatus = (errors, values, loading) => {
    let status = true;
    if (isEmpty(errors) && values.quantity !== "" && loading === false) {
      status = false;
    }
    return status;
  };

  const [AddToCartMutation, { loading }] = useMutation(ADD_TO_CART);

  return (
    <>
      <Formik
        initialValues={{
          quantity: 1,
          customerSpecification: "",
          submit: null,
        }}
        validationSchema={AddToCartSchema}
        onSubmit={(values) => {
          setSubmitError("");
          setSubmitDetails({
            status: false,
            quantity: "",
            customerSpecification: "",
          });
          AddToCartMutation({
            variables: {
              input: {
                quantity: Number(values.quantity),
                customerSpecification: values.customerSpecification,
                productId,
              },
            },
            refetchQueries: [
              {
                query: GET_CART_ITEMS,
                variables: { awaitRefetchQueries: true },
              },
            ],
          })
            .then((response) => {
              const {
                data: {
                  addToCart: {
                    status: addToCartStatus,
                    message: addToCartMessage,
                  },
                },
              } = response;
              if (addToCartStatus) {
                setSubmitDetails({
                  status: true,
                  quantity: values.quantity,
                  customerSpecification: values.customerSpecification,
                });
              } else {
                setSubmitError(addToCartMessage);
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
            <FormControl
              fullWidth
              error={Boolean(errors.quantity)}
              className={classes.formInput}
            >
              <InputLabel htmlFor="outlined-adornment-quantity-login">
                Quantity
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-quantity-login"
                type="number"
                value={values.quantity}
                name="quantity"
                onChange={(e) => {
                  setFieldValue("quantity", e.target.value, true);
                }}
                label="Quantity"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <FormHelperText
                error
                id="standard-weight-helper-text-quantity-login"
              >
                {errors.quantity}
              </FormHelperText>
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(errors.customerSpecification)}
              className={classes.formInput}
            >
              <InputLabel htmlFor="outlined-adornment-customer-spec-login">
                Additional requirements (optional)
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-quantity-login"
                type="text"
                value={values.customerSpecification}
                name="customerSpecification"
                onChange={(e) => {
                  setFieldValue("customerSpecification", e.target.value, true);
                }}
                label="Additional requirements (optional)"
                inputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
              <FormHelperText
                error
                id="standard-weight-helper-text-customer-spec-login"
              >
                {errors.customerSpecification}
              </FormHelperText>
              <FormHelperText
                error
                id="standard-weight-helper-text-submit-login"
              >
                {submitError}
              </FormHelperText>
            </FormControl>
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
                  {loading ? "Please wait..." : "Add to cart now"}
                </Button>
              </AnimateButton>
            </Box>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

AddToCartForm.defaultProps = {
  productId: 0,
};

AddToCartForm.propTypes = {
  productId: PropTypes.number,
  setSubmitDetails: PropTypes.func.isRequired,
};

export default AddToCartForm;
