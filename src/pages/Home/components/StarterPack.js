import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  cardHeader: {
    "& span": {
      fontSize: 20,
    },
  },
}));
const StarterPack = () => {
  const classes = useStyles();
  console.log("test  starte");
  return (
    <Card>
      <CardHeader title="Starter Pack" className={classes.cardHeader} />
      <CardContent>
        <Typography variant="body1">
          We have a few packages and components to get you started. Happy
          Hacking 😁
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(StarterPack);
