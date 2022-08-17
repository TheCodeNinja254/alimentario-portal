import React from "react";
import { useTheme, styled } from "@mui/material/styles";
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
import FormatDate from "../../../../utils/formatDate";

// styles
const ListItemWrapper = styled("div")(({ theme }) => ({
  cursor: "pointer",
  padding: 16,
  "&:hover": {
    background: theme.palette.primary.light,
  },
  "& .MuiListItem-root": {
    padding: 0,
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const CartSectionItem = ({ cartItemsList }) => {
  const theme = useTheme();

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
                <Avatar
                  alt="John Doe"
                  src={`/images/${cartItem?.productPicMain}`}
                />
              </ListItemAvatar>
              <ListItemText primary={cartItem.productName} />
              <ListItemSecondaryAction>
                <Grid container justifyContent="flex-end">
                  <Grid item xs={12}>
                    <IconButton edge="end" aria-label="delete">
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
                <Typography variant="caption" display="block" gutterBottom>
                  {FormatDate(cartItem.createdAt, true)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item>
                    <StyledChip
                      label={
                        <Typography>
                          Quantity: <strong>{cartItem?.quantity}</strong> @ Ksh.{" "}
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

export default CartSectionItem;
