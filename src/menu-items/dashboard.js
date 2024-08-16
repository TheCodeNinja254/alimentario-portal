// constant
import {
  BakeryDining,
  BreakfastDiningOutlined,
  Fastfood,
  Kitchen,
  LocalDrink,
} from "@material-ui/icons";

const dashboard = {
  id: "dashboard",
  title: "Desafio Special",
  type: "group",
  children: [
    {
      id: "1",
      title: "Desafio Sandwiches",
      type: "item",
      url: "/products/sandwiches",
      icon: BreakfastDiningOutlined,
      breadcrumbs: false,
    },
    {
      id: "2",
      title: "Sandwich Extras",
      type: "item",
      url: "/products/extras",
      icon: BakeryDining,
      breadcrumbs: false,
    },
    {
      id: "3",
      title: "Fresh Juices",
      type: "item",
      url: "/products/juices",
      icon: LocalDrink,
      breadcrumbs: false,
    },
    {
      id: "4",
      title: "Desafio Dressings",
      type: "item",
      url: "/products/desafio-dressings",
      icon: Fastfood,
      breadcrumbs: false,
    },
    {
      id: "5",
      title: "Chef at work",
      type: "item",
      url: "/gallery",
      icon: Kitchen,
      breadcrumbs: false,
    },
  ],
};

export default dashboard;
