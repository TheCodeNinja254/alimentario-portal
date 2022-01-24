import React from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Loader from "./Loader";
import ErrorHandler from "../utils/errorHandler";
import Alert from "./Alert";

const printErrorMessage = (error) => {
  let message =
    error.message ||
    "Looks like we are experiencing a technical difficulty. Our team is working to resolve the issue. Please try again later.";
  if (error.message === "Network error: Failed to fetch") {
    message =
      "Sorry! We encountered a network error. Please refresh this page or send email to fibersalesgroup @safaricom.co.ke";
  }
  return ErrorHandler(message);
};

const useStyles = makeStyles((theme) => ({
  root: {},
  placeholderTextArea: {
    // marginTop: theme.spacing(2),
  },
  alerts: {
    marginTop: theme.spacing(1),
    overflowWrap: "inherit",
  },
}));

const Query = ({
  children,
  getTranslations,
  fetchMore,
  loader,
  query,
  hideError = false,
  ...restProps
}) => {
  const {
    loading,
    error,
    data,
    networkStatus,
    fetchMore: apolloFetchMore,
    refetch,
  } = useQuery(query, { ...restProps });
  const classes = useStyles();

  if (error && hideError === false) {
    let message = printErrorMessage(error);
    if (printErrorMessage(error).match(/Network error.*/)) {
      message =
        "Looks like we are experiencing a technical difficulty. Our team is working to resolve the issue. Please try again later.";
    }
    // const errorCode = getErrorCode(error);
    // TODO: check errorPolicy and if === 'all' then pass thru render props all extracted/formated errors with errorcodes instead of inline error message
    return (
      <>
        <FormControl variant="standard" fullWidth>
          <Select
            labelId="demo-simple-select-standard-label-products"
            className={classes.placeholderTextArea}
            id="demo-simple-select-standard-products-219"
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
        <Alert severity="warning" className={classes.alerts}>
          <div>
            <Typography variant="body2">{ErrorHandler(message)}</Typography>
          </div>
        </Alert>
      </>
    );
  }

  if (
    networkStatus === NetworkStatus.loading ||
    (networkStatus !== NetworkStatus.fetchMore && loading)
  ) {
    return loader || <Loader />;
  }

  const props = {
    ...data,
    networkStatus,
    fetchMore: fetchMore ? () => fetchMore(data, apolloFetchMore) : undefined,
    refetch,
  };

  return children(props);
};

export default Query;
