import React from "react";
import { useNavigate } from "react-router-dom";
import { Chip, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import { BreakfastDiningOutlined, Fastfood } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/styles";
import { IconBottle } from "@tabler/icons";

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
    name: "Everything Racecourse",
    icon: <Fastfood size="small" />,
    catSlug: "/hourse-racing",
  },
  {
    id: 5,
    name: "Toasted Specials",
    icon: <BreakfastDiningOutlined size="small" />,
    catSlug: "toasted-specials",
  },
  {
    id: 6,
    name: "Wine",
    icon: <IconBottle />,
    catSlug: "wine",
  },
  {
    id: 7,
    name: "Toasted Bites",
    icon: <Fastfood size="small" />,
    catSlug: "toasted-bites",
  },
];

const EventsProductCategorization = ({
  selectedCat,
  setSelectedCat,
  shouldNavigate = true,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCatChange = (_catId, _catSlug) => {
    setSelectedCat(_catId);
    console.log("selectedCat", selectedCat);
    console.log("_catId", _catId);

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
      {productCategories?.map((cat) => (
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

export default EventsProductCategorization;
