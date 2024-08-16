import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Avatar,
  Chip,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { IconTrash } from "@tabler/icons";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

// styles
const ListItemWrapper = styled("div")(() => ({
  padding: 16,
  "& .MuiListItem-root": {
    padding: 0,
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const StyledAvatar = styled(Avatar)(() => ({
  height: 100,
  width: 100,
}));

const useStyles = makeStyles((theme) => ({
  productName: {
    marginLeft: theme.spacing(2),
    fontSize: 17,
    color: theme.palette.primary.dark,
    fontWeight: 500,
  },
}));

const CartItem = ({
  cartItemsList,
  handleDeleteCartItem,
  calculateTotalDue,
}) => {
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    calculateTotalDue(cartItemsList);
  }, [cartItemsList]);

  return (
    <List
      sx={{
        width: "100%",
        py: 0,
        borderRadius: "10px",
        [theme.breakpoints.down("md")]: {
          maxWidth: "100%",
          minWidth: 350,
        },
        "& .MuiListItemSecondaryAction-root": {
          top: 22,
        },
        "& .MuiDivider-root": {
          my: 0,
        },
        "& .list-container": {
          pl: 7,
        },
      }}
    >
      {cartItemsList.map((cartItem) => (
        <div key={cartItem.id}>
          <ListItemWrapper>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <StyledAvatar
                  alt={cartItem.productName}
                  src={`/images/${cartItem?.productPicMain}`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className={classes.productName}>
                    {cartItem.productName}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant="caption"
                    sx={{ marginLeft: theme.spacing(2) }}
                  >
                    {cartItem.productDescription}{" "}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <Grid container justifyContent="flex-end">
                  <Grid item xs={12}>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteCartItem(cartItem.id)}
                    >
                      <IconTrash />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItemSecondaryAction>
            </ListItem>
            <Grid container direction="column" className="list-container">
              <Grid item xs={12} sx={{ pb: 2 }}>
                <Typography variant="subtitle2">
                  {cartItem?.customerSpecification}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item>
                    <StyledChip
                      label={
                        <Typography>
                          <strong>{cartItem?.quantity}</strong>{" "}
                          {cartItem?.productUnitOfMeasure} @ Ksh.{" "}
                          <strong>{cartItem?.productPrice}</strong>
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item>
                    <StyledChip
                      label={
                        <Typography>
                          Ksh.{" "}
                          <strong>
                            {cartItem?.quantity * cartItem?.productPrice}
                          </strong>
                        </Typography>
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ListItemWrapper>
          <Divider />
        </div>
      ))}
    </List>
  );
};

CartItem.propTypes = {
  cartItemsList: PropTypes.array.isRequired,
  handleDeleteCartItem: PropTypes.func.isRequired,
  calculateTotalDue: PropTypes.func.isRequired,
};

export default CartItem;
