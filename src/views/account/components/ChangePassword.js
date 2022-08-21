import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Paper, Stack } from "@material-ui/core";
import { IconKey } from "@tabler/icons";
import ChangePasswordForm from "../forms/ChangePasswordForm";
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

const ChangePassword = () => {
  const classes = useStyles();

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="1.4s">
      <Card elevation={0} className={classes.card}>
        <CardContent>
          <Stack direction="row" spacing={4}>
            <IconKey stroke={2.5} size="2rem" className={classes.icon} />
            <Typography gutterBottom className={classes.mainHeader}>
              Account Password
            </Typography>
          </Stack>
          <Typography variant="body2" className={classes.contextText}>
            Change your account password.
          </Typography>
          <Paper elevation={0} className={classes.actionArea}>
            <ChangePasswordForm />
          </Paper>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default ChangePassword;
