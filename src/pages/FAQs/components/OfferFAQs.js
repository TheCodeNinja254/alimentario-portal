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
    // width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
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
  inner: {
    [theme.breakpoints.down("sm")]: {
      width: 260,
      overflowX: "scroll",
    },
  },
  linkText: {
    color: theme.palette.primary.main,
  },
  boldText: {
    fontWeight: 700,
  },
  subList: {
    marginLeft: theme.spacing(4),
  },
}));

function createData(packageName, redeemableFee, monthOneFee, acquisitionPrice) {
  return { packageName, redeemableFee, monthOneFee, acquisitionPrice };
}

const rows = [
  createData("Bronze", "Ksh. 3,000", "Ksh. 1,499", "Ksh. 4,499"),
  createData("Silver", "Ksh. 3,000", "Ksh. 2,049", "Ksh. 5,049"),
  createData("Gold", "Ksh. 3,000", "Ksh. 3,149", "Ksh. 6,149"),
  createData("Diamond", "Ksh. 3,000", "Ksh. 6,249", "Ksh. 9,249"),
];

const OfferFAQs = () => {
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
            What is the 50% Off Home Fibre Promotion?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is a promotion where all new Home Fibre customers will get 50%
            off the package price for the first month.
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
            What are the new prices?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: "100%", mb: 2 }}>
            <TableContainer className={classes.inner}>
              <Paper>
                <Table aria-label="simple table-1">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHead} align="left">
                        Package
                      </TableCell>
                      <TableCell className={classes.tableHead} align="left">
                        (Redeemable Fee)
                      </TableCell>
                      <TableCell className={classes.tableHead} align="left">
                        M1 Price(50% Off)
                      </TableCell>
                      <TableCell className={classes.tableHead} align="left">
                        Acquisition Price
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
                        <TableCell align="left">{row.redeemableFee}</TableCell>
                        <TableCell align="left">{row.monthOneFee}</TableCell>
                        <TableCell align="left">
                          {row.acquisitionPrice}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
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
            Who is eligible for the 50% Off Home Fibre Promotion?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All new customers who sign up and pay for the service between{" "}
            <span className={classes.boldText}>
              7th December 2021 and 15th February 2022
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            How do I request for the Safaricom Home Fibre service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dial *400# and select “Get Home Fibre” and follow the steps. If
            you’re in are in a fibre covered area, you will get a call back from
            Safaricom within 24 hours. Alternately, you can click{" "}
            <span>
              <NavHashLink
                to="/home#get-connected"
                smooth
                className={classes.linkText}
              >
                here{" "}
              </NavHashLink>
            </span>
            and select “Get Connected”
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            How do I pay for the Fibre package after receiving my account
            number?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To pay: <br />
            1. Dial *400# and select “Pay” and follow the steps
            <br />
            2. Use the M-PESA PAYBILL no.150501 and key in your Safaricom Home
            Fibre account number in the ‘account number’ section <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header-1212"
        >
          <Typography className={classes.heading}>
            Does the 50% offer apply to the redeemable fee?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, the offer applies on the Home Fibre package only. All new
            customers will still pay Ksh 3,000 redeemable fee.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            When will customers receive the redeemable fee refund?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            During the promotion period, customers will receive the redeemable
            fee in 2 instalments of Ksh 1500 each on Month 2 and Month 3. E.g If
            a customer is onboarded and subscribes to a product on 7th December
            2021, they will get the first refund of Ksh 1500 on 7th January 2022
            and the second refund on 7th February 2022.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What happens to customers who sign up on the last day of the
            promotion?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Customers who sign up and pay on the last day of the promotion
            are eligible for the 50% offer. <br />
            2. If customer signs up and does not pay/ makes partial payments,
            they will not be eligible for the promotion price <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default React.memo(OfferFAQs);
