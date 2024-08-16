import React from "react";
import { IconButton, useMediaQuery } from "@mui/material";
import { Stack, Tooltip } from "@material-ui/core";
import {
  BakeryDining,
  BreakfastDiningOutlined,
  Fastfood,
  LocalDrink,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";

const productCategories = [
  {
    id: 1,
    name: "Sandwiches & Burgers",
    icon: <BreakfastDiningOutlined size="large" color="primary" />,
    catSlug: "sandwiches",
  },
  {
    id: 2,
    name: "Sandwich Extras",
    icon: <BakeryDining size="large" color="primary" />,
    catSlug: "extras",
  },
  {
    id: 3,
    name: "Fresh Juices",
    icon: <LocalDrink size="large" color="primary" />,
    catSlug: "juices",
  },
  {
    id: 4,
    name: "Dressings",
    icon: <Fastfood size="large" color="primary" />,
    catSlug: "desafio-dressings",
  },
];

const CategoriesSection = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleCatChange = (_catId, _catSlug) => {
    navigate(`/products/${_catSlug}`);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {!isMobile && (
        <Stack
          sx={{ marginRight: theme.spacing(4) }}
          direction="row"
          spacing={2}
        >
          {productCategories.map((cat) => (
            <Tooltip title={cat.name} key={cat.id}>
              <IconButton onClick={() => handleCatChange(cat.id, cat.catSlug)}>
                {cat.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
      )}
    </>
  );
};

export default CategoriesSection;
