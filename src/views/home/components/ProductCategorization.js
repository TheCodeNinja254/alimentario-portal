import React from "react";
import { useNavigate } from "react-router-dom";
import { Chip, Stack, Typography } from "@material-ui/core";
import {
  BakeryDining,
  BreakfastDiningOutlined,
  Fastfood,
  LocalDrink,
} from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  chip: {
    marginRight: theme.spacing(1),
    borderColor: theme.palette.primary.dark,
  },
}));

const productCategories = [
  {
    id: 1,
    name: "Sandwiches & Burgers",
    icon: <BreakfastDiningOutlined size="small" />,
    catSlug: "sandwiches",
  },
  {
    id: 2,
    name: "Sandwich Extras",
    icon: <BakeryDining size="small" />,
    catSlug: "extras",
  },
  {
    id: 3,
    name: "Fresh Juices",
    icon: <LocalDrink size="small" />,
    catSlug: "juices",
  },
  {
    id: 4,
    name: "Dressings",
    icon: <Fastfood size="small" />,
    catSlug: "desafio-dressings",
  },
];

const ProductCategorization = ({ selectedCat, setSelectedCat }) => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCatChange = (_catId, _catSlug) => {
    setSelectedCat(_catId);
    // navigate.push(`/products/${_catSlug}`);
    navigate(`/products/${_catSlug}`);
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
          variant={selectedCat === cat.id ? "filled" : "outlined"}
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

export default ProductCategorization;
