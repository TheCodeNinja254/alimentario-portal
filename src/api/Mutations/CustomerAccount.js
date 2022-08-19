import { gql } from "@apollo/client";

const CUSTOMER_ACCOUNT_CREATION = gql`
  mutation CustomerAccountCreation($input: CustomerAccountRequest!) {
    customerAccountCreation(input: $input) {
      status
      message
    }
  }
`;

export default CUSTOMER_ACCOUNT_CREATION;
