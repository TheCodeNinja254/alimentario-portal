import React, { useEffect, useState } from "react";
import { Card, Button } from "@material-ui/core";
import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useLazyQuery, useMutation } from "@apollo/client";
import { RingLoader } from "react-spinners";
import Image from "../../../components/Image";
import AnimatedSection from "../../../ui-component/AnimatedSection";
import lipaNaMpesaLogo from "../../../assets/images/logos/lipaNaMpesaLogo.jpg";
import ErrorHandler from "../../../utils/errorHandler";
import StatusIcon from "../../../components/StatusIcon";
import Dialog from "../../../components/Dialog";
import LIPA_NA_MPESA_ONLINE from "../../../api/Mutations/Payments";
import { encrypt } from "../../../utils/encryptDecrypt";
import { CHECK_PAYMENTS_STATUS } from "../../../api/Queries/Payments/GetDisplayProducts";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    pl: 2,
    padding: theme.spacing(2),
    background: theme.palette.background.light,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
  },
  dialogContent: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  modalTitle: {
    color: theme.palette.secondary.dark,
    fontWeight: 700,
    fontSize: 20,
  },
  costSummary: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  costItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  mpesaLogo: {
    marginTop: theme.spacing(0),
    width: 150, // Adjust this size as needed
    height: "auto",
  },
  payNowButton: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: theme.spacing(1.5),
    width: "100%",
    fontWeight: "bold",
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const PaymentCard = ({ orderInfo, chargedMsisdn }) => {
  const theme = useTheme();
  const classes = useStyles();

  const [animate, setAnimate] = useState(false);
  const [promptText, setPromptText] = useState(
    "Check your phone for a prompt to pay"
  );

  const { paymentCorrelationId, totalDue, deliveryFee, itemsOnOrder } =
    orderInfo;

  const [LipaNaMpesaMutation, { loading }] = useMutation(LIPA_NA_MPESA_ONLINE);
  const [checkMpesaPaymentStatus] = useLazyQuery(CHECK_PAYMENTS_STATUS, {
    variables: {
      paymentCorrelationId,
    },
    fetchPolicy: "network-only",
  });

  const [responseDetails, setResponseDetails] = useState({
    modalOpenStatus: false,
    addStatus: false,
    addMessage: "",
    type: null,
  });

  const { modalOpenStatus, addStatus, addMessage, type } = responseDetails;

  const [checkingStatus, setCheckingStatus] = useState(false); // To track payment status checking
  const [pollingCompletionStatus, setPollingCompletionStatus] = useState(false); // To track polling status
  const [pollingCount, setPollingCount] = useState(0);
  const [showAlternative, setShowAlternative] = useState(false);

  const closeDialog = () => {
    setResponseDetails({
      modalOpenStatus: false,
      addStatus: true,
      addMessage: "",
      type: null,
    });
  };

  const handlePayNow = async () => {
    if (itemsOnOrder.length > 0 && totalDue > 0) {
      LipaNaMpesaMutation({
        variables: {
          phoneNumber: encrypt(chargedMsisdn),
          // amount: encrypt(`${totalDue + deliveryFee}`), // flat rate for delivery for now
          amount: encrypt(`${1}`), // flat rate for delivery for now - For test purposes
          paymentCorrelationId, // created at order creation, Now we need to attach it to a payment
        },
      })
        .then((response) => {
          const {
            data: {
              lipaNaMpesaOnline: {
                status: invokeStkStatus,
                customerMessageExtended,
                customerMessage,
              },
            },
          } = response;
          if (invokeStkStatus) {
            setPollingCount((prevState) => prevState + 1);
            setCheckingStatus(true);
            setPollingCompletionStatus(false);
            setResponseDetails({
              modalOpenStatus: true,
              addStatus: true,
              addMessage: customerMessage,
              type: null,
            });
          } else {
            setCheckingStatus(false);
            setPollingCompletionStatus(true);
            setResponseDetails({
              modalOpenStatus: true,
              addStatus: false,
              addMessage: `${customerMessage} - ${customerMessageExtended}`,
              type: null,
            });
          }
        })
        .catch((res) => {
          setCheckingStatus(false);
          setPollingCompletionStatus(true);
          setResponseDetails({
            modalOpenStatus: true,
            addStatus: false,
            addMessage: ErrorHandler(
              res.message || res.graphQLErrors[0].message
            ),
            type: null,
          });
        });
    } else {
      setCheckingStatus(false);
      setPollingCompletionStatus(true);
      setResponseDetails({
        modalOpenStatus: true,
        addStatus: false,
        addMessage:
          "Something went wrong! We cannot confirm the order at this time",
        type: null,
      });
    }
  };

  const handleCheckPaymentStatus = () => {
    checkMpesaPaymentStatus()
      .then((response) => {
        const {
          data: {
            checkPaymentStatus: { status, message, pollingComplete },
          },
        } = response;

        if (pollingComplete) {
          setPollingCount(0);
          setCheckingStatus(false);
          setPollingCompletionStatus(true);

          if (status) {
            setResponseDetails({
              modalOpenStatus: true,
              addStatus: true,
              addMessage: message,
              type: "transaction",
            });
          } else {
            setResponseDetails({
              modalOpenStatus: true,
              addStatus: false,
              addMessage: message,
              type: "transaction",
            });
          }
        } else {
          setPollingCount((prevState) => prevState + 1);
          setPollingCompletionStatus(false);
        }
      })
      .catch((error) => {
        setResponseDetails({
          modalOpenStatus: true,
          addStatus: false,
          addMessage: ErrorHandler(
            error.message || error.graphQLErrors[0].message
          ),
          type: "transaction",
        });
      });
  };

  useEffect(() => {
    if (checkingStatus && !pollingCompletionStatus && pollingCount > 0) {
      setTimeout(() => {
        handleCheckPaymentStatus();
      }, 4000);

      // set prompt message
      switch (true) {
        case pollingCount <= 6:
          setPromptText("Please check your phone for the M-PESA prompt.");
          break;
        case pollingCount > 6 && pollingCount <= 17:
          setPromptText(
            "Still waiting... Once you enter your PIN, wait to see the message here."
          );
          break;
        case pollingCount > 17 && pollingCount <= 27:
          setPromptText(
            "Almost there, we’re still processing the request. Please wait."
          );
          break;
        case pollingCount > 27 && pollingCount <= 35:
          setPromptText("Looks like something went wrong. Apologies for that.");
          setShowAlternative(true);
          break;
        default:
          setPollingCount(0);
          setCheckingStatus(false);
          setPollingCompletionStatus(true);
          setShowAlternative(true);

          setResponseDetails({
            modalOpenStatus: true,
            addStatus: false,
            addMessage: "Looks like something went wrong. Apologies for that.",
            type: "transaction",
          });

          setPromptText("Something must have gone wrong.");
      }
    }
  }, [checkingStatus, pollingCompletionStatus, pollingCount]);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AnimatedSection animate={animate} duration="1.4s">
      <Dialog
        open={modalOpenStatus}
        maxWidth="md"
        fullWidth={false}
        disableBackdropClose={
          checkingStatus && pollingCount > 1 && pollingCount <= 62
        }
        modalContent={
          <Box>
            <Box className={classes.dialogContent}>
              {type === "transaction" && pollingCount < 62 ? (
                <StatusIcon
                  status={addStatus ? "success" : "An error occurred"}
                  text={addStatus ? "Payment Successful" : "An error occurred"}
                />
              ) : (
                <Box>
                  <Typography
                    sx={{
                      color: theme.palette.success.main,
                      fontWeight: 700,
                      fontSize: 20,
                      textAlign: "center",
                      marginTop: theme.spacing(3),
                      marginBottom: theme.spacing(2),
                    }}
                  >
                    {addStatus ? "Payment prompt sent" : "An error occurred"}
                  </Typography>
                  <Box
                    className={classes.dialogContent}
                    display="flex"
                    justifyContent="center"
                  >
                    <RingLoader color={theme.palette.primary.main} />
                  </Box>
                  {addStatus && (
                    <Typography
                      sx={{
                        color: theme.palette.info.main,
                        fontWeight: 700,
                        fontSize: 15,
                        textAlign: "center",
                        marginTop: theme.spacing(3),
                        marginBottom: theme.spacing(2),
                      }}
                    >
                      {promptText}
                    </Typography>
                  )}
                </Box>
              )}
              <Typography variant="body2"> {addMessage}</Typography>
            </Box>
            {showAlternative && (
              <Alert
                variant="outlined"
                severity="info"
                sx={{ marginTop: theme.spacing(2) }}
              >
                <AlertTitle>Use Lipa Na M-PESA (Buy Goods)</AlertTitle>
                <Typography sx={{ marginTop: theme.spacing(2) }}>
                  To complete the payment manually:
                </Typography>
                <List>
                  <ListItem>1. Select M-PESA</ListItem>
                  <ListItem>2. Select Lipa Na M-PESA</ListItem>
                  <ListItem>
                    3. Select Till Number:{" "}
                    <span style={{ fontWeight: 700 }}>5721425</span>
                  </ListItem>
                  <ListItem>
                    4. Enter the amount and complete the transaction with your
                    M-PESA PIN
                  </ListItem>
                </List>
              </Alert>
            )}
          </Box>
        }
        modalActions={
          <Button
            disableElevation
            variant="contained"
            onClick={() => closeDialog()}
            color="primary"
            autoFocus
            disabled={pollingCount > 1 && checkingStatus}
          >
            Close
          </Button>
        }
        handleClose={closeDialog}
      />
      <Card elevation={0} className={classes.paper}>
        <Grid container>
          <Grid item xs={7}>
            <DialogTitle>
              <Box>
                <Typography className={classes.modalTitle} variant="h1">
                  Payment
                </Typography>
                <Typography variant="caption">
                  Make payment via M-PESA
                </Typography>
              </Box>
            </DialogTitle>
          </Grid>
          <Grid item xs={5}>
            <Image
              src={lipaNaMpesaLogo}
              alt="M-PESA"
              className={classes.mpesaLogo}
            />
          </Grid>

          {/* Cost Summary Section */}
          <Divider sx={{ width: "100%" }} />
          <Grid item xs={12} className={classes.costSummary}>
            <div className={classes.costItem}>
              <Typography variant="body1">Amount:</Typography>
              <Typography variant="body1">{totalDue} KES</Typography>
            </div>
            <div className={classes.costItem}>
              <Typography variant="body1">Delivery Fees:</Typography>
              <Typography variant="body1">{deliveryFee} KES</Typography>
            </div>
            <div className={classes.costItem}>
              <Typography variant="body1" fontWeight="bold">
                Total:
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                {totalDue + deliveryFee} KES
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} className={classes.costSummary}>
            <Alert variant="outlined" severity="info">
              <AlertTitle>Important</AlertTitle>
              <Typography>
                This is an M-PESA Express payment meaning on clicking{" "}
                <strong>Pay Now</strong> you will get a prompt on your phone to
                enter your <strong>M-PESA PIN</strong> to complete the
                transaction.
              </Typography>
            </Alert>
          </Grid>

          {/* Pay Now Button */}
          <Grid item xs={12}>
            <Button className={classes.payNowButton} onClick={handlePayNow}>
              {loading ? (
                <>
                  <CircularProgress
                    size={23}
                    sx={{ color: theme.palette.primary.light }}
                  />{" "}
                  <span>&nbsp;&nbsp;&nbsp;Please wait...</span>
                </>
              ) : (
                "Pay Now"
              )}
            </Button>
          </Grid>
        </Grid>
      </Card>
    </AnimatedSection>
  );
};

export default PaymentCard;
