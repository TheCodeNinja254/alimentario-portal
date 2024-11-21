import React from "react";
import { Link, Typography, Stack } from "@mui/material";

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography
      variant="subtitle2"
      component={Link}
      href="desafio.co.ke"
      target="_blank"
      underline="hover"
    >
      &copy; desafio.co.ke
    </Typography>
  </Stack>
);

export default AuthFooter;
