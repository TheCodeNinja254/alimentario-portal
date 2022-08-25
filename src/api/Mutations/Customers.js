import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    customerAuthentication(email: $email, password: $password) {
      status
      message
      username
      firstName
      lastName
      msisdn
      customerStatus
      businessId
      emailAddress
      verificationStatus
    }
  }
`;

export const SIGNOUT = gql`
  mutation SignOut {
    signOut {
      status
      message
    }
  }
`;
