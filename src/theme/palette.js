import { colors } from "@mui/material";
import { grey } from "@mui/material/colors";

const white = "#FFFFFF";
const black = "#212529";

export default {
  primary: {
    main: "#064838",
    light: "#cbf2e9",
    dark: "#064838",
  },
  secondary: {
    main: "#F77816",
    light: "#D7CCC8",
    dark: "#9c4909",
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[100],
  },
  common: {
    black,
    white,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[100],
  },
  background: {
    default: "#FFFFFF",
    paper: "#F6F6F1",
    dark: "#F7F7F7",
  },
  text: {
    primary: black,
    secondary: grey[600],
    disabled: "#636161",
  },
  action: {
    active: "#000",
  },
};
