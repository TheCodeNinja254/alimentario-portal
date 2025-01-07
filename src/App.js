import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
// import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import Routes from "./routes";
import theme from "./theme";
import NavigationScroll from "./layout/NavigationScroll";
import "./styles/global.css";
import { AlertProvider } from "./context/AlertProvider";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <MuiThemeProvider theme={theme}> */}
      <AlertProvider>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </AlertProvider>
      {/* </MuiThemeProvider> */}
    </ThemeProvider>
  );
};

export default App;
