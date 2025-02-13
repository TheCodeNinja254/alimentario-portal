import React, { useState } from "react";
import {
  Chip,
  Card,
  Button,
  // Collapse,
  Grid,
  Typography,
  Paper,
  CardContent,
  Divider,
  Box,
  // Switch,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
// import { Stack } from "@mui/material";
import { makeStyles, styled, useTheme } from "@material-ui/styles";
// import { IconLocation } from "@tabler/icons";
import PropTypes from "prop-types";
import { Check } from "@material-ui/icons";
import GetDeliveryLocations from "../../../api/Queries/Locations/GetDeliveryLocations";
// import AnimateButton from "../../ui-component/extended/AnimateButton";
import AddDeliveryLocationModal from "../../components/AddDeliveryLocationModal";

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
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  cardSubText: {
    fontWeight: 200,
    fontSize: 12,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
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
  locationBoxAlternate: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    elevation: 0,
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

const CategoryCard = styled(Card)(({ theme, img }) => ({
  backgroundImage: `url(${img})`,
  height: 200,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 10,
  borderRadius: 10,
  marginTop: theme.spacing(2),
}));

const periodSlots = [
  "12:00PM",
  "12:30PM",
  "1:00PM",
  "1:30PM",
  "2:00PM",
  "2:30PM",
  "3:30PM",
  "4:00PM",
  "4:30PM",
  "5:00PM",
  "5:30PM",
  "6:00PM",
  "6:30PM",
  "7:00PM",
];

const DeliveryAddress = ({
  selectedDeliveryLocation,
  setSelectedDeliveryLocation,
  preOrderItemsFound,
  preferredTime,
  setPreferredTime,
  hasPickedTimeSlotHasError,
  setHasPickedTimeSlotHasError,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleTimePeriodClick = (_preferredTimePeriod) => {
    setHasPickedTimeSlotHasError(false);
    setPreferredTime(_preferredTimePeriod);
  };

  return (
    <CardContent>
      {preOrderItemsFound ? (
        <Grid item xs={12}>
          <Typography className={classes.cardTitle}>
            Horse races are here, and so are we...
          </Typography>
          <Typography className={classes.cardSubTitle}>
            You can make an pre-order, we will deliver it to you at your
            preferred time
          </Typography>
          <Divider />
          <Grid>
            <Grid>
              <CategoryCard
                elevation={0}
                img="/images/categories/horseRacingBanner.png"
              />
            </Grid>
          </Grid>
          <Paper className={classes.locationBoxAlternate} variant="outlined">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box>
                  <Typography style={{ fontSize: 16 }}>
                    Pre-orders for{" "}
                    <strong>
                      Race Day, 12 Jan 2025 (Sunday) from 12.00 PM
                    </strong>
                  </Typography>
                  <Typography className={classes.cardSubText}>
                    What time would you like us to deliver to you? Pick a slot
                  </Typography>
                  <Box>
                    {periodSlots.map((slot) => (
                      <Chip
                        key={slot}
                        variant={
                          preferredTime === slot ? "default" : "outlined"
                        }
                        color="primary"
                        label={slot}
                        onClick={() => handleTimePeriodClick(slot)}
                        style={{
                          marginRight: theme.spacing(1),
                          marginBottom: theme.spacing(0.5),
                        }}
                        deleteIcon={preferredTime === slot ? <Check /> : <></>}
                      />
                    ))}
                  </Box>
                  {hasPickedTimeSlotHasError && (
                    <Typography
                      variant="caption"
                      style={{ color: theme.palette.error.main }}
                    >
                      Please select a preferred time slot to receive your meal
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Box>
              <Typography variant="h6" className={classes.cardTitle}>
                Delivery Address
              </Typography>
              <Typography variant="body2" className={classes.cardSubTitle}>
                Confirm your delivery address.
              </Typography>
            </Box>
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.actionButton}
              onClick={() => setOpen(true)}
            >
              Add New
            </Button>
          </Box>
          <Divider />
          <GetDeliveryLocations>
            {({ getDeliveryLocations: { status, locationsList } }) => (
              <>
                {status && locationsList?.length > 0 ? (
                  <>
                    <Paper
                      className={classes.locationBox}
                      variant="outlined"
                      sx={{ p: 2, mt: 2 }}
                    >
                      <Typography variant="subtitle1" gutterBottom>
                        <strong>Delivery Locations</strong>
                      </Typography>
                      {locationsList.map((location, index) => (
                        <Box key={location.id} sx={{ mb: 2 }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={
                                  selectedDeliveryLocation === location.id
                                }
                                onChange={() =>
                                  setSelectedDeliveryLocation(location.id)
                                }
                                color="primary"
                              />
                            }
                            label={
                              <Box>
                                <Typography variant="body2">
                                  <strong>
                                    {index === 0
                                      ? "Latest Location"
                                      : "Previous Location"}
                                  </strong>
                                </Typography>
                                <Typography variant="body2">
                                  County: {location?.countyName}
                                </Typography>
                                <Typography variant="body2">
                                  Town: {location?.localeName}
                                </Typography>
                                <Typography variant="body2">
                                  Address: {location?.deliveryPreciseLocation}
                                </Typography>
                                <Typography variant="body2">
                                  Alt Phone: {location?.alternativePhoneNumber}
                                </Typography>
                              </Box>
                            }
                          />
                          {index < locationsList.length - 1 && (
                            <Divider sx={{ my: 1 }} />
                          )}
                        </Box>
                      ))}
                    </Paper>
                  </>
                ) : (
                  <Paper
                    className={classes.locationBox}
                    variant="outlined"
                    sx={{ p: 2, mt: 2 }}
                  >
                    <Typography
                      variant="body2"
                      className={classes.locationText}
                    >
                      You do not have a preferred delivery location.
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      className={classes.actionButton}
                      onClick={() => setOpen(true)}
                    >
                      Add Now
                    </Button>
                  </Paper>
                )}
              </>
            )}
          </GetDeliveryLocations>
        </Grid>
      )}
      <AddDeliveryLocationModal open={open} setOpen={setOpen} />
    </CardContent>
  );
};

DeliveryAddress.propTypes = {
  selectedDeliveryLocation: PropTypes.number.isRequired,
  setSelectedDeliveryLocation: PropTypes.func.isRequired,
};

export default DeliveryAddress;
