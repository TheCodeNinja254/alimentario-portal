/*
 * Copyright (c) 2021.
 * Safaricom PLC
 * Systems, URLs, Databases and content in this document maybe proprietary to Safaricom PLC. Use or reproduction may require written permission from Safaricom PLC
 *
 * @Author: Fredrick Mbugua/FMMBUGUA
 */

import {colors} from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  background: {
    dark: "#F4F6F8",
    default: colors.common.white,
    paper: colors.common.white,
  },
  primary: {
    contrastText: white,
    dark: "#2e7b1d",
    main: "#2CB34A",
    light: "#68bf54",
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue.A400,
    light: colors.blue.A400,
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  white: {
    main: white,
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
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
