import React, { useState } from "react";
import * as Yup from "yup";
import { Form as FormikForm, Formik } from "formik";
import { useMutation } from "@apollo/client";
import { FormLabel, Typography } from "@mui/material";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ErrorHandler from "../../../../utils/errorHandler";
import AnimateButton from "../../../../ui-component/extended/AnimateButton";
import { GET_ALL_ORDERS } from "../../../../api/Queries/Orders/GetAllOrders";
import { UPDATE_ORDER_STATUS } from "../../../../api/Mutations/Order";

const UpdateOrderStatusSchema = Yup.object().shape({
  status: Yup.string().required("Please select a new status"),
});

const useStyles = makeStyles((theme) => ({
  actionButton: {
    marginTop: theme.spacing(2),
  },
  inputField: {
    marginTop: theme.spacing(2),
  },
}));

const UpdateOrderStatusForm = ({
  handleClose,
  orderId,
  currentStatus,
  setSubmitStatus,
}) => {
  const classes = useStyles();

  const [submitError, setSubmitError] = useState("");
  const [, setSubmitDetails] = useState("");

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const buttonDisabledStatus = (loading) => {
    let status = true;
    if (value !== "" && loading === false) {
      status = false;
    }
    return status;
  };

  const [UpdateOrderStatusMutation, { loading }] =
    useMutation(UPDATE_ORDER_STATUS);

  const allStatuses = [
    "New",
    "Pending",
    "Enroute",
    "Preparation",
    "Delayed",
    "Delivered",
    "Cancelled",
  ];

  return (
    <>
      <Formik
        initialValues={{
          submit: null,
          status: currentStatus,
        }}
        validationSchema={UpdateOrderStatusSchema}
        onSubmit={() => {
          setSubmitError("");
          setSubmitStatus(true);
          setSubmitDetails({
            status: false,
            quantity: "",
            customerSpecification: "",
          });
          UpdateOrderStatusMutation({
            variables: {
              input: {
                orderId: Number(orderId),
                status: value,
              },
            },
            refetchQueries: [
              {
                query: GET_ALL_ORDERS,
                variables: {
                  pageSize: 5,
                  orderStatus: "pending",
                  awaitRefetchQueries: true,
                },
              },
            ],
          })
            .then((response) => {
              const {
                data: {
                  updateOrderStatus: {
                    status: updateOrderStatusStatus,
                    message: updateOrderStatusMessage,
                  },
                },
              } = response;
              if (updateOrderStatusStatus) {
                setSubmitStatus(true);
                handleClose();
              } else {
                setSubmitError(updateOrderStatusMessage);
              }
            })
            .catch((res) => {
              setSubmitError(
                ErrorHandler(res.message || res.graphQLErrors[0].message)
              );
            });
        }}
      >
        {() => (
          <FormikForm>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Order Status
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                {allStatuses.map((statusItem) => (
                  <FormControlLabel
                    key={statusItem}
                    value={statusItem}
                    control={<Radio />}
                    label={statusItem}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Typography color="error">{submitError}</Typography>
            <AnimateButton>
              <Button
                disableElevation
                disabled={buttonDisabledStatus(loading)}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.actionButton}
              >
                {loading ? "Please wait..." : "Update"}
              </Button>
            </AnimateButton>
          </FormikForm>
        )}
      </Formik>
    </>
  );
};

export default UpdateOrderStatusForm;
