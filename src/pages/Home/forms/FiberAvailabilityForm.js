import React from "react";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";
import { Form as FormikForm, Formik } from "formik";
import { Box, Button, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import TicketStatusCheckForm from "./TicketStatusCheckForm";
import Alert from "../../../components/Alert";
import Dialog from "../../../components/Dialog";
import StatusIcon from "../../../components/StatusIcon";
import GetRegionsQuery from "../../../api/Queries/Locations/GetRegionsQuery";
import GetZonesQuery from "../../../api/Queries/Locations/GetZones";
import GetEstatesQuery from "../../../api/Queries/Locations/GetEstates";
import { configs } from "../../../Configs";

const LeadRegistrationSchema = Yup.object().shape({
  regionId: Yup.string().required("Please select an area"),
  streetName: Yup.string()
    .max(32, "Please enter a valid address")
    .min(3, "Please enter a valid address")
    .required("Please enter a street/road name"),
});

const buttonDisabledStatus = (areaName, streetName) => {
  let buttonStatus = false;
  if (areaName === "" || streetName === "") {
    buttonStatus = true;
  }
  return buttonStatus;
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(2),
    height: "100%",
    backgroundColor: theme.palette.white.main,
  },
  wrapper: {
    padding: theme.spacing(2),
  },
  formHeader: {
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    textDecoration: "bold",
  },
  textFieldWithLable: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.white.main,
  },
  getConnectedButton: {
    marginTop: theme.spacing(3),
    height: "56px",
  },
  dialogContent: {
    textAlign: "center",
  },
}));

const FiberAvailabilityForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const [addUserDetails, setAddUserDetails] = React.useState({
    open: false,
    status: false,
    message: "",
  });
  const defaultRegionId = {
    value: configs.defaultRegion,
    retrieveBy: "region",
  };
  const [{ value, retrieveBy }, setValue] = React.useState(defaultRegionId);

  const defaultZoneId = {
    zoneValue: configs.defaultZone,
    retrieveByZone: "zone",
  };
  const [{ zoneValue, retrieveByZone }, setZoneValue] =
    React.useState(defaultZoneId);

  const redirectToRegistration = (
    areaName,
    selectedEstate,
    streetName,
    inputEstate
  ) => {
    history.push({
      pathname: "/register",
      state: {
        areaName,
        selectedEstate,
        streetName,
        inputEstate,
      },
    });
  };

  // State Data
  const [inputEstate, setInputEstate] = React.useState("");
  const [areaName, setAreaName] = React.useState("");
  const [selectedEstate, setSelectedEstate] = React.useState("");
  const [streetName, setStreetName] = React.useState("");

  const { open, status, message } = addUserDetails;
  const closeDialog = () => {
    setAddUserDetails({ open: false, status: false, message: "" });
  };

  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <TicketStatusCheckForm />
        <Typography variant="h3" className={classes.formHeader}>
          Find out if your area is fibre ready
        </Typography>
        <Box className={classes.wrapper}>
          <Formik
            initialValues={{
              regionId: "3",
              areaName: "",
              estateName: "",
              streetName: "",
            }}
            validationSchema={LeadRegistrationSchema}
            onSubmit={() =>
              redirectToRegistration(
                areaName,
                selectedEstate,
                streetName,
                inputEstate
              )
            }
          >
            {({ setFieldValue, values }) => (
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
                <Typography variant="subtitle2" gutterBottom>
                  Select General area/Province
                </Typography>
                <GetRegionsQuery>
                  {({ getRegions }) => (
                    <>
                      {getRegions.getRegionsStatus ? (
                        <TextField
                          fullWidth
                          className={classes.textFieldWithLable}
                          placeholder="E.g Nairobi"
                          name="regionId"
                          // helperText={errors.regionId || null}
                          onChange={(e) => {
                            setFieldValue("regionId", e.target.value, true);
                            setValue({
                              value: e.target.value,
                              retrieveBy: "region",
                            });
                          }}
                          select
                          // eslint-disable-next-line react/jsx-sort-props
                          SelectProps={{ native: true }}
                          value={values.regionId}
                          variant="outlined"
                        >
                          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                          <option value="" />
                          {getRegions.regions.map((regions) => (
                            <option
                              key={regions.regionId}
                              value={regions.regionId}
                            >
                              {regions.regionName}
                            </option>
                          ))}
                        </TextField>
                      ) : (
                        <Alert severity="warning">
                          An error was encountered trying to load the list of
                          available regions
                        </Alert>
                      )}
                    </>
                  )}
                </GetRegionsQuery>
                <Typography variant="subtitle2" gutterBottom>
                  Select Area
                </Typography>
                <GetZonesQuery variables={{ regionId: value, retrieveBy }}>
                  {({ getZones }) => (
                    <>
                      {getZones.getZonesStatus ? (
                        <TextField
                          fullWidth
                          name="areaName"
                          className={classes.textFieldWithLable}
                          // helperText={errors.areaName || null}
                          onChange={(e) => {
                            setZoneValue({
                              zoneValue: Number(e.target.value),
                              retrieveByZone: "zone",
                            });
                            setAreaName(e.target.value);
                          }}
                          select
                          // eslint-disable-next-line react/jsx-sort-props
                          SelectProps={{ native: true }}
                          // value={values.areaName}
                          variant="outlined"
                        >
                          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                          <option value="" />
                          {getZones.zones.map((zones) => (
                            <option key={zones.id} value={zones.id}>
                              {zones.zoneName}
                            </option>
                          ))}
                        </TextField>
                      ) : (
                        <Alert severity="warning">
                          The selected region does not have zones mapped to it.
                        </Alert>
                      )}
                    </>
                  )}
                </GetZonesQuery>
                <Typography variant="subtitle2" gutterBottom>
                  Estate/Building Name
                </Typography>
                <GetEstatesQuery
                  variables={{
                    zoneId: zoneValue,
                    retrieveByZone,
                    pageSize: 10000,
                    pageNo: 1,
                  }}
                >
                  {({ getEstates }) => (
                    <>
                      {getEstates.getEstatesStatus > 0 ? (
                        <Autocomplete
                          freeSolo
                          id="free-solo-demo"
                          className={classes.textFieldWithLable}
                          onChange={(event, selectedValue) =>
                            setSelectedEstate(selectedValue)
                          }
                          inputValue={inputEstate}
                          onInputChange={(event, newInputValue) => {
                            setInputEstate(newInputValue);
                            setSelectedEstate("null_selection");
                          }}
                          options={getEstates.estates.map(
                            (estate) => estate.estateName
                          )}
                          openOnFocus
                          // error={!!errors.estateName}
                          // noOptionsText="No router serial number to match your search"
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              required
                              // error={!!errors.estateName}
                              name="estateName"
                              // helperText={errors.estateName || null}
                              variant="outlined"
                              // value={values.estateName}
                            />
                          )}
                        />
                      ) : (
                        <Alert severity="warning">
                          The selected area does not have any covered estates.
                        </Alert>
                      )}
                    </>
                  )}
                </GetEstatesQuery>
                <Typography variant="subtitle2" gutterBottom>
                  Enter Address
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Town/Street"
                  margin="normal"
                  name="streetName"
                  // error={!!errors.streetName}
                  onChange={(e) => {
                    setStreetName(e.target.value);
                  }}
                  variant="outlined"
                  className={classes.textFieldWithLable}
                />
                <Button
                  fullWidth
                  variant="contained"
                  disabled={buttonDisabledStatus(areaName, streetName)}
                  color="primary"
                  // type="submit"
                  onClick={() =>
                    redirectToRegistration(
                      areaName,
                      selectedEstate,
                      streetName,
                      inputEstate
                    )
                  }
                  className={classes.getConnectedButton}
                >
                  Get Connected
                </Button>
              </FormikForm>
            )}
          </Formik>
        </Box>
      </CardContent>
    </Card>
  );
};

export default React.memo(FiberAvailabilityForm);
