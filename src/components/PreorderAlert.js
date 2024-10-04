import React, { useContext } from "react";
import { Alert } from "@mui/material";
import { AlertContext } from "../context/AlertProvider";

const PreorderAlert = (props) => {
  const { alertVisible, hideAlert } = useContext(AlertContext);

  return (
    alertVisible && (
      <Alert
        {...props}
        severity="info"
        title="Horse Races are here. Pre-order your meal."
        onClose={hideAlert}
      >
        Do you see something you love? Pre-order your meal. We will deliver it
        to your location within the venue, at your preferred time.
      </Alert>
    )
  );
};

export default PreorderAlert;
