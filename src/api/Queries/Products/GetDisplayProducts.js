import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_DISPLAY_PRODUCTS = gql`
  query GetDisplayProducts($productCategory: Int!) {
    getDisplayProducts(productCategory: $productCategory) {
      status
      message
      productsList {
        id
        productName
        productDescription
        productPicMain
        productPicTwo
        productPicThree
        productPicFour
        productUnitOfMeasure
        productInstructionsLink
        productVideoLink
        stockStatus
        productPrice
        productStatus
        productCategory
        expiryDate
      }
    }
  }
`;

const GetDisplayProductsQuery = ({ ...rest }) => {
  return <Query query={GET_DISPLAY_PRODUCTS} {...rest} />;
};

export default GetDisplayProductsQuery;
