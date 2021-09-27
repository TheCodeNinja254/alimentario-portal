import React from "react";
import { Card, CardContent, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Indoor2 from "../../../../assets/images/Outdoor.png";
import Indoor3 from "../../../../assets/images/Outdoor3.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  featureCard: {
    height: 550,
  },
  cardHeader: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "500",
    fontStyle: "normal",
    color: theme.palette.primary.main,
  },
  cardContent: {
    alignContent: "center",
  },
  cardImage: {
    margin: theme.spacing(2),
    height: 170,
    marginLeft: "27%",
  },
  cameraDesc: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  boldDescriptor: {
    fontWeight: "700",
  },
}));

const OutdoorCameras = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={10} justify="center">
        <Grid item lg={4} md={4} xl={4} xs={12} sm={12}>
          <Card className={classes.featureCard} elevation={6}>
            <CardContent>
              <img
                src={Indoor2}
                alt="Outdoor Camera"
                className={classes.cardImage}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={classes.cardHeader}
              >
                FOSCAM FI9900P
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>Resolution:</span>{" "}
                HD(720P) <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>
                  Motion Detection:
                </span>{" "}
                Yes <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>Night Vision:</span>{" "}
                Yes <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>
                  Wide Dynamic Range (WDR)
                </span>{" "}
                Yes <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>PTZ Technology</span>{" "}
                Yes <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>Local Storage:</span>{" "}
                Cloud Storage <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>
                  2 Way Communication:
                </span>{" "}
                Yes <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={4} xl={4} xs={12} sm={12}>
          <Card className={classes.featureCard} elevation={6}>
            <CardContent>
              <img
                src={Indoor3}
                alt="Outdoor Camera"
                className={classes.cardImage}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={classes.cardHeader}
              >
                ZIPATO NCM750GB
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>Resolution:</span>{" "}
                HD(720P) <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>
                  Motion Detection:
                </span>{" "}
                Yes <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>Night Vision:</span>{" "}
                Yes <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>
                  Wide Dynamic Range (WDR)
                </span>{" "}
                Yes <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>PTZ Technology</span>{" "}
                60º <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>Local Storage:</span>{" "}
                Up to 16 GB <br />
              </Typography>
              <Typography variant="body2" className={classes.cameraDesc}>
                <span className={classes.boldDescriptor}>
                  2 Way Communication:
                </span>{" "}
                Yes <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(OutdoorCameras);
