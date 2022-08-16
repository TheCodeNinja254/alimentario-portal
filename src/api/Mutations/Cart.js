import { gql } from "@apollo/client";

const ADD_TO_CART = gql`
  mutation AddToCart($input: AddToCartRequest!) {
    addToCart(input: $input) {
      status
      message
    }
  }
`;

export default ADD_TO_CART;
