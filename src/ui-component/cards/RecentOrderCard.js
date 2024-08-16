import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@material-ui/styles";
import { FiberManualRecord } from "@material-ui/icons";
import { Stack } from "@material-ui/core";
import formatDate from "../../utils/formatDate";
import BufferProgress from "../../components/BufferProgress";

const useStyles = makeStyles((theme) => ({
  tagLine: {
    color: theme.palette.grey[900],
    opacity: 0.6,
    marginBottom: theme.spacing(2),
  },
  chip: {
    fontSize: 13,
    fontWeight: "bolder",
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.lighter,
    marginRight: theme.spacing(0.5),
  },
}));

const RecentOrderCard = ({ order, handleViewMore, showNames }) => {
  const theme = useTheme();
  const classes = useStyles();

  const statusColor = {
    New: theme.palette.info.main,
    Pending: theme.palette.warning.light,
    Delivered: theme.palette.success.main,
    Enroute: theme.palette.info.light,
    Preparation: theme.palette.grey[600],
    Delayed: theme.palette.warning.dark,
    Cancelled: theme.palette.error.main,
  };

  const itemsToShowLoaderFor = [
    "New",
    "Pending",
    "Enroute",
    "Preparation",
    "Delayed",
  ];

  return (
    <Card
      elevation={0}
      sx={{
        zIndex: 10,
        borderColor: theme.palette.warning.main,
        marginBottom: theme.spacing(2),
      }}
    >
      {itemsToShowLoaderFor.includes(order.orderStatus) && (
        <BufferProgress backgroundColor={statusColor[order.orderStatus]} />
      )}
      <CardActionArea onClick={() => handleViewMore(order)}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AvatarGroup
                max={5}
                align="left"
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row-reverse",
                }}
              >
                {order.specifications?.map((prod) => (
                  <Tooltip title={prod?.productName}>
                    <Avatar
                      alt="Avocado"
                      src={`/images/${prod?.productPicMain}`}
                      sx={{ width: 56, height: 56 }}
                    />
                  </Tooltip>
                ))}
              </AvatarGroup>
            </Grid>
          </Grid>
          {showNames && (
            <Stack direction="row">
              {order.specifications.map((prod) => (
                <Stack direction="row">
                  <Typography variant="caption">{prod?.productName}</Typography>
                  <FiberManualRecord
                    size="small"
                    sx={{
                      fontSize: 10,
                      size: 10,
                      marginTop: theme.spacing(0.5),
                    }}
                  />
                </Stack>
              ))}
            </Stack>
          )}
          <Divider sx={{ marginTop: theme.spacing(1) }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: theme.spacing(2),
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{ marginTop: theme.spacing(2) }}
              >
                {formatDate(order?.createdAt, true)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
              }}
            >
              <Chip
                variant="filled"
                label={
                  <Typography>
                    Ksh. <strong>{order?.amountDue}</strong>
                  </Typography>
                }
                className={classes.chip}
              />
              <Chip
                variant="filled"
                sx={{ backgroundColor: statusColor[order.orderStatus] }}
                label={
                  <Typography style={{ color: theme.palette.common.white }}>
                    <strong>{order.orderStatus}</strong>
                  </Typography>
                }
              />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecentOrderCard;
