import { createTheme } from "@mui/material";
import "./fonts/Futura.css";
import palette from "./palette";
import typography from "./typography";
import compStyleOverride from "./compStyleOverride";

const theme = createTheme({
  palette,
  typography,
  components: compStyleOverride(palette),
});

export default theme;
