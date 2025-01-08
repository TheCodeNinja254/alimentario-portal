import React from "react";
import {
  Container,
  Divider,
  Grid,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import {
  Instagram,
  LinkedIn,
  WhatsApp,
  Phone,
  Email,
} from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { IconBrandTiktok, IconBrandTwitter } from "@tabler/icons";
import { makeStyles } from "@material-ui/styles";
import { Stack } from "@mui/material";
import desafioToasted from "../assets/images/desafioToasted.png";
import desafioHarvest from "../assets/images/desafioHarvest.png";
import desafioFoodClub from "../assets/images/desafioFoodClub.png";
import horseRacing from "../assets/images/horseRacingIcon.png";

const useStyles = makeStyles((theme) => ({
  brandImages: {
    height: 50,
    width: "auto",
    margin: theme.spacing(1),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 2),
    marginTop: theme.spacing(4),
    textAlign: "left",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  const currentYear = new Date().getFullYear();

  const ourBrands = [
    { id: 1, img: desafioToasted },
    { id: 2, img: desafioHarvest },
    { id: 3, img: desafioFoodClub },
    { id: 4, img: horseRacing },
  ];

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
      name: "@Desafio_Care",
      link: "https://x.com/Desafio_Care",
      icon: <IconBrandTwitter />,
    },
  ];

  const contacts = [
    { id: 1, name: "0740121619", icon: <WhatsApp /> },
    { id: 2, name: "0780064188", icon: <WhatsApp /> },
    { id: 3, name: "0740121619", icon: <Phone /> },
    { id: 4, name: "0780064188", icon: <Phone /> },
    { id: 5, name: "info@desafio.co.ke", icon: <Email /> },
    { id: 6, name: "customer.care@desafio.co.ke", icon: <Email /> },
  ];

  return (
    <Box className={classes.footer}>
      <Container>
        <Grid container spacing={4}>
          {/* Contacts */}
          <Grid item xs={12} md={4}>
            <Typography className={classes.sectionTitle}>Contact Us</Typography>
            <Box>
              {contacts.map((contact) => (
                <Box key={contact.id} mb={1}>
                  <Button
                    startIcon={contact.icon}
                    variant="text"
                    color="primary"
                  >
                    {contact.name}
                  </Button>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Socials */}
          <Grid item xs={12} md={4}>
            <Typography className={classes.sectionTitle}>
              Social Media
            </Typography>
            <Box>
              {socials.map((social) => (
                <Box key={social.id} mb={1}>
                  <Button
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={social.icon}
                    variant="text"
                    color="primary"
                  >
                    {social.name}
                  </Button>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Our Brands */}
          <Grid item xs={12} md={4}>
            <Typography className={classes.sectionTitle}>Our Brands</Typography>
            <Box display="flex" justifyContent="left" flexWrap="wrap">
              {ourBrands.map((brand) => (
                <img
                  key={`img-${brand.id}`}
                  src={brand.img}
                  alt="Brand Logo"
                  className={classes.brandImages}
                />
              ))}
            </Box>
          </Grid>

          {/* Terms and conditions */}
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Stack direction="row" spacing={2} style={{ textAlign: "center" }}>
              <RouterLink to="/terms">
                <Typography variant="body2" color="textSecondary">
                  Terms & Conditions
                </Typography>
              </RouterLink>

              <Divider orientation="vertical" style={{ height: 15 }} />
              <RouterLink to="/cookie-policy">
                <Typography variant="body2" color="textSecondary">
                  Cookie Policy
                </Typography>
              </RouterLink>
            </Stack>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} style={{ textAlign: "left" }}>
            <Typography variant="body2" color="textSecondary">
              &copy; {currentYear} <strong>desafio.co.ke</strong>. All rights
              reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
