import React from "react";
import { useNavigate } from "react-router-dom";
import { Chip, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import { makeStyles, useTheme } from "@material-ui/styles";
import { IconGlobe } from "@tabler/icons";
import Image from "./Image";
import kenyaFlag from "../assets/images/flags/kenya.png";
import italyFlag from "../assets/images/flags/italy.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  chip: {
    marginRight: theme.spacing(1),
    borderColor: theme.palette.primary.dark,
  },
}));

const productCategories = [
  {
    id: 0,
    name: "Everything",
    icon: <IconGlobe />,
    catSlug: "/desafio-harvest",
  },
  {
    id: 10,
    name: "Kenyan",
    icon: <Image src={kenyaFlag} alt="Kenyan" style={{ height: 22 }} />,
    catSlug: "/desafio-harvest",
  },
  {
    id: 11,
    name: "Italian Meat",
    icon: <Image src={italyFlag} alt="Kenyan" style={{ height: 22 }} />,
    catSlug: "/desafio-harvest",
  },
  {
    id: 12,
    name: "Italian Cheese",
    icon: <Image src={italyFlag} alt="Kenyan" style={{ height: 22 }} />,
    catSlug: "/desafio-harvest",
  },
];

const HarvestProductCategorization = ({
  selectedCat,
  setSelectedCat,
  shouldNavigate = true,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCatChange = (_catId, _catSlug) => {
    setSelectedCat(_catId);

    if (shouldNavigate) navigate(`/products/${_catSlug}`);
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}
    >
      {productCategories.map((cat) => (
        <Chip
          key={cat.id}
          variant={selectedCat === cat.id ? "default" : "outlined"}
          color="primary"
          onClick={() => handleCatChange(cat.id, cat.catSlug)}
          label={
            <Stack direction="row" spacing={1}>
              {cat.icon}
              <Typography sx={{ marginTop: theme.spacing(0.7) }}>
                <strong>{cat.name}</strong>
              </Typography>
            </Stack>
          }
          className={classes.chip}
        />
      ))}
    </Stack>
  );
};

export default HarvestProductCategorization;
