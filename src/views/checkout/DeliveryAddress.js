import React, { useState } from "react";
import { Collapse, Grid, Stack, Typography } from "@material-ui/core";
import { Paper, CardContent, Divider } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { IconLocation } from "@tabler/icons";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import PropTypes from "prop-types";
import GetDeliveryLocations from "../../api/Queries/Locations/GetDeliveryLocations";
import AnimateButton from "../../ui-component/extended/AnimateButton";
import AddDeliveryLocationModal from "../components/AddDeliveryLocationModal";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: theme.spacing(2),
  },
  cardSubTitle: {
    fontWeight: 200,
    fontSize: 12,
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(2),
  },
  priceContainer: {
    marginLeft: theme.spacing(2),
  },
  totalContainer: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  locationBox: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
  },
  locationText: {
    marginTop: theme.spacing(2),
  },
  actionButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  actionSection: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  actionSectionText: {
    marginTop: theme.spacing(1),
  },
  locationSection: {
    marginTop: theme.spacing(2),
  },
}));

const DeliveryAddress = ({
  selectedDeliveryLocation,
  setSelectedDeliveryLocation,
}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  // eslint-disable-next-line no-unused-vars

  return (
    <CardContent>
      <Grid item xs={12}>
        <Typography className={classes.cardTitle}>Delivery Address</Typography>
        <Typography className={classes.cardSubTitle}>
          Confirm your delivery address.
        </Typography>
        <Divider />
        <GetDeliveryLocations>
          {({ getDeliveryLocations: { status, locationsList } }) => (
            <>
              {status && locationsList?.length > 0 ? (
                <>
                  <Paper className={classes.locationBox} variant="outlined">
                    <Stack direction="row" spacing={4}>
                      <IconLocation
                        stroke={2.5}
                        size="1rem"
                        className={classes.icon}
                      />
                      <Typography gutterBottom className={classes.mainHeader}>
                        <strong>Last Used/Added Location</strong>
                      </Typography>
                      <Switch
                        checked={
                          selectedDeliveryLocation === locationsList[0].id
                        }
                        onChange={() =>
                          setSelectedDeliveryLocation(locationsList[0].id)
                        }
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </Stack>
                    <Grid container className={classes.locationSection}>
                      <Grid item xs={6}>
                        <Typography>County: </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>
                          <strong>{locationsList[0].countyName}</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>General area/town:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>
                          <strong>{locationsList[0].localeName}</strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Apt & Hse No.:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>
                          <strong>
                            {locationsList[0].deliveryPreciseLocation}
                          </strong>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>Alternative Mobile No.:</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>
                          <strong>
                            {locationsList[0].alternativePhoneNumber}
                          </strong>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                  <Collapse in={collapsed}>
                    <Paper
                      elevation={0}
                      variant="outlined"
                      className={classes.locationBox}
                    >
                      <Typography>
                        <strong>Previously used locations</strong>
                      </Typography>
                      {locationsList.map((dl) => (
                        <>
                          <Grid container className={classes.locationSection}>
                            <Grid item xs={6}>
                              <Typography>County: </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>
                                <strong>{dl.countyName}</strong>
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>General area/town:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>
                                <strong>{dl.localeName}</strong>
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>Apt & Hse No.:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>
                                <strong>{dl.deliveryPreciseLocation}</strong>
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>Alternative Mobile No.:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography>
                                <strong>{dl.alternativePhoneNumber}</strong>
                              </Typography>
                            </Grid>
                            <Grid item xs={12} x={12}>
                              <Paper
                                elevation={0}
                                variant="outlined"
                                className={classes.actionSection}
                              >
                                <Grid
                                  container
                                  className={classes.locationSection}
                                >
                                  <Grid item xs={6} xl={6}>
                                    <Typography
                                      className={classes.actionSectionText}
                                    >
                                      Use this location
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={6} xl={6}>
                                    <Switch
                                      checked={
                                        selectedDeliveryLocation === dl.id
                                      }
                                      onChange={() =>
                                        setSelectedDeliveryLocation(dl.id)
                                      }
                                      inputProps={{
                                        "aria-label": "controlled",
                                      }}
                                    />
                                  </Grid>
                                </Grid>
                              </Paper>
                            </Grid>
                          </Grid>
                          <Divider />
                        </>
                      ))}
                    </Paper>
                  </Collapse>

                  <Stack direction="row" spacing={1}>
                    {locationsList.length > 1 && (
                      <AnimateButton>
                        <Button
                          disableElevation
                          fullWidth
                          size="small"
                          variant="outlined"
                          color="secondary"
                          className={classes.actionButton}
                          onClick={() => setCollapsed(!collapsed)}
                        >
                          {collapsed ? "Hide Previous" : "View Previous"}
                        </Button>
                      </AnimateButton>
                    )}
                    <AnimateButton>
                      <Button
                        disableElevation
                        fullWidth
                        size="small"
                        variant="contained"
                        color="secondary"
                        className={classes.actionButton}
                        onClick={() => setOpen(true)}
                      >
                        Add New
                      </Button>
                    </AnimateButton>
                  </Stack>
                </>
              ) : (
                <Paper className={classes.locationBox} variant="outlined">
                  <Stack direction="row" spacing={4}>
                    <IconLocation
                      stroke={2.5}
                      size="1rem"
                      className={classes.icon}
                    />
                    <Typography gutterBottom className={classes.locationText}>
                      You do not have a preferred delivery location.
                    </Typography>
                  </Stack>
                  <AnimateButton>
                    <Button
                      disableElevation
                      fullWidth
                      size="small"
                      variant="contained"
                      color="secondary"
                      className={classes.actionButton}
                      onClick={() => setOpen(true)}
                    >
                      Add Now
                    </Button>
                  </AnimateButton>
                </Paper>
              )}
            </>
          )}
        </GetDeliveryLocations>
      </Grid>
      <AddDeliveryLocationModal open={open} setOpen={setOpen} />
    </CardContent>
  );
};

DeliveryAddress.propTypes = {
  selectedDeliveryLocation: PropTypes.number.isRequired,
  setSelectedDeliveryLocation: PropTypes.func.isRequired,
};

export default DeliveryAddress;
