import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Divider, makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import NavBarItem from "./NavBarItem";

const useStyles = makeStyles(() => ({
  root: {},
}));

const pages = [
  {
    title: "Voice",
    href: "https://www.safaricom.co.ke/personal/index.php",
  },
  {
    title: "Data",
    href: "https://www.safaricom.co.ke/personal/index.php",
  },
  {
    title: "M-PESA",
    href: "https://www.safaricom.co.ke/personal/m-pesa/m-pesa-home",
  },
  {
    title: "Fixed Internet",
    href: "/",
  },
  {
    title: "Value Added Services",
    href: "https://www.safaricom.co.ke/personal/get-more",
  },
];

const SidebarNav = (props) => {
  const { className, onClose } = props;
  const classes = useStyles();

  return (
    <div role="presentation">
      <List className={clsx(classes.root, className)}>
        {pages.map((page) => (
          <NavBarItem
            onClose={onClose}
            key={page.title}
            subNav={page.items ? page.items : false}
            page={page}
          />
        ))}
      </List>
      <Divider />
    </div>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
};

export default SidebarNav;
