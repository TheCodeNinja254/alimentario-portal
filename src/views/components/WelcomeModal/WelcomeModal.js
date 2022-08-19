import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Stack, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";
import Image from "../../../components/Image";
import AnimateButton from "../../../ui-component/extended/AnimateButton";
import photo from "../../../assets/images/Graphics/welcome.jpg";

const useStyles = makeStyles((theme) => ({
  modalTitle: {
    color: theme.palette.secondary.dark,
    fontWeight: 700,
    fontSize: 16,
  },
  cardTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: 16,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  cardSubtitle: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
    fontSize: 16,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  sloganText: {
    color: theme.palette.common.black,
    fontWeight: 300,
    fontSize: 13,
    marginBottom: theme.spacing(2),
  },
  productImage: {
    marginTop: theme.spacing(2),
    width: "100%",
    maxHeight: 280,
  },
  infoTab: {
    marginBottom: theme.spacing(2),
  },
  nextActionsArea: {
    marginTop: theme.spacing(2),
  },
}));

const SignInModal = ({ open, setOpen, firstName }) => {
  const classes = useStyles();

  const handleClose = () => {
    window.history.replaceState({}, document.title);
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
            <Typography className={classes.cardTitle}>
              Hi {firstName},
            </Typography>
            <Typography className={classes.cardSubtitle}>
              Welcome to Desafio Alimentario!
            </Typography>
            <Typography className={classes.sloganText}>
              It means: <strong>The Food Challenge!</strong>
            </Typography>
            <Typography variant="caption">
              Your account was created successfully! You can now add items to
              your cart, make orders for your home or business. We will ensure
              to give you the best experience on this platform and as you
              consume our products.
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
                  onClick={() => setOpen(false)}
                >
                  Challenge Accepted!
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
