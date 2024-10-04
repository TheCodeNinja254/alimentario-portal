// AlertContext.js
import React, { createContext, useState } from "react";

// Create the AlertContext
export const AlertContext = createContext({});

// AlertProvider component to wrap around components that need access to the alert state
export const AlertProvider = ({ children }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const showAlert = () => setAlertVisible(true);
  const hideAlert = () => setAlertVisible(false);
  const hideSnackbar = () => setSnackbarVisible(false);
  const showSnackbar = () => setSnackbarVisible(true);

  return (
    <AlertContext.Provider
      value={{
        alertVisible,
        showAlert,
        hideAlert,
        snackbarVisible,
        hideSnackbar,
        showSnackbar,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
