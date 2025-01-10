import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router";
import { gridSpacing } from "../../store/constant";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import ProductCategorization from "../home/components/ProductCategorization";
import BrandingSection from "../home/components/BrandingSection";
import ProductsSection from "../home/components/ProductsSection";
import InformationTab from "../components/InformationTab";

// 0: "Everything",
//     1: "Sandwich and Burgers", // toasted
//     2: "Sandwich Extras", // toasted
//     3: "Fresh Juices", // toasted
//     4: "Dressings", // toasted
//     5: "Racecourse Specials (Meals)",
//     6: "Racecourse Wines",
//     7: "Racecourse Bites",
//     8: "Desafio Wine (Online)",
//     9: "Coffee & Tea", // toasted
//     10: "Local Steak", // harvest
//     11: "Imported Steak (Italian)", // harvest
//     12: "Imported Cheese (Italian)", // harvest

const productCatMapper = [
  {
    id: 0,
    slug: "toasted",
  },
  {
    id: 1,
    slug: "sandwiches",
  },
  {
    id: 2,
    slug: "extras",
  },
  {
    id: 4,
    slug: "desafio-dressings",
  },
  {
    id: 8,
    slug: "wine",
  },
  {
    id: 9,
    slug: "coffee-n-tea",
  },
];
const Products = () => {
  const { id } = useParams();

  const defaultCategoryId =
    productCatMapper.find((cat) => cat.slug === id)?.id || 0;

  const [selectedCat, setSelectedCat] = useState(defaultCategoryId);

  return (
    <GetSignedInCustomerQuery>
      {({ getSignedInCustomer: { status } }) => (
        <>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                  <BrandingSection />
                  <ProductCategorization
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
                    defaultCategoryId={defaultCategoryId}
                  />
                  <ProductsSection
                    defaultCategoryId={defaultCategoryId}
                    sessionStatus={status}
                    category={selectedCat}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={8} sm={12} xs={12}>
              <InformationTab />
            </Grid>
          </Grid>
        </>
      )}
    </GetSignedInCustomerQuery>
  );
};

export default Products;
