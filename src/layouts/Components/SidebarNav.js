import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Divider, makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import NavBarItem from "./NavBarItem";
import ExternalNavBarItem from "./ExternalNavBarItem";

const useStyles = makeStyles(() => ({
  root: {},
}));

const pages = [
  {
    title: "Get Connected",
    href: "/home",
  },
  {
    title: "Fiber Addons",
    href: "/",
    items: [
      {
        title: "Home Insurance",
        href: "/home-insurance",
      },
      {
        title: "CCTV",
        href: "/home-cctv",
      },
      {
        title: "Secure Net",
        href: "/secure-net",
      },
      {
        title: "Entertainment",
        href: "/entertainment",
      },
    ],
  },
  {
    title: "4G Router",
    href: "/4g-wifi-router",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
];

const externalLinks = [
  {
    title: "PERSONAL",
    href: "https://www.safaricom.co.ke/personal/index.php",
  },
  {
    title: "BUSINESS",
    href: "https://www.safaricom.co.ke/business",
  },
];

const secondaryLinks = [
  {
    title: "About Us",
    href: "https://www.safaricom.co.ke/about/about-safaricom/who-we-are/our-story",
  },
  {
    title: "Investor Relations",
    href: "https://www.safaricom.co.ke/investor-relations",
  },
  {
    title: "Fraud Awareness",
    href: "https://www.safaricom.co.ke/personal/index.php/fraud-awareness",
  },
  {
    title: "Terms & Conditions",
    href: "https://www.safaricom.co.ke/about/media-center/publications/terms-and-conditions",
  },
  // {
  //   title: "FAQs",
  //   href: "hhttps://www.safaricom.co.ke/careers/",
  // },
  {
    title: "Careers",
    href: "hhttps://www.safaricom.co.ke/careers/",
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
      <List className={clsx(classes.root, className)}>
        {externalLinks.map((externalLink) => (
          <div key={externalLink.title}>
            <NavBarItem
              onClose={onClose}
              key={externalLink.title}
              subNav={externalLink.items ? externalLink.items : false}
              page={externalLink}
            />
            <Divider />
          </div>
        ))}
      </List>
      <List className={clsx(classes.root, className)}>
        {secondaryLinks.map((secondaryLink) => (
          <ExternalNavBarItem
            onClose={onClose}
            key={secondaryLink.title}
            subNav={secondaryLink.items ? secondaryLink.items : false}
            page={secondaryLink}
          />
        ))}
      </List>
    </div>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
};

export default SidebarNav;
