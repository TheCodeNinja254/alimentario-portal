import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Stack, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Image from "../../../components/Image";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import photo from "../../../assets/images/Graphics/bbq_05.jpg";

const useStyles = makeStyles((theme) => ({
  modalTitle: {
    color: theme.palette.secondary.dark,
    fontWeight: 700,
    fontSize: 16,
  },
  productTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: 16,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  productImage: {
    marginTop: theme.spacing(2),
    width: "100%",
    maxHeight: 300,
  },
  infoTab: {
    marginBottom: theme.spacing(2),
  },
  nextActionsArea: {
    marginTop: theme.spacing(2),
  },
}));

const SignInModal = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Image alt="Img" src={photo} className={classes.productImage} />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.productTitle}>
              Sign in to your account
            </Typography>
            <Typography variant="caption">
              Sign in or create an account on Desafio. This will allow us to kee
              your cart across all your devices. We will not forget. Your data
              is safe and only used to deliver our service to you.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Stack
              direction="row"
              spacing={2}
              className={classes.nextActionsArea}
            >
              <AnimateButton>
                <Button
                  disableElevation
                  fullWidth
                  size="small"
                  variant="contained"
                  color="secondary"
                  component={RouterLink}
                  to="/auth"
                >
                  Sign In
                </Button>
              </AnimateButton>
              <AnimateButton>
                <Button
                  disableElevation
                  fullWidth
                  size="small"
                  variant="outlined"
                  color="secondary"
                  component={RouterLink}
                  to="/create-account"
                >
                  Create Account
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignInModal;
