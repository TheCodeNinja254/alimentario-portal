import { grey } from "@mui/material/colors";

const typography = {
  fontFamily: ["Futura Book BT", "Futura Std Medium Oblique"].join(","),
  h1: {
    fontWeight: 700,
    fontFamily: ["Futura Std Bold", "Futura Std Medium Oblique"].join(","),
    fontSize: 30,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontWeight: 600,
    fontSize: 22,
    letterSpacing: "-0.24px",
  },
  h3: {
    fontWeight: 700,
    fontSize: 20,
    letterSpacing: "-0.02em",
  },
  h4: {
    fontWeight: 500,
    fontSize: 18,
    letterSpacing: "-0.06px",
  },
  h5: {
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: "-0.05px",
  },
  h6: {
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: "-0.05px",
  },
  body1: {
    fontFamily: ["Futura Book BT", "Futura Std Medium Oblique"].join(","),
  },
  body2: {
    fontFamily: ["Futura Book BT", "Futura Std Medium Oblique"].join(","),
  },
  overline: {
    fontWeight: 500,
  },
  customInput: {
    marginTop: 8,
    marginBottom: 8,
    "& > label": {
      top: "23px",
      left: 0,
      color: grey[500],
      '&[data-shrink="false"]': {
        top: "5px",
      },
    },
    "& > div > input": {
      padding: "30.5px 14px 11.5px !important",
    },
    "& legend": {
      display: "none",
    },
    "& fieldset": {
      top: 0,
    },
  },
};

export default typography;
