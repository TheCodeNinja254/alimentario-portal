import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Chip, Grid, Paper, Stack, Typography } from "@material-ui/core";
import { CardContent, CircularProgress, Divider } from "@mui/material";
import { useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import GetCartItemsQuery, {
  GET_CART_ITEMS,
} from "../../../api/Queries/Cart/GetCartItems";
import photo from "../../../assets/images/Graphics/bbq_05.jpg";
import CartItem from "./CartItem";
import Image from "../../../components/Image";
import { REMOVE_CART_ITEM } from "../../../api/Mutations/Cart";
import MySnackbar from "../../../components/MySnackbar/MySnackbar";
import ErrorHandler from "../../../utils/errorHandler";
import MainCard from "../../../ui-component/cards/MainCard";
import AnimateButton from "../../../ui-component/extended/AnimateButton";

// style const
const useStyles = makeStyles((theme) => ({
  cartChip: {
    height: "48px",
    alignItems: "center",
    borderRadius: "27px",
    transition: "all .2s ease-in-out",
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    '&[aria-controls="menu-list-grow"], &:hover': {
      borderColor: theme.palette.primary.main,
      background: `${theme.palette.primary.main}!important`,
      color: theme.palette.primary.light,
      "& svg": {
        stroke: theme.palette.primary.light,
      },
    },
    marginRight: theme.spacing(1),
  },
  profileLabel: {
    lineHeight: 0,
    padding: "12px",
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: "16px",
    marginTop: "16px",
  },
  noContentImage: {
    height: 280,
    width: "100%",
    minWidth: 300,
  },
  noContentText: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: 16,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
  },
  noContentSubText: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
  },
  badgeWarning: {
    backgroundColor: theme.palette.warning.dark,
    color: "#fff",
  },
  cartSubText: {
    marginTop: theme.spacing(3),
  },
  cartPaper: {
    marginTop: theme.spacing(2),
  },
}));

const Cart = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const [submitDetails, setRemoveCartItemDetails] = React.useState({
    message: "",
    severity: "success",
  });

  const { message, severity } = submitDetails;

  const [RemoveCartItemMutation, { loading }] = useMutation(REMOVE_CART_ITEM);

  const handleDeleteCartItem = async (id) => {
    RemoveCartItemMutation({
      variables: {
        id,
      },
      refetchQueries: [
        {
          query: GET_CART_ITEMS,
          variables: { awaitRefetchQueries: true },
        },
      ],
    })
      .then((response) => {
        const {
          data: {
            removeCartItem: {
              status: removeItemStatus,
              message: removeItemMessage,
            },
          },
        } = response;
        if (removeItemStatus) {
          setSnackbarOpen(true);
          setRemoveCartItemDetails({
            message: removeItemMessage,
            severity: "success",
          });
        } else {
          setSnackbarOpen(true);
          setRemoveCartItemDetails({
            message: removeItemMessage,
            severity: "error",
          });
        }
      })
      .catch((res) => {
        setSnackbarOpen(true);
        setRemoveCartItemDetails({
          message: ErrorHandler(res.message || res.graphQLErrors[0].message),
          severity: "error",
        });
      });
  };

  return (
    <>
      <GetCartItemsQuery>
        {({ getCartItems: { status, cartItemsList } }) =>
          status && cartItemsList?.length > 0 ? (
            <Paper elevation={0} className={classes.cartPaper}>
              <MainCard
                border={false}
                elevation={0}
                content={false}
                boxShadow
                shadow={theme.shadows[0]}
              >
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ pt: 2, px: 2 }}
                    >
                      <Grid item>
                        <Stack direction="row" spacing={2}>
                          <Typography variant="subtitle1">
                            Items In My Cart
                          </Typography>
                          <Chip
                            size="small"
                            label={cartItemsList?.length}
                            sx={{
                              color: theme.palette.background.default,
                              bgcolor: theme.palette.warning.dark,
                            }}
                          />
                          {loading && <CircularProgress size={20} />}
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item xs={12} p={0}>
                        <Divider sx={{ my: 0 }} />
                      </Grid>
                    </Grid>
                    <CartItem
                      cartItemsList={cartItemsList}
                      handleDeleteCartItem={handleDeleteCartItem}
                    />
                  </Grid>
                </Grid>
                <Divider />
              </MainCard>
            </Paper>
          ) : (
            <Paper elevation={0} className={classes.cartPaper}>
              <MainCard
                border={false}
                elevation={0}
                content={false}
                boxShadow
                shadow={theme.shadows[0]}
              >
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ pt: 2, px: 2 }}
                    >
                      <Grid item>
                        <Stack direction="row" spacing={2}>
                          <Typography variant="subtitle1">
                            Items In My Cart
                          </Typography>
                          <Chip
                            size="small"
                            label={0}
                            sx={{
                              color: theme.palette.background.default,
                              bgcolor: theme.palette.warning.dark,
                            }}
                          />
                        </Stack>
                      </Grid>
                      <Grid item>
                        <AnimateButton>
                          <Button
                            disableElevation
                            fullWidth
                            size="small"
                            variant="contained"
                            color="secondary"
                            component={RouterLink}
                            to="/"
                          >
                            Go Shopping
                          </Button>
                        </AnimateButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <CardContent>
                      <Image
                        alt="Nothing to show"
                        src={photo}
                        className={classes.noContentImage}
                      />
                      <Typography className={classes.noContentText}>
                        Your cart is empty.
                      </Typography>
                      <Typography
                        variant="caption"
                        className={classes.noContentSubText}
                      >
                        Items you add to your cart will appear here.
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </MainCard>
            </Paper>
          )
        }
      </GetCartItemsQuery>
      <MySnackbar
        message={message}
        severity={severity}
        setOpen={setSnackbarOpen}
        open={snackbarOpen}
      />
    </>
  );
};

export default Cart;
