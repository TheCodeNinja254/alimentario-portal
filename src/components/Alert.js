import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={0} variant="filled" {...props} />;
};

export default React.memo(Alert);
