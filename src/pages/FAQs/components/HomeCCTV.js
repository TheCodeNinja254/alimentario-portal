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
    question: "What is Safaricom Home CCTV?",
    answer:
      "It is a service that allows Safaricom Home customers to make sure that their families and their homes are protected by enabling them to be in control of the activities in their home from wherever they are.",
  },
  {
    question: "How does it work?",
    answer:
      "Safaricom Home CCTV allows you to have the ability to view the activities of your household at all times of the day from wherever you are using any of your devices.",
  },
  {
    question: "Who is eligible for this product?",
    answer: "Any Safaricom Home customer is eligible.",
  },
  {
    question: "How can I access the service?",
    answer:
      "You can access it by purchasing a surveillance camera from any Safaricom shops or ordering one from Masoko online store. If the device is ordered from Masoko, it will be delivered to you within 72 hours. You will also be required to have a strong and sustainable Internet connection in your home.",
  },
  {
    question: "How do I install the surveillance camera?",
    answer:
      "Each device comes with an installation manual to assist you to install the device. If you would like to have the device installed, you should download the Safaricom Home App and request for installation under the 'Get Help Tab'.",
  },
  {
    question: "How much is the Safaricom Home CCTV service?",
    answer:
      "You will be charged a one-time cost to purchase the camera. Afterwards, the service is free.",
  },
  {
    question:
      "Can I purchase the Safaricom Home CCTV service without a Safaricom Home Fiber package?",
    answer: "Yes, you can.",
  },
  {
    question: "How can I get support if my camera is not working correctly?",
    answer:
      "Simply call us at 400. If your problem cannot be solved, you will be requested to bring in your device to a Safaricom shop for further assistance.",
  },
  {
    question:
      "If I wish to opt-out of the service will I be refunded for my camera?",
    answer:
      "No, you will not be refunded for your device if you no longer wish to use it.",
  },
  {
    question: "What do I do if the camera is not working correctly?",
    answer:
      "Kindly check to see if the camera is receiving enough bandwidth from your router. " +
      "If not, kindly purchase a device that goes by the name, 'Internet repeater' from a Safaricom shop to boost your Internet connectivity to where you have placed the camera.",
  },
  {
    question:
      "How will I view the activities of my home using the surveillance camera?",
    answer:
      "Simply download the app for the specific device you are using from the App Store or Google Play store and set up the application with the instructions on the device manual. Once done, you should be able to view your home’s activities.",
  },
];

const HomeCCTV = () => {
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

export default React.memo(HomeCCTV);
