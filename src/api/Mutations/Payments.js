import { gql } from "@apollo/client";

export const CHECK_PAYMENTS = gql`
  mutation AddToCart($input: AddToCartRequest!) {
    addToCart(input: $input) {
      status
      message
    }
  }
`;

export const LIPA_NA_MPESA_ONLINE = gql`
  mutation LipaNaMpesaOnline(
    $amount: String!
    $phoneNumber: String!
    $paymentCorrelationId: String!
  ) {
    lipaNaMpesaOnline(
      amount: $amount
      phoneNumber: $phoneNumber
      paymentCorrelationId: $paymentCorrelationId
    ) {
      status
      message
    }
  }
`;
