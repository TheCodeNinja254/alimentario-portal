import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const PageTitle = ({ title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: theme.spacing(4) }}>
      <Typography
        variant="h2"
        component="h2"
        style={{ color: theme.palette.primary.main }}
      >
        {title || ""}
      </Typography>
      <Typography variant="caption" component="h2">
        {subTitle || ""}
      </Typography>
    </Box>
  );
};

export default PageTitle;
