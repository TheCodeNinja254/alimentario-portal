import { gql } from "@apollo/client";

export const USER_AUTHENTICATION = gql`
  mutation UserAuthentication($email: String!, $password: String!) {
    userAuthentication(email: $email, password: $password) {
      status
      message
      username
      firstName
      userRole
      userStatus
      lastName
      msisdn
      emailAddress
      verificationStatus
    }
  }
`;

export const USER_SIGNOUT = gql`
  mutation UserSignOut {
    userSignOut {
      status
      message
    }
  }
`;
