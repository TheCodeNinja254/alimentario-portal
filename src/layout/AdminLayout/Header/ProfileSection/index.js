import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Avatar,
  Button,
  Box,
  CardContent,
  Chip,
  ClickAwayListener,
  Grid,
  Link,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import { ListItemButton, Tooltip } from "@mui/material";
import { IconLogin, IconLogout, IconUser } from "@tabler/icons";
import { useMutation } from "@apollo/client";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import User1 from "../../../../assets/images/users/user-round.svg";
import Transitions from "../../../../ui-component/extended/Transitions";
import MainCard from "../../../../ui-component/cards/MainCard";
import { USER_SIGNOUT } from "../../../../api/Mutations/UserAuthentication";
import { GET_SIGNED_IN_USER } from "../../../../api/Queries/Authentication/GetSignedInUser";
import { UserContext } from "../../../../components/AdminSessionProvider";

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
  headerAvatar: {
    cursor: "pointer",
    height: "45px",
    width: "45px",
  },
  profileChip: {
    height: "45px",
    width: "45px",
    alignItems: "center",
    borderRadius: "50%",
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

const ProfileSection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();

  const signedInUser = useContext(UserContext);

  const customization = useSelector((state) => state.customization);
  const [selectedIndex] = React.useState(1);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const [SignOutMutation] = useMutation(USER_SIGNOUT);

  const handleLogout = async () => {
    SignOutMutation({
      refetchQueries: [
        {
          query: GET_SIGNED_IN_USER,
          variables: { awaitRefetchQueries: true },
        },
      ],
    }).then((response) => {
      if (response) {
        navigate("/admin/auth");
      }
    });
  };

  const hourlyGreeting = () => {
    let timeOfDay = "Morning";
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour > 0 && currentHour < 12) {
      timeOfDay = "Morning";
    }

    if (currentHour >= 12 && currentHour < 16) {
      timeOfDay = "Morning";
    }

    if (currentHour >= 16 && currentHour < 23) {
      timeOfDay = "Evening";
    }

    return timeOfDay;
  };

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
    <Box>
      {signedInUser?.status ? (
        <>
          <Tooltip title="Manage account">
            <Chip
              classes={{ label: classes.profileLabel }}
              className={classes.profileChip}
              icon={
                <Avatar
                  src={User1}
                  className={classes.headerAvatar}
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  color="inherit"
                />
              }
              variant="outlined"
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              color="primary"
            />
          </Tooltip>
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
                            <Typography variant="h4">
                              Good {hourlyGreeting()},
                            </Typography>
                            <Typography
                              component="span"
                              variant="h4"
                              className={classes.name}
                            >
                              <strong>
                                {signedInUser?.user?.firstName}{" "}
                                {signedInUser?.user?.lastName}
                              </strong>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle2">
                              Mobile: {signedInUser?.user?.msisdn}
                            </Typography>
                            <Typography variant="subtitle2">
                              Email: {signedInUser?.user?.emailAddress}
                            </Typography>
                          </Grid>
                        </Grid>
                        <List component="nav" className={classes.navContainer}>
                          <ListItemButton
                            className={classes.listItem}
                            sx={{
                              borderRadius: `${customization.borderRadius}px`,
                            }}
                            selected={selectedIndex === 4}
                            component={RouterLink}
                            to="/account"
                          >
                            <ListItemIcon>
                              <IconUser stroke={1.5} size="1.3rem" />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  Manage Account
                                </Typography>
                              }
                            />
                          </ListItemButton>
                          <ListItemButton
                            className={classes.listItem}
                            sx={{
                              borderRadius: `${customization.borderRadius}px`,
                            }}
                            selected={selectedIndex === 4}
                            onClick={handleLogout}
                          >
                            <ListItemIcon>
                              <IconLogout stroke={1.5} size="1.3rem" />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">Logout</Typography>
                              }
                            />
                          </ListItemButton>
                        </List>
                      </CardContent>
                    </MainCard>
                  </ClickAwayListener>
                </Paper>
              </Transitions>
            )}
          </Popper>
        </>
      ) : (
        <Button component={Link} href="/admin/auth">
          <Tooltip title="Sign in or create account">
            <Chip
              classes={{ label: classes.profileLabel }}
              className={classes.profileChip}
              label={
                <IconLogin
                  stroke={1.5}
                  size="1.5rem"
                  color={theme.palette.primary.main}
                />
              }
              variant="filled"
              ref={anchorRef}
              aria-controls={undefined}
              aria-haspopup="false"
              color="primary"
            />
          </Tooltip>
        </Button>
      )}
    </Box>
  );
};

export default ProfileSection;
