import React from "react";
import { Button, Snackbar } from "@material-ui/core";
import { useCookies } from "react-cookie";

const CookieTextSnackbar = () => {
  const [cookies, setCookie] = useCookies(["ctx_cp"]);
  const [state, setState] = React.useState({
    open: !cookies.isCpAccepted,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    setCookie("isCpAccepted", true, {
      path: "/",
      httpOnly: true,
      sameSite: true,
      secure: true,
    });
  };

  const action = (
    <Button color="primary" variant="contained" onClick={handleClose}>
      I AGREE
    </Button>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message="We use cookies and similar technologies to recognize your repeat visits and preferences, as measure the effectiveness of campaigns and to analyze traffic. To learn more about cookies, including how to disable them, view our Cookie Policy. By clicking 'I Agree' or using this site, you consent to the use of cookies unless you have disabled them."
      key={vertical + horizontal}
      action={action}
    />
  );
};

export default CookieTextSnackbar;
