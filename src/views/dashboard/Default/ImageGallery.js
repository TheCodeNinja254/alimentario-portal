import * as React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@material-ui/core";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const itemData = [
  {
    img: "/images/gallery/1.jpg",
    title: "Preparation for a steak dinner",
    author: "@desafio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "/images/gallery/2.jpg",
    title: "Preparation for a steak dinner",
    author: "@desafio",
  },
  {
    img: "/images/gallery/3.jpg",
    title: "Passing the knowledge on",
    author: "@desafio",
  },
  {
    img: "/images/gallery/4.jpg",
    title: "Rare? Say no more",
    author: "@desafio",
    cols: 2,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  subGreeting: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.dark,
  },
}));

const TitlebarImageList = () => {
  const classes = useStyles();

  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={2}>
        <MuiTypography
          variant="h2"
          gutterBottom
          className={classes.subGreeting}
        >
          Where we&apos;ve been...
        </MuiTypography>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} subtitle={item.author} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default TitlebarImageList;
