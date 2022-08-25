import React, { useState } from "react";
import { Grid, Stack, Typography } from "@material-ui/core";
import { Paper, CardContent, Divider } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { IconLocation } from "@tabler/icons";
import Button from "@mui/material/Button";
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
}));

const DeliveryAddress = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

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
                <Paper className={classes.locationBox} variant="outlined">
                  <Stack direction="row" spacing={4}>
                    <IconLocation
                      stroke={2.5}
                      size="1rem"
                      className={classes.icon}
                    />
                    <Typography gutterBottom className={classes.mainHeader}>
                      <strong>Last used location</strong>
                    </Typography>
                  </Stack>
                  <Typography gutterBottom className={classes.locationText}>
                    Last used location here
                  </Typography>

                  <Stack direction="row">
                    {locationsList > 1 && (
                      <AnimateButton>
                        <Button
                          disableElevation
                          fullWidth
                          size="small"
                          variant="outlined"
                          color="secondary"
                          className={classes.actionButton}
                        >
                          View Previous
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
                </Paper>
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

export default DeliveryAddress;
