import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Stack } from "@material-ui/core";
import { IconTrash } from "@tabler/icons";
import DeleteAccountForm from "../forms/DeleteAccountForm";
import AnimatedSection from "../../../ui-component/AnimatedSection";

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    color: theme.palette.primary.dark,
    fontSize: 20,
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      fontWeight: 500,
    },
  },
  contextText: {
    marginTop: theme.spacing(2),
    color: theme.palette.common.black,
  },
  actionArea: {
    marginTop: theme.spacing(2),
  },
  card: {
    marginTop: theme.spacing(2),
  },
  icon: {
    color: theme.palette.primary.dark,
  },
}));

const DeleteAccount = () => {
  const classes = useStyles();

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="2.4s">
      <Card elevation={0} className={classes.card}>
        <CardContent>
          <Stack direction="row" spacing={4}>
            <IconTrash stroke={2.5} size="2rem" className={classes.icon} />
            <Typography gutterBottom className={classes.mainHeader}>
              Delete Your Account.
            </Typography>
          </Stack>
          <Typography variant="body2" className={classes.contextText}>
            You can delete your account. Of-course, we would be very sad to see
            you leave us, that is why we ask you to tell us why you wish to
            delete your account. On deletion, all data associated with your
            account including items in your cart, previous orders, business
            pages you manage will all be deleted.
          </Typography>
          <Paper elevation={0} className={classes.actionArea}>
            <DeleteAccountForm />
          </Paper>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default DeleteAccount;
