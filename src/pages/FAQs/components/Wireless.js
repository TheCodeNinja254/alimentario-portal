import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
}));

const faqs = [
  {
    question: "What is 4G for Home?",
    answer:
      "4G for Home is a Safaricom Home Internet Package, designed to be a fixed home-based Internet service that hooks you up with fast affordable internet on our ever expanding 4G+ network",
  },
  {
    question: "How does it work?",
    answer:
      "4G for Home internet will be enabled on a 4G enabled SIM Card, and a designated 4G Router, to guarantee quality of service, a customer will be required to confirm 4G coverage in their premises.",
  },
  {
    question: "How much does it cost?",
    answer:
      "To start you off, you will need to buy a 4G Router + 4G Sim Card at a one-off cost of Ksh 9,999. You will then pay for the 4G package of your choice.",
  },
  {
    question: "What Internet Speed wil I get on the 4G for Home",
    answer:
      "Speeds will be capped at 3 Mbps or 5 Mbps depending on the plan. Actual speeds will vary due to local conditions and content accessed.",
  },
  {
    question: "Where can I buy the 4G for Home Router?",
    answer:
      "The routers are available in all Safaricom Shops and Select dealers countrywide. You can also Dial *400*2# to submit your 4G for Home request",
  },
  {
    question: "How do I set up my 4G router?",
    answer:
      "Simply plug in the 4G Router to a power source. On the front, there are five LED indicators to show the power, mode, WiFi, LAN and signal status. A bright blue LED light indicates that the Router has connected to the internet.",
  },
  {
    question: "Does my 4G Home WIFI require a password",
    answer:
      "Yes, the password (WI-FI KEY) is printed on the back of the Router.",
  },
  {
    question: "How can I change the default username and password?",
    answer:
      "Dial *400# and select “Other Services” then the “Change Password” option.",
  },
  {
    question: "What do I do if my 4G router does not connect to the internet?",
    answer:
      "Check that you have an active account by dialing *400*3# and select Check account status.\n" +
      "Restart your router by powering off. Press the Power button- Off and On.\n" +
      "If it does not work and you have an active account, Simply call Line 400 from your mobile device or e-mail us via safaricomhome@safaricom.co.ke.",
  },
  {
    question:
      "Will my 4G for Home service expire? What happens to any unused bundles?",
    answer:
      "4G for Home service is valid for 30 days and will be disconnected on the anniversary date of your last payment. Unused data bundle resources will not roll over.",
  },
  {
    question: "How do I check if my account is active?",
    answer: "Simply dial *400*3# and select Check account status.",
  },
  {
    question: "How do I renew my 4G for Home Internet Package?",
    answer:
      "To renew the 4G for Home Internet package, simply follow the instructions below:\n" +
      "\n" +
      "Dial *400# and select “ 4G for Home ”\n" +
      "Select “buy 4G Plans”\n" +
      "Select the “Account number”\n" +
      "Select 4G Plan to renew\n" +
      "Select your preferred mode of payment i.e. M-PESA, Postpay or Bonga and confirm payment.\n" +
      "If you select M-PESA, you will be prompted to enter 4-digit MPESA PIN.\n" +
      "*Upon successful purchase, you will receive a flash notification of successful payment and a confirmation SMS will be sent to your Mobile number*\n" +
      "Alternatively, you can load airtime directly to the 4G SIM number, Dial *141* recharge code * device SIM card number#",
  },
  {
    question: "Can I buy another plan if I use up my allocated FUP?",
    answer:
      "Yes, you can buy a new plan if you have hit the FUP and are throttled to 1Mbps. Simply Dial *400*3# and select “buy 4G Plans” to renew the same plan.",
  },
  {
    question: "Current plan does not serve my needs, can I Upgrade/downgrade?",
    answer:
      "Yes, you can upgrade/downgrade your current plan. Simply dial *400*3# and select change plan.",
  },
  {
    question: "Can I use my 4G for Home Service anywhere?",
    answer:
      "No, 4G for Home Service will only be available in places where there is good 4G coverage and it will only work on the 4G Router.",
  },
  {
    question: "Can I use the 4G SIM on the 4G Router on my phone?",
    answer: "No, the SIM in your device will only work on your 4G Router",
  },
  {
    question: "What is the Mobile number of the SIM in the 4G router?",
    answer:
      "The Mobile number of your SIM will be printed on a Label at the back of the Router. Alternatively, dial *400# from your registered line select 4G home and Check A/c status, your A/c No is the mobile number of the SIM in the router.",
  },
  {
    question: "What is FUP and why has my speed dropped to 1 Mbps?",
    answer:
      "FUP is Fair Usage Policy is put in place to govern usage and ensure network standards are maintained. Our internet plans are subject to FUP and once a customer hits the FUP threshold, Internet speeds are throttled to a maximum of 1 Mbps. To view Fair usage policy, visit www.safaricom.co.ke",
  },
];

const Wireless = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {faqs.map((faq) => (
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default React.memo(Wireless);
