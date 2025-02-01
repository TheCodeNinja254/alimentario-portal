import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_CART_ITEMS = gql`
  query GetCartItems($guestId: String) {
    getCartItems(guestId: $guestId) {
      status
      message
      preOrderItemsFound
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

export const GET_POS_CART_ITEMS = gql`
  query GetPOSCartItems($guestId: String) {
    getPOSCartItems(guestId: $guestId) {
      status
      message
      preOrderItemsFound
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

const GetCartItemsQuery = ({ isPosSale = false, ...restProps }) => {
  return (
    <Query
      query={isPosSale ? GET_POS_CART_ITEMS : GET_CART_ITEMS}
      {...restProps}
    />
  );
};

export default GetCartItemsQuery;
