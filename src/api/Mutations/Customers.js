import { gql } from "@apollo/client";

export const CREATEUSER = gql`
  mutation CreateUser($input: UserDetails!) {
    createUser(input: $input) {
      status
      message
      body
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
        lastName
        estateName
      }
    }
  }
`;
