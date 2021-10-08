import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { NavHashLink } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionSpacing: {
    marginTop: theme.spacing(2),
  },
  answerText: {
    marginBottom: theme.spacing(2),
  },
  tableHead: {
    fontWeight: 700,
  },
  linkText: {
    color: theme.palette.primary.main,
  },
}));

function createData(
  packageName,
  speed,
  cost,
  fup,
  speedPostFup,
  freeSecureNet
) {
  return { packageName, speed, cost, fup, speedPostFup, freeSecureNet };
}

function createPlusData(
  packageName,
  speed,
  mobileResources,
  cost,
  fup,
  speedPostFup,
  freeSecureNet
) {
  return {
    packageName,
    speed,
    mobileResources,
    cost,
    fup,
    speedPostFup,
    freeSecureNet,
  };
}

const rows = [
  createData("Bronze", "8mbps", "Ksh. 2,999", "500GB", "1mbps", "N/A"),
  createData("Silver", "20Mbps", "Ksh. 4,100", "1000GB", "3Mbps", "N/A"),
  createData("Gold", "20Mbps", "Ksh. 6,299", "1000GB", "3Mbps", "Included"),
  createData(
    "Diamond",
    "100Mbps",
    "Ksh. 12,499",
    "1000GB",
    "3Mbps",
    "Included"
  ),
];

const plusRows = [
  createPlusData(
    "Bronze",
    "8mbps",
    "5GB + 400 Minutes + Unlimited SMS",
    "Ksh. 2,999",
    "500GB",
    "1mbps",
    "N/A"
  ),
  createPlusData(
    "Silver",
    "20Mbps",
    "5GB + 400 Minutes + Unlimited SMS",
    "Ksh. 4,100",
    "1000GB",
    "3Mbps",
    "N/A"
  ),
  createPlusData(
    "Gold",
    "20Mbps",
    "5GB + 400 Minutes + Unlimited SMS",
    "Ksh. 6,299",
    "1000GB",
    "3Mbps",
    "Included"
  ),
  createPlusData(
    "Diamond",
    "100Mbps",
    "5GB + 400 Minutes + Unlimited SMS",
    "Ksh. 12,499",
    "1000GB",
    "3Mbps",
    "Included"
  ),
];

const HomeFiber = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What is Safaricom Home Fiber?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Safaricom Home Fibre is a service that allows you to have fast,
            reliable and unlimited internet access from the comfort of your
            home. Once registered you will be given a Wi-Fi router that will
            enable you to have wireless and LAN internet access.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header1"
        >
          <Typography className={classes.heading}>
            Which are the Safaricom Home Fiber packages?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: "100%", mb: 2 }}>
            <Typography className={classes.answerText}>
              Available Packages are as below:
            </Typography>
            <Paper>
              <TableContainer>
                <Table aria-label="simple table-1">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHead} align="left">
                        PACKAGE
                      </TableCell>
                      <TableCell className={classes.tableHead} align="left">
                        FIRBE SPEEDS
                      </TableCell>
                      <TableCell className={classes.tableHead} align="left">
                        MONTHLY COST
                      </TableCell>
                      <TableCell className={classes.tableHead} align="left">
                        FAIR USAGE POLICY (FUP) LIMIT
                      </TableCell>
                      <TableCell className={classes.tableHead} align="left">
                        SPEEDS AFTER FAIR USAGE
                      </TableCell>
                      <TableCell className={classes.tableHead} align="left">
                        SECURE NET (AT NO COST)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.packageName}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {row.packageName}
                        </TableCell>
                        <TableCell align="left">{row.speed}</TableCell>
                        <TableCell align="left">{row.cost}</TableCell>
                        <TableCell align="left">{row.fup}</TableCell>
                        <TableCell align="left">{row.speedPostFup}</TableCell>
                        <TableCell align="left">{row.freeSecureNet}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            <br />
            <TableContainer>
              <Table aria-label="simple table-1">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHead} align="left">
                      PACKAGE
                    </TableCell>
                    <TableCell className={classes.tableHead} align="left">
                      FIRBE SPEEDS
                    </TableCell>
                    <TableCell className={classes.tableHead} align="left">
                      MOBILE RESOURCES
                    </TableCell>
                    <TableCell className={classes.tableHead} align="left">
                      MONTHLY COST
                    </TableCell>
                    <TableCell className={classes.tableHead} align="left">
                      FAIR USAGE POLICY (FUP) LIMIT
                    </TableCell>
                    <TableCell className={classes.tableHead} align="left">
                      SPEEDS AFTER FAIR USAGE
                    </TableCell>
                    <TableCell className={classes.tableHead} align="left">
                      SECURE NET (AT NO COST)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {plusRows.map((row) => (
                    <TableRow
                      key={row.packageName}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {row.packageName}
                      </TableCell>
                      <TableCell align="left">{row.speed}</TableCell>
                      <TableCell align="left">{row.mobileResources}</TableCell>
                      <TableCell align="left">{row.cost}</TableCell>
                      <TableCell align="left">{row.fup}</TableCell>
                      <TableCell align="left">{row.speedPostFup}</TableCell>
                      <TableCell align="left">{row.freeSecureNet}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            How do I request for Safaricom Home Fiber service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can request for Safaricom Home Fibre{" "}
            <span>
              <NavHashLink
                to="/home#get-connected"
                smooth
                className={classes.linkText}
              >
                here
              </NavHashLink>
            </span>
            . If you’re in are in a fibre covered area, you will get a call back
            from Safaricom within 24 hours.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default React.memo(HomeFiber);
