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
import { Link } from "react-router-dom";

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
    marginBottom: theme.spacing(2),
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

function createData(packageName, price, bundle) {
  return { packageName, price, bundle };
}

const rows = [
  createData("BRONZE PLUS 1000", "Ksh. 1,000", "5GB + 400Min + 1000SMS"),
  createData("SILVER PLUS 2000", "Ksh. 2,000", "15GB + 1000Min + 2000SMS"),
  createData("GOLD PLUS 3000", "Ksh. 3,000", "25GB + 1500Min + 3000SMS"),
  createData("DIAMOND PLUS 5000", "Ksh. 5,000", "35GB + 2500Min + 5000SMS"),
];

const FMCFaqs = () => {
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
            What are the Safaricom Home “HOME PLUS” Plans?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            These are integrated Voice Minutes, mobile Data and SMS bundles,
            availed alongside your preferred HOME Fibre plans, and that allow
            you to choose a bundle that meets you and your loved ones’ needs.
            <br />
            The bundles also come with a FREE 2GB YouTube bundle and free access
            to WhatsApp after the data bundle is fully utilized and is within
            the validity period, so that you can continue keeping in touch.
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
            What “Home Plus” bundles are available?
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
                        Price
                      </TableCell>
                      <TableCell className={classes.tableHead} align="left">
                        Bundle
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
                        <TableCell align="left">{row.price}</TableCell>
                        <TableCell align="left">{row.bundle}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </TableContainer>
            <Typography>
              All bundles are valid for 30 days <br />
              All bundles come with a 2GB Free YouTube bundle and Free WhatsApp
              access upon full utilization of the data bundle <br />
              Customers will be able to share the bundle resources with members
              of their household
            </Typography>
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
            How do I purchase the “Home Plus” bundles?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dial *400# select “Get Home Plus” and choose your preferred bundle.
            Alternatively go to mySafaricom App.
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
            Will the bundles auto renew?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the bundles will auto renew after the 30-day validity period.
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
            Will I be able to share the minutes, data and SMS resources with
            other mobile numbers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, dial *400# and select “Share Home Plus” or visit mySafaricom
            app to input the mobile numbers of your desired beneficiaries.
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
            Will the “Home Plus” resources rollover?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>No, Home Plus resources will not rollover.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Do the “Home Plus” resources expire?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, Unutilized resources will expire on 30th day past 23:59 hours.
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
            How do I add or delete a beneficiary?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dial *400# and select “Share Home Plus” or visit mySafaricom app and
            follow the prompts to change your beneficiaries under Home Plus
            option.
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
            How many beneficiaries can I add?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can add up to 5 beneficiaries to access the shared resources.
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
            Can I purchase 2 different “Home Plus” bundles for different amounts
            within the same month?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. You can purchase different bundles within the month. The last
            one you will settle on, will be the one to be renewed once 30 days
            elapse.
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
            Can I purchase the “Home Plus” bundles for another number?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can only add another number as a beneficiary. You will not be
            able to purchase Home Plus for another number.
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
            What should I do if I purchase a bundle erroneously?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please contact the contact center on 400 for assistance and for the
            reversal to be affected.
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
            What are the available payment channels?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. USSD : dial *400# select “Home Plus” and after selecting your
            preferred bundle, follow the prompts to make payment <br />
            2. mySafaricom app : download from your Playstore or AppStore and
            select the HOME Fibre tab <br />
            3. M-PESA : use PAYBILL no.150501 and key in your account number in
            the ‘account number’ section <br />
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
            In case I need more information or assistance, which channels can I
            use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Typography>
              For assistance, please call 400 from the number that you used to
              pay for the service. Alternatively, you can send an email to
              safaricomhome@safaricom.co.ke. You can also reach us on social
              media: <br />
              <span className={classes.subList}>
                1. Twitter:{" "}
                <Link
                  to={{
                    pathname: "https://twitter.com/@Safaricom_Care",
                  }}
                  target="_blank"
                >
                  @Safaricom_Care
                </Link>
                <br />
              </span>
              <span className={classes.subList}>
                2. Facebook:{" "}
                <Link
                  to={{
                    pathname: "https://www.facebook.com/SafaricomPLC",
                  }}
                  target="_blank"
                >
                  Safaricom PLC
                </Link>{" "}
                <br />
              </span>
              <span className={classes.subList}>
                3. Zuri: WhatsApp or save mobile number 0722 000100 on your
                contacts, open chat and type ‘Hi Zuri’ <br />
              </span>
            </Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default React.memo(FMCFaqs);
