import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    userAuthentication(email: $email, password: $password) {
      status
      message
      role
    }
  }
`;

export const CREATE_CUSTOMER = gql`
  mutation CreateLead($input: LeadDetails!) {
    createLead(input: $input) {
      status
      message
      estateName
      preferredDate
      preferredTimePeriod
    }
  }
`;

export const CHECK_TICKET_STATUS = gql`
  mutation CheckLeadDetails($input: LeadCheckData!) {
    checkLeadDetails(input: $input) {
      getLeadStatus
      message
      leads {
        preferredDate
        preferredTimePeriod
        firstName
        estateName
      }
    }
  }
`;
