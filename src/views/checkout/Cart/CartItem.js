import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { IconTrash } from "@tabler/icons";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

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
    fontSize: 17,
    color: theme.palette.primary.main,
    fontWeight: 700,
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
    <Box>
      {cartItemsList.map((cartItem) => (
        <Card
          key={cartItem.id}
          elevation={0}
          style={{
            marginTop: theme.spacing(2),
            borderRadius: 4,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <CardHeader
            avatar={
              <StyledAvatar
                alt={cartItem.productName}
                src={`/images/${cartItem?.productPicMain}`}
              />
            }
            action={
              <IconButton
                aria-label="delete"
                onClick={() => handleDeleteCartItem(cartItem.id)}
              >
                <IconTrash />
              </IconButton>
            }
            title={
              <Typography className={classes.productName}>
                {cartItem.productName}
              </Typography>
            }
            subheader={
              <Typography
                variant="caption"
                sx={{ marginLeft: theme.spacing(2) }}
              >
                {cartItem.productDescription}{" "}
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {cartItem?.customerSpecification ||
                "No additional information provided"}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Box display="flex" justifyContent="right">
              <StyledChip
                label={
                  <Typography>
                    <strong>{cartItem?.quantity}</strong>{" "}
                    {cartItem?.productUnitOfMeasure} @ Ksh.{" "}
                    <strong>{cartItem?.productPrice}</strong>
                  </Typography>
                }
              />
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
            </Box>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

CartItem.propTypes = {
  cartItemsList: PropTypes.array.isRequired,
  handleDeleteCartItem: PropTypes.func.isRequired,
  calculateTotalDue: PropTypes.func.isRequired,
};

export default CartItem;
