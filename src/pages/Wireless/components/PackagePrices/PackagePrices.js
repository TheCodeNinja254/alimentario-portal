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
  },
  contentWrapper: {
    marginTop: theme.spacing(6),
  },
  infoCard: {
    backgroundColor: theme.palette.background.dark,
  },
}));

function createData(packageName, price, preThrottle, postThrottle, validity) {
  return { packageName, price, preThrottle, postThrottle, validity };
}

const rows = [
  createData("3 Mbps", "3,699", "200 GB", "200 GB", "30 days"),
  createData("5 Mbps", "5,299", "400 GB", "400 GB", "30 days"),
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
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">4G Package</TableCell>
                    <TableCell align="center">Price (Kes)</TableCell>
                    <TableCell align="center">Volume Full Speed</TableCell>
                    <TableCell align="center">Voloume (1Mbps)</TableCell>
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
                      <TableCell align="center">{row.preThrottle}</TableCell>
                      <TableCell align="center">{row.postThrottle}</TableCell>
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
