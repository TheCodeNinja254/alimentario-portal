import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent } from "@material-ui/core";
import backgroundImg from "../../../assets/images/Graphics/rollup.png";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundImage: `url(${backgroundImg})`,
    height: 900,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.9,
  },
  inCardText: {
    fontSize: 20,
    fontWeight: 700,
    color: theme.palette.grey[700],
  },
  inCardTextMinor: {
    fontSize: 20,
    fontWeight: 200,
    color: theme.palette.grey[700],
  },
}));

const BannerCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography className={classes.inCardText}>We deliver,</Typography> */}
      </CardContent>
    </Card>
  );
};

export default BannerCard;
