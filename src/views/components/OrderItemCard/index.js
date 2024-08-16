import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@material-ui/styles";
import { styled } from "@mui/material/styles";

const StyledChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const OrderItemCard = ({ orderItem }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card elevation={0} sx={{ marginTop: theme.spacing(2) }} variant="outlined">
      <CardContent>
        <Grid spacing={2} container>
          <Grid item xs={3} sm={2}>
            <Avatar
              alt="productName"
              src={`/images/${orderItem.productPicMain}`}
              sx={{ height: isMobile ? 50 : 100, width: isMobile ? 50 : 100 }}
            />
          </Grid>
          <Grid item xs={9} sm={10}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {orderItem.productName}
            </Typography>
            {orderItem.productDescription !== " " && (
              <Typography
                variant="caption"
                sx={{ marginTop: theme.spacing(1) }}
              >
                <strong>Description: </strong> {orderItem?.productDescription}
              </Typography>
            )}

            {orderItem.orderSpecification && (
              <Typography
                variant="caption"
                sx={{ marginTop: theme.spacing(1) }}
              >
                <strong>Additonal Notes: </strong>{" "}
                {orderItem?.orderSpecification}
              </Typography>
            )}

            <Grid container sx={{ marginTop: theme.spacing(1) }}>
              {orderItem?.productPrice !== 0 && (
                <Grid item>
                  <StyledChip
                    label={
                      <Typography>
                        <strong>{orderItem?.productQuantity}</strong>{" "}
                        {orderItem?.productUnitOfMeasure} @ Ksh.{" "}
                        <strong>{orderItem?.productPrice}</strong>
                      </Typography>
                    }
                  />
                </Grid>
              )}
              {orderItem?.productPrice !== 0 && (
                <Grid item>
                  <StyledChip
                    label={
                      <Typography>
                        Ksh.{" "}
                        <strong>
                          {orderItem?.productQuantity * orderItem?.productPrice}
                        </strong>
                      </Typography>
                    }
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
