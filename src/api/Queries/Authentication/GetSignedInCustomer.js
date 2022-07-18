import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_SIGNED_IN_CUSTOMER = gql`
  query GetSignedInCustomer {
    getSignedInCustomer {
      status
      customer {
        username
        customerStatus
        firstName
        lastName
        msisdn
        businessId
        emailAddress
        verificationStatus
        bearerToken
      }
    }
  }
`;

const GetSignedInCustomerQuery = ({ ...rest }) => {
  return <Query query={GET_SIGNED_IN_CUSTOMER} {...rest} />;
};

export default GetSignedInCustomerQuery;
