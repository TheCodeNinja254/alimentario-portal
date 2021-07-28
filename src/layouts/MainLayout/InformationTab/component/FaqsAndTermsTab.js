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
    question: "What is Internet For Business?",
    answer:
      "Sample answer provided here. More information to be populated on availability.",
  },
  {
    question: "What packages can I subscribe to?",
    answer:
      "Sample answer provided here. More information to be populated on availability.",
  },
  {
    question:
      "WWhat do I require to sign up for Internet for Business service?",
    answer:
      "Sample answer provided here. More information to be populated on availability.",
  },
  {
    question: "Where can I get this service?",
    answer:
      "Sample answer provided here. More information to be populated on availability.",
  },
  {
    question: "What equipment is installed at the customer premise?",
    answer:
      "Sample answer provided here. More information to be populated on availability.",
  },
  {
    question:
      "How long will it take before Internet for Business service is installed at my premise?",
    answer:
      "Sample answer provided here. More information to be populated on availability.",
  },
  {
    question: "Is there any installation fees?",
    answer:
      "Sample answer provided here. More information to be populated on availability.",
  },
  {
    question: "What do I do when I need support for my Connectivity service?",
    answer:
      "Sample answer provided here. More information to be populated on availability.",
  },
];

const FaqsAndTermsTab = () => {
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

export default React.memo(FaqsAndTermsTab);
