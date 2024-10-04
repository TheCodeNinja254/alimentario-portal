import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/styles";
import {
  Button,
  Drawer,
  Fab,
  Grid,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Email,
  Instagram,
  LinkedIn,
  Phone,
  SupportAgent,
  WhatsApp,
} from "@material-ui/icons";
import { Box } from "@mui/material";
import { IconBrandTiktok, IconBrandTwitter } from "@tabler/icons";
import SubCard from "../../ui-component/cards/SubCard";
import { gridSpacing } from "../../store/constant";
import AnimatedSection from "../../ui-component/AnimatedSection";

const socials = [
  {
    id: 1,
    name: "@Desafio_Alimentario",
    link: "https://www.instagram.com/desafio_alimentario/",
    icon: <Instagram />,
  },
  {
    id: 2,
    name: "@desafio_alimentario",
    link: "https://www.tiktok.com/@desafio_alimentario",
    icon: <IconBrandTiktok />,
  },
  {
    id: 3,
    name: "desafio-care",
    link: "https://linkedin.com/in/desafio-care",
    icon: <LinkedIn />,
  },
  {
    id: 4,
    name: " @Desafio_Care",
    link: " https://x.com/Desafio_Care",
    icon: <IconBrandTwitter />,
  },
];

const contacts = [
  {
    id: 1,
    name: "0740121619",
    link: "",
    icon: <WhatsApp />,
  },
  {
    id: 2,
    name: "0780064188",
    link: "",
    icon: <WhatsApp />,
  },
  {
    id: 3,
    name: "0740121619",
    link: "",
    icon: <Phone />,
  },
  {
    id: 4,
    name: "0780064188",
    link: "",
    icon: <Phone />,
  },
  {
    id: 5,
    name: "info@desafio.co.ke",
    link: "",
    icon: <Email />,
  },
  {
    id: 6,
    name: "customer.care@desafio.co.ke",
    link: "",
    icon: <Email />,
  },
];

const SocialsAndHelp = () => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1000);
  }, [animate]);

  return (
    <>
      <Tooltip title="Connect with us on Socials and on call.">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="string"
          color="secondary"
          sx={{
            bottom: 0,
            m: 4,
            position: "fixed",
            right: 20,
            zIndex: () => theme.zIndex.speedDial,
            boxShadow: theme.shadows[8],
          }}
        >
          <IconButton color="inherit" size="large" disableRipple>
            <SupportAgent />
          </IconButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 400,
          },
        }}
      >
        <PerfectScrollbar component="div">
          <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
            <Grid item xs={12}>
              <AnimatedSection animate={animate} duration={500}>
                <SubCard title="Let's connect">
                  {socials.map((item) => (
                    <Box key={item.id}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="text"
                          sx={{ marginBottom: theme.spacing(2) }}
                          startIcon={item.icon}
                        >
                          {item.name}
                        </Button>
                      </a>
                    </Box>
                  ))}
                </SubCard>
              </AnimatedSection>
            </Grid>
            <Grid item xs={12}>
              <AnimatedSection animate={animate} duration={500}>
                <SubCard title="Contact Us">
                  {contacts.map((item) => (
                    <Box key={item.id}>
                      <Button
                        variant="text"
                        sx={{ marginBottom: theme.spacing(2) }}
                        startIcon={item.icon}
                      >
                        {item.name}
                      </Button>
                    </Box>
                  ))}
                </SubCard>
              </AnimatedSection>
            </Grid>
          </Grid>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default SocialsAndHelp;
