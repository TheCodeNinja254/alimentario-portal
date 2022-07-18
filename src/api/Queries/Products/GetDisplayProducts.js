import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_DISPLAY_PRODUCTS = gql`
  query GetDisplayProducts {
    getDisplayProducts {
      status
      message
      productList {
        productName
      }
    }
  }
`;

const GetDisplayProductsQuery = ({ ...rest }) => {
  return <Query query={GET_DISPLAY_PRODUCTS} {...rest} />;
};

export default GetDisplayProductsQuery;
