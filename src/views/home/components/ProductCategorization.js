import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, Grid, Typography } from "@mui/material";
import { makeStyles, styled } from "@material-ui/styles";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AnimatedSection from "../../../ui-component/AnimatedSection";

const productCategories = [
  {
    categoryId: 1,
    categoryName: "Steak",
    categoryDisplayPic: "/images/categories/roastedSteak.jpg",
  },
  {
    categoryId: 2,
    categoryName: "Cheese",
    categoryDisplayPic: "/images/categories/cheese.jpg",
  },
  // {
  //   categoryId: 3,
  //   categoryName: "Cook Party",
  //   categoryDisplayPic: "/images/categories/bbq.png",
  // },
];

const useStyles = makeStyles((theme) => ({
  categoryCardText: {
    marginTop: theme.spacing(0),
    marginRight: theme.spacing(2),
    color: theme.palette.common.black,
    fontSize: 25,
    fontWeight: 700,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: theme.spacing(0),
      fontSize: 25,
    },
  },
  branding: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: theme.palette.common.black,
    fontSize: 10,
    fontWeight: 300,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: theme.spacing(1),
      fontSize: 10,
      fontWeight: 300,
    },
  },
}));

const CategoryCard = styled(Card)(({ img }) => ({
  backgroundImage: `url(${img})`,
  height: 130,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.5,
}));

const ProductCategorization = ({ setFilter, setProductCategory }) => {
  const classes = useStyles();

  const handleCardClick = (id, categoryName) => {
    setFilter(id);
    setProductCategory(categoryName);
  };

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // animation
      setAnimate(true);
    }, 1);
  }, [animate]);

  return (
    <Grid container spacing={2}>
      {productCategories.map((cat) => (
        <Grid item xs={6} xl={6} id={cat.categoryId}>
          <AnimatedSection animate={animate} duration="1.8s">
            <Card elevation={0}>
              <CardActionArea
                onClick={() =>
                  handleCardClick(cat.categoryId, cat.categoryName)
                }
              >
                <CategoryCard img={cat.categoryDisplayPic}>
                  <Typography className={classes.branding}>Desafio</Typography>
                  <Typography className={classes.categoryCardText}>
                    {cat.categoryName}
                  </Typography>
                </CategoryCard>
              </CardActionArea>
            </Card>
          </AnimatedSection>
        </Grid>
      ))}
    </Grid>
  );
};

ProductCategorization.propTypes = {
  setFilter: PropTypes.func.isRequired,
  setProductCategory: PropTypes.func.isRequired,
};

export default ProductCategorization;
