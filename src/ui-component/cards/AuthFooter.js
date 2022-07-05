import React from "react";

// material-ui
import { Link, Typography, Stack } from "@material-ui/core";

// ===========================|| FOOTER - AUTHENTICATION 2 & 3 ||=========================== //

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
