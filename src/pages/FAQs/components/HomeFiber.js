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
  inner: {
    [theme.breakpoints.down("sm")]: {
      width: 260,
      overflowX: "scroll",
    },
  },
  linkText: {
    color: theme.palette.primary.main,
  },
  subList: {
    marginLeft: theme.spacing(4),
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
            <TableContainer className={classes.inner}>
              <Paper>
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
              </Paper>
            </TableContainer>

            <br />
            <TableContainer className={classes.inner}>
              <Paper>
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
                        <TableCell align="left">
                          {row.mobileResources}
                        </TableCell>
                        <TableCell align="left">{row.cost}</TableCell>
                        <TableCell align="left">{row.fup}</TableCell>
                        <TableCell align="left">{row.speedPostFup}</TableCell>
                        <TableCell align="left">{row.freeSecureNet}</TableCell>
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
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What do I need to access the service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will be provided with a WiFi username and Password to connect
            your device to Safaricom Home Fibre.
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
            How do I pay for the service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To pay: <br />
            1. Download mySafaricom app from your Playstore or AppStore and
            select the HOME Fibre tab OR <br />
            2. Use M-PESA PAYBILL no. 150501 and key in your Safaricom Home
            Fibre account number under the account number section OR <br />
            3. Via USSD, <br />
            <span className={classes.subList}>
              1. Dial *400# <br />
            </span>
            <span className={classes.subList}>
              2. Select Manage your subscriptions <br />
            </span>
            <span className={classes.subList}>
              3. Select your preferred package and make payment via M-PESA{" "}
              <br />
            </span>
            OR <br />
            4. Via Bonga - this allows you to pay for your Safaricom Home fibre
            subscription using Bonga points. Simply dial *400#, select manage
            subscriptions, select your account then select renew subscription,
            select the account no that you are renewing, then select bonga
            points. You will then confirm payment and input your service PIN. A
            confirmation SMS will then be sent to your number confirming your
            successful payment. <br />
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
            How can I change the default username and password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Call 400 for assistance from one of our support team members.
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
            Can I use my Bonga Points if I am changing my service plan?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, you can only use your Bonga Points when you are renewing or
            paying for a new subscription.
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
            How do I upgrade or downgrade my Safaricom Home Fiber package?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can change your package on the day of renewal. You will be able
            to change your subscription by dialing *400*4# and following the
            prompts.
            <br />
            NOTE: When you change your subscription before your renewal date
            new, package will take effect and you will forgo the remaining days
            on the current subscription.
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
            As a new customer, how much will I be charged?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For a new connection, you will be charged a one-off fee of sh3000 in
            addition to the cost of your preferred package. Payments should be
            made via the mySafaricom app, M-PESA Paybill 150501 or via *400#
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is FUP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A Fair Usage Policy (FUP) is put in place to govern usage and ensure
            network standards are maintained. Our Home Fibre plans are subject
            to FUP and once you hit the FUP threshold, your internet speeds will
            be throttled based on your selected plan.
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
            Can I renew my subscription once I have hit my FUP?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can. Simply go to mySafaricom app, use M-PESA Paybill
            150501 or *400# to make payment
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
            I am relocating to a new residence and would like my Home Fiber
            reconnected. What should I do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please send an e-mail to safaricomhome@safaricom.co.ke with details
            of where you are moving to. Be sure to carry your router with you. A
            reconnection fee will be levied to customers who do not have their
            routers and may vary depending on the nature of reconnection.
            Payments should only be made via mySafaricom app, M-PESA Paybill
            150501 or via *400#
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
            How can I check if my area is covered by Safaricom Home Fiber?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dial *400# and select the “Are you in my area” option. It will
            prompt you to enter information on your location. Alternatively you
            can visit the Safaricom HOME website.
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
            How do i terminate the service?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please send an e-mail to safaricomhome@safaricom.co.ke with details
            of your request. Once the service is cancelled, we will make
            arrangements to collect the WiFi router from your premises. You can
            also use the same details to connect to your Wi-Fi compatible
            devices.
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
            Please call 400 from the number that you used to make payment for
            the service. Alternatively, you can send an e-mail to
            safaricomhome@safaricom.co.ke
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
            How do I add an additional number to access the care line 400?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1. Dial *400# <br />
            2. select “Manage your subscriptions” <br />
            3. select “Existing account” <br />
            4. select “Manage contact number” <br />
            5. “Add contact number”. Please enter number in the format
            (7xxxxxxxx) then confirm the details. <br />
            6. You will receive an SMS notification confirming the number has
            been added. <br />
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
            How do I get assistance incase I have queries, issues or complaints?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For assistance, please call 400 from the number that you used to pay
            for the service. Alternatively, you can send an email to
            safaricomhome@safaricom.co.ke. You can also reach us on social
            media: <br />
            <span className={classes.subList}>
              1. Twitter:@Safaricom_Care <br />
            </span>
            <span className={classes.subList}>
              2. Facebook: Safaricom PLC <br />
            </span>
            <span className={classes.subList}>
              3. Zuri: WhatsApp or save mobile number 0722 000100 on your
              contacts, open chat and type ‘Hi Zuri’ <br />
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default React.memo(HomeFiber);
