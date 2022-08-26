import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    getCartItems {
      status
      message
      cartItemsList {
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
        expiryDate
        customerSpecification
        createdAt
        quantity
        productId
      }
    }
  }
`;

const GetCartItemsQuery = ({ ...rest }) => {
  return <Query query={GET_CART_ITEMS} {...rest} />;
};

export default GetCartItemsQuery;
