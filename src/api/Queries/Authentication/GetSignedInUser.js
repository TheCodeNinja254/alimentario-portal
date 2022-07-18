import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_SIGNED_IN_USER = gql`
  query GetSignedInUser {
    getSignedInUser {
      user {
        username
        customerStatus
        firstName
        lastName
        msisdn
        userRole
        emailAddress
        verificationStatus
        bearerToken
      }
    }
  }
`;

const GetSignedInUserQuery = ({ ...rest }) => {
  return <Query query={GET_SIGNED_IN_USER} {...rest} />;
};

export default GetSignedInUserQuery;
