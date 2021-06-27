import React from "react";
import { Container, Box, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/Page";
import Dialog from "../../components/Dialog";
import StarterPack from "./components/StarterPack";
import Countries from "./components/Countries";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: "100%",
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
              <StarterPack />
            </Grid>
            <Grid item lg={4} xl={4} sm={12} xs={12}>
              <Countries
                handleChange={handleChange}
                selectOption={selectOption}
                searchParam={searchParam}
              />
            </Grid>
            <Grid item lg={4} xl={4} />
          </Grid>
        </Container>
      </Box>
    </Page>
  );
};

export default Home;
