import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router";
import { gridSpacing } from "../../store/constant";
import GetSignedInCustomerQuery from "../../api/Queries/Authentication/GetSignedInCustomer";
import ProductCategorization from "../home/components/ProductCategorization";
import BrandingSection from "../home/components/BrandingSection";
import ProductsSection from "../home/components/ProductsSection";
import InformationTab from "../components/InformationTab";

const productCatMapper = [
  {
    id: 1,
    slug: "sandwiches",
  },
  {
    id: 2,
    slug: "extras",
  },
  {
    id: 3,
    slug: "juices",
  },
  {
    id: 4,
    slug: "desafio-dressings",
  },
];
const Products = () => {
  const { id } = useParams();

  const defaultCategoryId =
    productCatMapper.find((cat) => cat.slug === id)?.id || 1;

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
