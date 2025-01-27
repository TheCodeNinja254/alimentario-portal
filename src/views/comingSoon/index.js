import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { Stack } from "@mui/material";
import Logo from "../../ui-component/Logo";
import AuthFooter from "../../ui-component/cards/AuthFooter";
import { gridSpacing } from "../../store/constant";
import AuthWrapper1 from "../auth/components/styles/RegistrationWrapper";
import AuthCardWrapper from "../auth/components/styles/AuthCardWrapper";

const Index = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <AuthWrapper1>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={gridSpacing}
                  alignItems="center"
                  justifyContent="center"
                  style={{ marginTop: theme.spacing(8) }}
                >
                  <Grid item sx={{ mb: 3 }}>
                    <Logo withName={false} />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondary.main}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                          >
                            Hi, Glad you are here
                          </Typography>
                          <Typography
                            variant="body1"
                            fontSize="16px"
                            textAlign={matchDownSM ? "center" : ""}
                          >
                            This feature is coming soon
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Index;
