import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Button, Drawer, Grid, Box, Chip, Tooltip } from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Email,
  Instagram,
  LinkedIn,
  Phone,
  SupportAgent,
  WhatsApp,
} from "@material-ui/icons";
import { IconBrandTiktok, IconBrandTwitter } from "@tabler/icons";
import SubCard from "../../ui-component/cards/SubCard";
import { gridSpacing } from "../../store/constant";
import AnimatedSection from "../../ui-component/AnimatedSection";

const useStyles = makeStyles((theme) => ({
  cartChip: {
    height: "48px",
    alignItems: "center",
    borderRadius: "27px",
    transition: "all .2s ease-in-out",
    borderColor: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    '&[aria-controls="menu-list-grow"], &:hover': {
      borderColor: theme.palette.primary.main,
      background: `${theme.palette.primary.main}!important`,
      color: theme.palette.primary.light,
      "& svg": {
        stroke: theme.palette.primary.light,
      },
    },
    marginRight: theme.spacing(1),
  },
  profileLabel: {
    lineHeight: 0,
    padding: "12px",
  },
}));

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
  const classes = useStyles();

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
        <Chip
          classes={{ label: classes.profileLabel }}
          className={classes.cartChip}
          label={
            <SupportAgent
              stroke={1.5}
              size="1.5rem"
              color={theme.palette.primary.main}
            />
          }
          variant="outlined"
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="primary"
        />
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
