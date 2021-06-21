import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  TextField,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import Page from "../../components/Page";
import GetCountriesQuery from "../../api/Queries/GetCountries";
import Alert from "../../components/Alert";
import ListShimmers from "./components/ListShimmers";
import Dialog from "../../components/Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: "100%",
  },
  cardHeader: {
    "& span": {
      fontSize: 20,
    },
  },
  countriesWrapper: {
    maxHeight: 300,
    overflow: "scroll",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [searchParam, setSearchParam] = React.useState("");
  const [dialogDetails, setDialogDetails] = React.useState({
    open: false,
    country: "",
  });
  const handleChange = (event) => {
    setSearchParam(event.target.value);
  };
  const selectOption = (value) => {
    setDialogDetails({ open: true, country: value });
  };
  const closeDialog = () => {
    setDialogDetails({ open: false, country: "" });
  };
  const { open, country } = dialogDetails;
  return (
    <Page title="Home" className={classes.root}>
      <Dialog
        open={open}
        maxWidth="xs"
        modalContent={
          <div className="center">
            <Typography variant="body1">
              You have selected <strong>{country}</strong>.
            </Typography>
            <Box mt={1}>
              <Button variant="contained" color="primary" onClick={closeDialog}>
                Close
              </Button>
            </Box>
          </div>
        }
        handleClose={closeDialog}
      />
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={4} xl={4} sm={12} xs={12}>
              <Card>
                <CardHeader
                  title="Starter Pack"
                  className={classes.cardHeader}
                />
                <CardContent>
                  <Typography variant="body1">
                    We have a few packages and components to get you started.
                    Happy Hacking 😁
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} xl={4} sm={12} xs={12}>
              <Card>
                <CardHeader title="Countries" className={classes.cardHeader} />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Component"
                    margin="normal"
                    name="component"
                    onChange={handleChange}
                    value={searchParam}
                    variant="outlined"
                  />
                  <Box className={classes.countriesWrapper}>
                    <GetCountriesQuery
                      variables={{ param: searchParam }}
                      loader={<ListShimmers />}
                    >
                      {({ getCountries }) => (
                        <>
                          {getCountries.length > 0 ? (
                            <List>
                              {getCountries.map((item) => (
                                <ListItem key={item.country}>
                                  <ListItemText primary={item.country} />
                                  <ListItemSecondaryAction>
                                    <IconButton
                                      onClick={() => selectOption(item.country)}
                                    >
                                      <CheckIcon fontSize="small" />
                                    </IconButton>
                                  </ListItemSecondaryAction>
                                </ListItem>
                              ))}
                            </List>
                          ) : (
                            <Alert severity="warning">
                              Sorry we do not have any countries
                            </Alert>
                          )}
                        </>
                      )}
                    </GetCountriesQuery>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4} xl={4} />
          </Grid>
        </Container>
      </Box>
    </Page>
  );
};

export default Home;
