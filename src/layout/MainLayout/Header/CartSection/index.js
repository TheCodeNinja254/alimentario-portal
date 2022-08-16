import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  CardContent,
  Chip,
  ClickAwayListener,
  Grid,
  Link,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import { IconShoppingCart } from "@tabler/icons";
import { Badge, Button } from "@mui/material";
import Transitions from "../../../../ui-component/extended/Transitions";
import MainCard from "../../../../ui-component/cards/MainCard";
import GetCartItemsQuery from "../../../../api/Queries/Cart/GetCartItems";
import ListedCartItems from "../../../../components/ListedCartItems";
import AnimateButton from "../../../../ui-component/extended/AnimateButton";

// style const
const useStyles = makeStyles((theme) => ({
  navContainer: {
    width: "100%",
    maxWidth: "350px",
    minWidth: "300px",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
  },
  profileChip: {
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
  listItem: {
    marginTop: "5px",
  },
  cardContent: {
    padding: "16px !important",
  },
  card: {
    backgroundColor: theme.palette.primary.light,
    marginBottom: "16px",
    marginTop: "16px",
  },
  cartText: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  searchControl: {
    width: "100%",
    paddingRight: "8px",
    paddingLeft: "16px",
    marginBottom: "16px",
    marginTop: "16px",
  },
  startAdornment: {
    fontSize: "1rem",
    color: theme.palette.grey[500],
  },
  flex: {
    display: "flex",
  },
  name: {
    marginLeft: "2px",
    fontWeight: 400,
  },
  animateButton: {
    color: theme.palette.grey[800],
    backgroundColor: theme.palette.warning.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    textTransform: "capitalize",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
    divider: {
      marginTop: theme.spacing(3),
    },
  },
  ScrollHeight: {
    height: "100%",
    maxHeight: "calc(100vh - 250px)",
    overflowX: "hidden",
  },
  badgeWarning: {
    backgroundColor: theme.palette.warning.dark,
    color: "#fff",
  },
}));

const CartSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <GetCartItemsQuery>
      {({ getCartItems: { status, cartItemsList } }) =>
        status ? (
          <>
            <Chip
              classes={{ label: classes.profileLabel }}
              className={classes.profileChip}
              label={
                <Badge badgeContent={cartItemsList?.length} color="primary">
                  <IconShoppingCart
                    stroke={1.5}
                    size="1.5rem"
                    color={theme.palette.primary.main}
                  />
                </Badge>
              }
              variant="outlined"
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              color="primary"
            />
            <Popper
              placement="bottom-end"
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              popperOptions={{
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 14],
                    },
                  },
                ],
              }}
            >
              {({ TransitionProps }) => (
                <Transitions in={open} {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MainCard
                        border={false}
                        elevation={16}
                        content={false}
                        boxShadow
                        shadow={theme.shadows[16]}
                      >
                        <CardContent className={classes.cardContent}>
                          <Grid container direction="column" spacing={0}>
                            <Grid item className={classes.flex}>
                              <Typography variant="h4">My</Typography>
                              <Typography
                                component="span"
                                variant="h4"
                                className={classes.name}
                              >
                                Cart
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="subtitle2">
                                You have{" "}
                                <strong>{cartItemsList?.length}</strong>{" "}
                                {cartItemsList?.length > 1 ? "items" : "item"}{" "}
                                in your cart
                              </Typography>
                            </Grid>
                            <Grid item>
                              <ListedCartItems cartItemsList={cartItemsList} />
                            </Grid>
                            <Grid>
                              <AnimateButton>
                                <Button
                                  component={Link}
                                  href="/cart"
                                  variant="contained"
                                  className={classes.animateButton}
                                >
                                  Checkout Now
                                </Button>
                              </AnimateButton>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </MainCard>
                    </ClickAwayListener>
                  </Paper>
                </Transitions>
              )}
            </Popper>
          </>
        ) : (
          <>
            <Chip
              classes={{ label: classes.profileLabel }}
              className={classes.profileChip}
              label={
                <IconShoppingCart
                  stroke={1.5}
                  size="1.5rem"
                  color={theme.palette.primary.main}
                />
              }
              variant="outlined"
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              color="primary"
            />
            <Popper
              placement="bottom-end"
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              popperOptions={{
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 14],
                    },
                  },
                ],
              }}
            >
              {({ TransitionProps }) => (
                <Transitions in={open} {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MainCard
                        border={false}
                        elevation={16}
                        content={false}
                        boxShadow
                        shadow={theme.shadows[16]}
                      >
                        <CardContent className={classes.cardContent}>
                          <Grid container direction="column" spacing={0}>
                            <Grid item className={classes.flex}>
                              <Typography variant="h4">Your Cart</Typography>
                              <Typography
                                component="span"
                                variant="h4"
                                className={classes.name}
                              >
                                is empty
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="subtitle2"
                                className={classes.cartText}
                              >
                                Items you add to your cart will appear here.
                                Login to see items you had previously added to
                                the cart.
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </MainCard>
                    </ClickAwayListener>
                  </Paper>
                </Transitions>
              )}
            </Popper>
          </>
        )
      }
    </GetCartItemsQuery>
  );
};

export default CartSection;
