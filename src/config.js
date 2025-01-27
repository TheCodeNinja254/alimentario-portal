const config = {
  // basename: only at build time to set, and don't add '/' at end off BASENAME for breadcrumbs, also don't put only '/' use blank('') instead,
  basename: "",
  defaultPath: "/home/default",
  adminDefaultPath: "/admin",
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  productCategorization: {
    0: "Everything",
    1: "Sandwich and Burgers", // toasted
    2: "Sandwich Extras", // toasted
    3: "Fresh Juices", // toasted
    4: "Dressings", // toasted
    5: "Racecourse Specials (Meals)",
    6: "Racecourse Wines",
    7: "Racecourse Bites",
    8: "Desafio Wine (Online)",
    9: "Coffee & Tea", // toasted
    10: "Local Steak", // harvest
    11: "Imported Steak (Italian)", // harvest
    12: "Imported Cheese (Italian)", // harvest
  },
};

export default config;
