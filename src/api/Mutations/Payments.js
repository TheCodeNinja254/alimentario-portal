import { gql } from "@apollo/client";

const LIPA_NA_MPESA_ONLINE = gql`
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
      responseMessage
      customerMessageExtended
      customerMessage
    }
  }
`;

export default LIPA_NA_MPESA_ONLINE;
