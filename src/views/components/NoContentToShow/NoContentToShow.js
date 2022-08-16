import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import frownFace from "../../../assets/images/Graphics/62ok_n17o_210608.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  errorCard: {
    margin: theme.spacing(3),
  },
}));

const NoContentToShow = () => {
  const classes = useStyles();

  return (
    <Card className={classes.errorCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={frownFace}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Oops! Something went wrong
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are unable to show any products right here, right now. Please
            return soon as we work to resolve this.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NoContentToShow;
