import {
  BakeryDining,
  BreakfastDiningOutlined,
  Fastfood,
} from "@material-ui/icons";
import { IconBottle } from "@tabler/icons";

const dashboard = {
  id: "dashboard",
  title: "Toasted by Desafio Specials",
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
      title: "Desafio Wine",
      type: "item",
      url: "/products/wine",
      icon: IconBottle,
      breadcrumbs: false,
    },
    {
      id: "3",
      title: "Sandwich Extras",
      type: "item",
      url: "/products/extras",
      icon: BakeryDining,
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
  ],
};

export default dashboard;
