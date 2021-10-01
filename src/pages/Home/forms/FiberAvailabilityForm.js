import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Container,
  FormControl,
  Grid,
  List,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Autocomplete } from "@material-ui/lab";
import moment from "moment";
import StopIcon from "@material-ui/icons/Stop";
import Alert from "../../../components/Alert";
import GetRegionsQuery from "../../../api/Queries/Locations/GetRegionsQuery";
import GetEstatesQuery from "../../../api/Queries/Locations/GetEstates";
import RegisterCustomerForm from "./RegisterCustomerForm";

const buttonDisabledStatus = (streetName) => {
  let buttonStatus = false;
  if (streetName === "") {
    buttonStatus = true;
  }
  return buttonStatus;
};

const useStyles = makeStyles((theme) => ({
  root: {},
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
    backgroundColor: theme.palette.white.main,
  },
  regionsTextarea: {
    marginTop: theme.spacing(4),
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
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
  },
  cardSubtitle: {
    fontSize: 18,
    fontWeight: 200,
  },
  cardAction: {
    padding: theme.spacing(3),
    justifyContent: "center",
  },
}));

const FiberAvailabilityForm = () => {
  const classes = useStyles();

  const [regionId, setRegionId] = React.useState(3);
  const [formOneCollapsed, setFormOneCollapsed] = React.useState(true);
  const [formTwoCollapsed, setFormTwoCollapsed] = React.useState(false);
  const [successfulRegistration, setSuccessfulRegistration] =
    React.useState(false);

  const [leadDetails, setLeadDetails] = React.useState({
    preferredDate: "",
    preferredTimePeriod: "",
  });

  const { preferredDate, preferredTimePeriod } = leadDetails;

  const redirectToRegistration = () => {
    setFormOneCollapsed(false);
    setFormTwoCollapsed(true);
  };

  // State Data
  const [inputEstate, setInputEstate] = React.useState("");
  const [closeLandmark, setCloseLandmark] = React.useState("");
  const [selectedEstate, setSelectedEstate] = React.useState("");
  const [streetName, setStreetName] = React.useState("");

  let estateName = selectedEstate;
  let estateId;
  const passedEstateName = selectedEstate.split("-");
  // eslint-disable-next-line prefer-destructuring
  estateId = passedEstateName[0];
  const placeholderOnEstateInput = "null_selection";
  if (selectedEstate === placeholderOnEstateInput) {
    estateName = inputEstate;
    estateId = "0";
  }

  return (
    <Card elevation={0} className={classes.root}>
      <CardContent>
        <Box className={classes.wrapper}>
          <Collapse in={formOneCollapsed}>
            <Typography variant="h3" className={classes.formHeader}>
              Find out if your area is fibre ready
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.regionsTextareaLabel}
            >
              Select Region
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <GetRegionsQuery>
                  {({ getRegions }) => (
                    <>
                      {getRegions.getRegionsStatus ? (
                        <FormControl variant="standard" fullWidth>
                          <Select
                            labelId="demo-simple-select-standard-label-products"
                            className={classes.regionsTextarea}
                            id="demo-simple-select-standard-products"
                            fullWidth
                            onChange={(e) => {
                              setRegionId(e.target.value);
                            }}
                          >
                            {getRegions.regions.map((regions) => (
                              <MenuItem
                                value={regions.regionId}
                                key={regions.regionId}
                              >
                                {" "}
                                {regions.regionName}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      ) : (
                        <Alert severity="warning">
                          An error was encountered trying to load the list of
                          available regions
                        </Alert>
                      )}
                    </>
                  )}
                </GetRegionsQuery>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Enter Estate Name/Road
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
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              required
                              className={classes.textFieldWithLable}
                              name="estateName"
                              variant="standard"
                            />
                          )}
                        />
                      ) : (
                        <Alert severity="warning">
                          The selected region/town does not have any covered
                          estates.
                        </Alert>
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
                  Enter Address
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
              disabled={buttonDisabledStatus(streetName)}
              color="primary"
              onClick={() => redirectToRegistration()}
              className={classes.getConnectedButton}
            >
              Get Connected
            </Button>
          </Collapse>
          <Collapse in={formTwoCollapsed}>
            <RegisterCustomerForm
              estateId={estateId}
              areaName={closeLandmark}
              streetName={streetName}
              inputEstate={inputEstate || estateName}
              setSuccessfulRegistration={setSuccessfulRegistration}
              setLeadDetails={setLeadDetails}
            />
          </Collapse>
          <Collapse in={successfulRegistration}>
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item lg={5} xl={5} sm={12} xs={12}>
                  <Card elevation={0} className={classes.confirmationCard}>
                    <CardContent>
                      <Typography className={classes.confirmationCardTitle}>
                        We have received your request for fibre connection
                      </Typography>
                      <br />
                      <Typography className={classes.cardSubtitle}>
                        We will call you on{" "}
                        {moment(preferredDate).format("MMMM Do YYYY")} between{" "}
                        {preferredTimePeriod}. You can check the status of your
                        request using your mobile number.
                      </Typography>
                      <List dense className={classes.cardSubtitle}>
                        <ListItemText
                          primary={
                            <Typography className={classes.cardSubtitle}>
                              <StopIcon />
                              Find your position in the queue
                            </Typography>
                          }
                        />
                        <ListItemText
                          primary={
                            <Typography className={classes.cardSubtitle}>
                              <StopIcon />
                              Get your questions answered and updates
                            </Typography>
                          }
                        />
                        <ListItemText
                          primary={
                            <Typography className={classes.cardSubtitle}>
                              <StopIcon />
                              Reach one of our representatives{" "}
                            </Typography>
                          }
                        />
                        <ListItemText
                          primary={
                            <Typography className={classes.cardSubtitle}>
                              <StopIcon />
                              Know the status of your request.{" "}
                            </Typography>
                          }
                        />
                      </List>
                      <Typography className={classes.cardSubtitle}>
                        using your mobile number
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardAction}>
                      <Button
                        color="primary"
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Done
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item lg={4} xl={4} />
              </Grid>
            </Container>
          </Collapse>
        </Box>
      </CardContent>
    </Card>
  );
};

export default React.memo(FiberAvailabilityForm);
