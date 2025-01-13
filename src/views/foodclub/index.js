import React, { useEffect, useState } from "react";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Card from "@mui/material/Card";
import { makeStyles, useTheme } from "@material-ui/styles";
import { gridSpacing } from "../../store/constant";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import InformationTab from "../components/InformationTab";
import Image from "../../components/Image";
import AnimatedSection from "../../ui-component/AnimatedSection";
import chefsService from "../../assets/images/chefsService.png";
import myCookingChef from "../../assets/images/myCookingChef.jpeg";
import useIsMobile from "../../hooks/useIsMobile";

const brandHeader = {
  categoryId: 1,
  title: "",
  categoryName: "Desafio Food Club",
  categoryDisplayPic: "/images/categories/desafioFoodClub.png",
  link: "/desafio-foodclub",
  type: "navigational",
};

const foodclubServices = [
  {
    id: 1,
    image: myCookingChef,
    title: "Chef's Service",
  },
  {
    id: 2,
    image: chefsService,
    title: "Chef's Table",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  chip: {
    marginRight: theme.spacing(1),
    borderColor: theme.palette.primary.dark,
  },
}));

const Events = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    setLoading(false);
  }, []);

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <GetSignedInCustomerQuery>
      {({ getSignedInCustomer: { status } }) => (
        <>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <Box sx={{ width: "100%" }}>
                    <Box key={brandHeader.categoryId}>
                      <AnimatedSection animate={animate} duration="1.8s">
                        <Card elevation={0}>
                          <img
                            src={brandHeader.categoryDisplayPic}
                            alt="Brand Logo"
                            style={{ height: isMobile ? "60px" : 70 }}
                          />
                        </Card>
                        <Box sx={{ marginY: theme.spacing(3) }}>
                          <Typography variant="h3">Join the club?</Typography>
                          <Typography
                            variant="body2"
                            style={{ marginTop: theme.spacing(3) }}
                          >
                            You can Experience Desafio with us and more people
                            or at your private event. You can also access any of
                            our Chefs for your event. We bring the warmth of
                            family and the excellence of Desafio - The
                            Desafio&apos;s touch.{" "}
                          </Typography>
                          <Typography>
                            Status = {status ? "true" : "false"}
                          </Typography>
                        </Box>
                      </AnimatedSection>
                      <AnimatedSection animate={animate} duration="2s">
                        <Box>
                          <Typography variant="h4">
                            We can come to you, or, you can come to us!
                          </Typography>
                        </Box>
                      </AnimatedSection>
                    </Box>
                    <Grid
                      container
                      spacing={0}
                      style={{ marginTop: theme.spacing(2) }}
                    >
                      {foodclubServices.map((service) => (
                        <Grid
                          key={service.id}
                          item
                          xs={6}
                          sm={6}
                          md={6}
                          lg={4}
                          xl={4}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginRight: theme.spacing(2),
                          }}
                        >
                          <AnimatedSection animate={animate} duration="2s">
                            <Card
                              elevation={0}
                              style={{
                                borderRadius: 10,
                                marginTop: theme.spacing(0),
                              }}
                              variant="outlined"
                            >
                              <CardActionArea>
                                <CardContent>
                                  <Image
                                    src={service.image}
                                    alt=""
                                    style={{ height: 200 }}
                                  />
                                  <Typography
                                    style={{ marginTop: theme.spacing(1) }}
                                  >
                                    {service.title}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    style={{
                                      marginTop: theme.spacing(0.5),
                                      marginBottom: theme.spacing(0.5),
                                    }}
                                  >
                                    Join our Chefs for a special Chef curated
                                    experience
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </AnimatedSection>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid
                      container
                      spacing={gridSpacing}
                      style={{ marginTop: theme.spacing(3) }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={8} sm={12} xs={12}>
              <InformationTab />
            </Grid>
          </Grid>
        </>
      )}
    </GetSignedInCustomerQuery>
  );
};

export default Events;
