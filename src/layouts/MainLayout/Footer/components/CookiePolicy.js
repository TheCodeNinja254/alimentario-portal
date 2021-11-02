import React from "react";
import { Button, Snackbar } from "@material-ui/core";
import { useCookies } from "react-cookie";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cookieText: {
    color: theme.palette.primary.main,
  },
}));

const CookieTextSnackbar = () => {
  const classes = useStyles();

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
      sameSite: true,
    });
  };

  const action = (
    <>
      <Button color="primary" variant="contained" onClick={handleClose}>
        I UNDERSTAND
      </Button>
    </>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message={
        <Typography>
          We use cookies and other technologies to recognize your repeat visits,
          preference and to analyze traffic. To learn more about this and how we
          handle any data we collect from you, click on{" "}
          <a
            rel="noreferrer"
            className={classes.cookieText}
            target="_blank"
            href="https://www.safaricom.co.ke/dataprivacystatement/"
          >
            Safaricom Data Privacy Statement
          </a>
          . Please confirm that you have read and understood this by clicking{" "}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "I Understand"
        </Typography>
      }
      key={vertical + horizontal}
      action={action}
    />
  );
};

export default CookieTextSnackbar;
