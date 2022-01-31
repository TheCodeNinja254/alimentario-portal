import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Button,
  Card,
  CardActions,
  Collapse,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import moment from "moment";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Alert from "../../../components/Alert";
import GetRegionsQuery from "../../../api/Queries/Locations/GetRegionsQuery";
import GetEstatesQuery from "../../../api/Queries/Locations/GetEstates";
import WirelessRegistrationForm from "./WirelessRegistrationForm";
import TicketStatusCheckForm from "../../Home/forms/TicketStatusCheckForm";

const buttonDisabledStatus = (streetName, estateId) => {
  let buttonStatus = false;
  if (streetName === "" || estateId === "") {
    buttonStatus = true;
  }
  return buttonStatus;
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    padding: theme.spacing(2),
  },
  pageSubHeading: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "left",
  },
  formSubtitle: {
    fontSize: 13,
    fontWeight: 500,
  },
  topDivider: {
    width: 100,
    height: 10,
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  formHeader: {
    fontWeight: 500,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    textDecoration: "bold",
  },
  textFieldWithLable: {
    backgroundColor: theme.palette.white.dark,
  },
  alerts: {
    marginTop: theme.spacing(1),
  },
  regionsTextarea: {
    // marginTop: theme.spacing(4),
  },
  regionsTextareaLabel: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(-4),
  },
  getConnectedButton: {
    marginTop: theme.spacing(3),
  },
  dialogContent: {
    textAlign: "center",
  },
  confirmationCardTitle: {
    fontSize: 36,
    fontWeight: 700,
  },
  confirmationCard: {
    marginTop: theme.spacing(4),
    // padding: theme.spacing(2),
  },
  cardSubtitle: {
    fontSize: 18,
    fontWeight: 200,
  },
  cardAction: {
    padding: theme.spacing(3),
    justifyContent: "center",
  },
  anchorLink: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  anchorButton: {
    textDecoration: "underline",
    color: theme.palette.primary.main,
    textTransform: "none",
    fontSize: 15,
  },
}));

const AreasList = (props) => {
  const { className, setRegionId, regions } = props;

  return (
    <Autocomplete
      className={className}
      id="combo-box-demo"
      options={regions}
      disableClearable
      noOptionsText="Area not found, you can pick 'Other'"
      onChange={(event, selectedValue) => {
        setRegionId(selectedValue.regionId || 0, true);
      }}
      getOptionLabel={(region) => region.regionName}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          name="estateName"
          className={className}
          variant="standard"
        />
      )}
      openOnFocus
    />
  );
};

const EstatesList = (props) => {
  const { className, setInputEstate, setSelectedEstate, inputEstate, estates } =
    props;

  return (
    <Autocomplete
      className={className}
      id="combo-box-demo"
      options={estates}
      onChange={(event, selectedValue) => {
        setSelectedEstate(selectedValue.estateId || 0, true);
      }}
      getOptionLabel={(estate) => estate.estateName}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          name="estateName"
          className={className}
          variant="standard"
        />
      )}
      freeSolo
      inputValue={inputEstate}
      onInputChange={(event, newInputValue) => {
        setInputEstate(newInputValue);
        setSelectedEstate(1);
      }}
      openOnFocus
    />
  );
};

const WirelessRequestForm = () => {
  const classes = useStyles();

  const [regionId, setRegionId] = React.useState(
    process.env.REACT_APP_DEFAULT_REGION
  );
  const [formOneCollapsed, setFormOneCollapsed] = React.useState(true);
  const [formTwoCollapsed, setFormTwoCollapsed] = React.useState(false);
  const [successfulRegistration, setSuccessfulRegistration] =
    React.useState(false);

  const [checkStatus, setCheckStatus] = React.useState(false);

  const [leadDetails, setLeadDetails] = React.useState({
    preferredDate: "",
    preferredTimePeriod: "",
  });

  const { preferredDate, preferredTimePeriod } = leadDetails;

  const redirectToRegistration = () => {
    setFormOneCollapsed(false);
    setFormTwoCollapsed(true);
    setSuccessfulRegistration(false);
  };

  const returnToCheckAvailability = () => {
    setFormOneCollapsed(true);
    setFormTwoCollapsed(false);
    setSuccessfulRegistration(false);
  };

  // State Data
  const [inputEstate, setInputEstate] = React.useState("");
  const [closeLandmark, setCloseLandmark] = React.useState("");
  const [selectedEstate, setSelectedEstate] = React.useState("");
  const [streetName, setStreetName] = React.useState("");

  let estateName = selectedEstate;
  let estateId;
  if (selectedEstate === 1) {
    estateName = inputEstate;
    estateId = 1;
  } else {
    estateId = selectedEstate;
  }

  return (
    <Card elevation={0} className={classes.root}>
      <Box>
        <Collapse in={formOneCollapsed}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Divider className={classes.topDivider} />
              <Typography variant="h1" className={classes.pageSubHeading}>
                Get connected to 4G Wireless internet
              </Typography>
              <Typography className={classes.formSubtitle} gutterBottom>
                Please fill out the form below and we will be in touch with you
                at the preferred date and time.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="subtitle2" gutterBottom>
                Select your town/area
              </Typography>
              <GetRegionsQuery>
                {({ getRegions }) => (
                  <>
                    {getRegions.getRegionsStatus ? (
                      <AreasList
                        className={classes.textFieldWithLable}
                        setRegionId={setRegionId}
                        regions={getRegions.regions}
                      />
                    ) : (
                      <>
                        <FormControl variant="standard" fullWidth>
                          <Select
                            labelId="demo-simple-select-standard-label-products"
                            className={classes.regionsTextarea}
                            id="demo-simple-select-standard-products-21"
                            fullWidth
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                          </Select>
                        </FormControl>
                        <Alert severity="warning" className={classes.alerts}>
                          An error was encountered trying to load the list of
                          available regions
                        </Alert>
                      </>
                    )}
                  </>
                )}
              </GetRegionsQuery>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="subtitle2" gutterBottom>
                Enter Estate/Building name
              </Typography>
              <GetEstatesQuery
                variables={{
                  regionId: Number(regionId),
                  pageSize: 10000,
                  pageNo: 1,
                }}
              >
                {({ getEstates }) => (
                  <>
                    {getEstates.getEstatesStatus > 0 ? (
                      <EstatesList
                        className={classes.textFieldWithLable}
                        setSelectedEstate={setSelectedEstate}
                        estates={getEstates.estates}
                        inputValue={inputEstate}
                        setInputEstate={setInputEstate}
                      />
                    ) : (
                      <>
                        <FormControl variant="standard" fullWidth>
                          <Select
                            labelId="demo-simple-select-standard-label-products"
                            className={classes.textFieldWithLable}
                            id="demo-simple-select-standard-products-1"
                            fullWidth
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                          </Select>
                        </FormControl>
                        <Alert severity="warning" className={classes.alerts}>
                          The selected region/town does not have any covered
                          estates.
                        </Alert>
                      </>
                    )}
                  </>
                )}
              </GetEstatesQuery>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="subtitle2" gutterBottom>
                Enter Closest Landmark
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter closest landmark"
                name="closeLandmark"
                onChange={(e) => {
                  setCloseLandmark(e.target.value);
                }}
                variant="standard"
                className={classes.textFieldWithLable}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography variant="subtitle2" gutterBottom>
                Enter your general area
              </Typography>
              <TextField
                fullWidth
                placeholder="Town/Street"
                name="streetName"
                onChange={(e) => {
                  setStreetName(e.target.value);
                }}
                variant="standard"
                className={classes.textFieldWithLable}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="small"
            disabled={buttonDisabledStatus(streetName, estateId)}
            color="primary"
            onClick={() => redirectToRegistration()}
            className={classes.getConnectedButton}
          >
            Get Connected
          </Button>
          <HashLink
            to="#checkStatus"
            variant="body2"
            onClick={() => setCheckStatus(!checkStatus)}
            className={classes.anchorLink}
          >
            <Button small className={classes.anchorButton}>
              Already made a request, check status <NavigateNextIcon />
            </Button>
          </HashLink>
          <Collapse in={checkStatus}>
            <Card elevation={0}>
              <TicketStatusCheckForm />
            </Card>
          </Collapse>
        </Collapse>
        <Collapse in={formTwoCollapsed}>
          <div>
            <Divider className={classes.topDivider} />
            <Typography variant="h1" className={classes.pageSubHeading}>
              Get connected to 4G Wireless internet
            </Typography>
            <Typography className={classes.formSubtitle} gutterBottom>
              Please fill out the form below and we will be in touch with you at
              the preferred date and time.
            </Typography>
          </div>
          <WirelessRegistrationForm
            estateId={estateId}
            regionId={regionId}
            areaName={closeLandmark}
            streetName={streetName}
            inputEstate={inputEstate || estateName}
            setSuccessfulRegistration={setSuccessfulRegistration}
            setLeadDetails={setLeadDetails}
            setFormTwoCollapsed={setFormTwoCollapsed}
            setFormOneCollapsed={setFormOneCollapsed}
          />
        </Collapse>
        <Collapse in={successfulRegistration}>
          <Grid container spacing={3}>
            <Grid item lg={12} xl={12} sm={12} xs={12}>
              <Typography className={classes.confirmationCardTitle}>
                We have received your request for 4G Wireless internet
              </Typography>
              <br />
              <Typography className={classes.cardSubtitle}>
                We will call you on{" "}
                {moment(preferredDate).format("MMMM Do YYYY")} at you preferred
                time: {preferredTimePeriod}.
              </Typography>
              <CardActions className={classes.cardAction}>
                <Link to="/4g-wifi-router">
                  <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    onClick={() => returnToCheckAvailability()}
                  >
                    Done
                  </Button>
                </Link>
              </CardActions>
            </Grid>
            <Grid item lg={4} xl={4} />
          </Grid>
        </Collapse>
      </Box>
    </Card>
  );
};

export default React.memo(WirelessRequestForm);
