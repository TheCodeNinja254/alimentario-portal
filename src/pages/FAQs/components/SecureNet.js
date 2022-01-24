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
    question: "What is Secure Net?",
    answer:
      "This is a service that ensures that you have full control over what is accessed on your Safaricom Home Internet connection. This service will offer protection against security threats including viruses, Trojans, spyware, adware and unwanted programs. It will also help protect you from harmful websites such as phishing websites or sites that might contain viruses. You do not need to download or install anything in order to use the Service, it is provided over the Safaricom Home Network.",
  },
  {
    question: "Why should I purchase the Secure Net service?",
    answer:
      "The service ensures that your household is protected from online threats that may be harmful or inappropriate such as viruses, malware and malicious websites",
  },
  {
    question: "Who is eligible for this product?",
    answer:
      "The product can be accessed by any Safaricom Home Fibre customer on either Fibre only or Fibre plus packages",
  },
  {
    question: "Where can I get this service?",
    answer:
      "Sample answer provided here. More information to be populated on availability.",
  },
  {
    question: "How much is the Secure Net service?",
    answer:
      "The service is offered at a cost of Ksh 200 for Customers on Fibre and Fibre Plus Bronze and Silver packages. Dial *400*6# select option 1 Secure Net to buy.There will be no additional cost for Customers on Fibre and Fibre Plus Gold and Diamond packages.",
  },
  {
    question:
      "Can I purchase the Secure Net service without a Fiber to the Home package?",
    answer:
      "Unfortunately, No.\n" +
      "Customers will not be allowed to purchase SecureNet without having a Safaricom Home Fiber subscription.",
  },
  {
    question: "How does Secure Net work?",
    answer:
      "The service allows the customer to filter content from what is accessed by their household through their Safaricom Home Fiber service. It also enables you to have full control of your Home Fibre internet by scheduling quiet time for members of their household",
  },
  {
    question: "How can I get this service?",
    answer:
      "You can access the service by dialing *400# or on the Safaricom Home App by renewing or changing your service plan",
  },
  {
    question:
      "What happens when I want to purchase the Secure Net service with an existing Fiber to the Home subscription?",
    answer:
      "You will need to change your existing plan so that you are able to opt in to the service. Your unused Fibre service will prorated hence you will not lose your money",
  },
  {
    question: "How can I opt-out of the Secure Net service?",
    answer:
      "You can opt-out of the service by changing your current plan and selecting a package that does not have Secure Net.",
  },
  {
    question: "Will I get a refund if I cannot access the service?",
    answer:
      "Yes, you will get a refund if after paying for the service, you are unable to access it.",
  },
  {
    question: "What is quiet time?",
    answer:
      "Quiet time will allow a customer to choose when to have their Safaricom Home internet switched off. The setting will also allow the customer to set a time where their home internet connection is turned off.",
  },
  {
    question: "Who will be in charge of my Home's Secure Net settings?",
    answer:
      "The primary account owner will be the customer who makes payment for the Fibre service.",
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
            id="panel1a-header-securenet"
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
