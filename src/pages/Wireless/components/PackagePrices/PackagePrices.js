import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.background.dark,
  },
  heading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontSize: 45,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      fontSize: 25,
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",
    },
  },
  subHeading: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    fontSize: 30,
    fontWeight: "lighter",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      fontSize: 15,
      fontWeight: "bold",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",
    },
  },
  contentWrapper: {
    marginTop: theme.spacing(6),
  },
  infoCard: {
    backgroundColor: theme.palette.background.dark,
  },
}));

function createData(packageName, price, validity) {
  return { packageName, price, validity };
}

const rows = [
  createData("Bronze 4G Wireless", "2,999", "30 days"),
  createData("Silver 4G Wireless", "4,100", "30 days"),
  createData("Gold 4G Wireless", "6,299", "30 days"),
  createData("Diamond 4G Wireless", "12,499", "30 days"),
];

const businessPackages = [
  createData("Fixed  Wireless 3Mbps", "32,997", "30 days"),
  createData("Fixed  Wireless 5Mbps", "54,995", "30 days"),
];

const PackagePrices = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} id="wireless-pricing">
      <Card elevation={0} className={classes.infoCard}>
        <CardContent>
          <div className={classes.contentWrapper}>
            <Typography variant="h2" className={classes.heading}>
              4G Packages
            </Typography>
            <Typography variant="h2" className={classes.subHeading}>
              For Home
            </Typography>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">4G Package</TableCell>
                    <TableCell align="center">Price (Kes)</TableCell>
                    <TableCell align="center">Validity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.packageName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {row.packageName}
                      </TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">{row.validity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="h2" className={classes.subHeading}>
              For Business
            </Typography>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">4G Package</TableCell>
                    <TableCell align="center">Price (Kes)</TableCell>
                    <TableCell align="center">Validity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {businessPackages.map((row) => (
                    <TableRow
                      key={row.packageName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {row.packageName}
                      </TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">{row.validity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PackagePrices;
