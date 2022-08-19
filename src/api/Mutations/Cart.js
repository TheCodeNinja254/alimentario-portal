import { gql } from "@apollo/client";

export const ADD_TO_CART = gql`
  mutation AddToCart($input: AddToCartRequest!) {
    addToCart(input: $input) {
      status
      message
    }
  }
`;

export const REMOVE_CART_ITEM = gql`
  mutation RemoveCartItem($id: Int!) {
    removeCartItem(id: $id) {
      status
      message
    }
  }
`;
