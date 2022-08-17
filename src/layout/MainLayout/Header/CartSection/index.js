import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Chip,
  ClickAwayListener,
  Grid,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@material-ui/core";
import { IconShoppingCart, IconX } from "@tabler/icons";
import {
  Badge,
  Button,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import Transitions from "../../../../ui-component/extended/Transitions";
import MainCard from "../../../../ui-component/cards/MainCard";
import GetCartItemsQuery from "../../../../api/Queries/Cart/GetCartItems";
import photo from "../../../../assets/images/Graphics/bbq_05.jpg";
import CartSectionItem from "./CartSectionItem";
import Image from "../../../../components/Image";

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
}));

const CartSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down("md"));

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
        status && cartItemsList?.length > 0 ? (
          <>
            <Chip
              classes={{ label: classes.profileLabel }}
              className={classes.cartChip}
              label={
                <Badge badgeContent={cartItemsList.length || 0} color="primary">
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
                <Transitions
                  position={matchesXs ? "top" : "top-right"}
                  in={open}
                  {...TransitionProps}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MainCard
                        border={false}
                        elevation={16}
                        content={false}
                        boxShadow
                        shadow={theme.shadows[16]}
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
                                    My Cart
                                  </Typography>
                                  <Chip
                                    size="small"
                                    label={cartItemsList?.length}
                                    sx={{
                                      color: theme.palette.background.default,
                                      bgcolor: theme.palette.warning.dark,
                                    }}
                                  />
                                </Stack>
                              </Grid>
                              <Grid item>
                                <IconButton
                                  edge="end"
                                  aria-label="delete"
                                  onClick={handleClose}
                                >
                                  <IconX />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={12}>
                            <PerfectScrollbar
                              style={{
                                height: "100%",
                                maxHeight: "calc(100vh - 205px)",
                                overflowX: "hidden",
                              }}
                            >
                              <Grid container direction="column" spacing={2}>
                                <Grid item xs={12} p={0}>
                                  <Divider sx={{ my: 0 }} />
                                </Grid>
                              </Grid>
                              <CartSectionItem cartItemsList={cartItemsList} />
                            </PerfectScrollbar>
                          </Grid>
                        </Grid>
                        <Divider />
                        <CardActions sx={{ p: 1.25, justifyContent: "center" }}>
                          <Button
                            size="small"
                            disableElevation
                            component={RouterLink}
                            to="/checkout"
                          >
                            Checkout Now
                          </Button>
                        </CardActions>
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
              className={classes.cartChip}
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
                                    My Cart
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
                                <IconButton
                                  edge="end"
                                  aria-label="delete"
                                  onClick={handleClose}
                                >
                                  <IconX />
                                </IconButton>
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
