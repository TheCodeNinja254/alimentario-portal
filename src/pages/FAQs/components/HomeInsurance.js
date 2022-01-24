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
    fontWeight: theme.typography.fontWeightBold,
  },
  accordionSpacing: {
    marginTop: theme.spacing(2),
  },
}));

const faqs = [
  {
    question: "What is Jubilee Home Insurance powered by Safaricom Home?",
    answer:
      "This is a product designed to give you an annual home insurance package with the option of being able to pay for your premiums monthly.",
  },
  {
    question: "Who is eligible for this product?",
    answer:
      "This product can be accessed by any Safaricom Home customer while on any of the Fibre packages. Customers will only be allowed to purchase one package with each Safaricom Home account number.",
  },
  {
    question: "When am I expected to pay the premium?",
    answer:
      "Customers will be required to pay for the service each month via USSD *400# or any other availed channel using their M-PESA accounts.",
  },
  {
    question:
      "Why should I purchase a Jubilee Home insurance package powered by Safaricom?",
    answer:
      "The package ensures that your home and household items are insured from damage and theft that may be caused by your domestic servants, fire, floods, electrical faults, natural perils etc. Customers also have the advantage of paying for their packages in monthly instalments.",
  },
  {
    question:
      "How do I know which is appropriate home insurance package for my home?",
    answer:
      'You should pick the cover that covers the value of Home contents in your home under "Home Content - Sum Insured".',
  },
  {
    question: "What househod goods are covered in this cover?",
    answer:
      "All contents in the house e.g. furniture, fixtures, fittings, clothing, cutlery, crockery, kitchen equipment, entertainment equipment, refrigerators & televisions. You are however only covered within the limit of your package.\n" +
      "\n" +
      "The ALL RISK (high risk) Items covered are;\n" +
      "\n" +
      "Jewelry – subject to maximum of 10% of the total value of ALL RISKS sum insured.\n" +
      "Laptops & computers, cameras, wrist watches, mobile phones and all other portable electronic items,\n" +
      "Bicycles",
  },
  {
    question: "Who can I reach out to incase of any issue?",
    answer:
      "Call the 24-hour Jubilee Contact Center on 0709 949000 or email callcenter@jubileekenya.com.\n" +
      "Visit any Jubilee branch.",
  },
  {
    question: "If I need to make a clain, what is the process?",
    answer:
      "Report the claim to Jubilee Insurance within 7 days via any of the following:\n" +
      "Phone call to Jubilee Contact Center – 0709 949000\n" +
      "Email - callcenter@jubileekenya.com\n" +
      "Walk-in to any Jubilee branch.\n" +
      "Notify the police within 24 hours of any loss or damage due to theft, malice, riot and strikes.\n" +
      "Your claim will be registered and a claim reference number acknowledged within 24 hours.\n" +
      "When all the documentation required by Jubilee is provided, the claim will be reviewed within 7 working days and communication sent out.\n" +
      "Once the communication is actioned, claim processing will be done within 5 working days.",
  },
  {
    question: "What do i need to register for Home Insurance product?",
    answer:
      "The customer will be required to submit their full names, ID number, KRA PIN and area of residence on the Jubilee Insurance Website through the link sent by Safaricom.",
  },
];

const SecureNet = () => {
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

export default React.memo(SecureNet);
