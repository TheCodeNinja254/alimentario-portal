import { gql } from "@apollo/client";

export const ADD_COUNTRY = gql`
  mutation AddCountry($input: AddCountryInput!) {
    addCountry(input: $input) {
      status
      message
    }
  }
`;

export const REMOVE_COUNTRY = gql`
  mutation RemoveCountry($id: Int!) {
    removeCountry(id: $id) {
      status
      message
    }
  }
`;

export const ADD_COUNTY = gql`
  mutation AddCounty($input: AddCountyInput!) {
    addCounty(input: $input) {
      status
      message
    }
  }
`;

export const REMOVE_COUNTY = gql`
  mutation RemoveCounty($id: Int!) {
    removeCounty(id: $id) {
      status
      message
    }
  }
`;

export const ADD_LOCALE = gql`
  mutation AddLocale($input: AddLocaleInput!) {
    addLocale(input: $input) {
      status
      message
    }
  }
`;

export const REMOVE_LOCALE = gql`
  mutation RemoveLocale($id: Int!) {
    removeLocale(id: $id) {
      status
      message
    }
  }
`;

export const ADD_DELIVERY_LOCATION = gql`
  mutation AddDeliveryLocation($input: AddDeliveryLocation!) {
    addDeliveryLocation(input: $input) {
      status
      message
    }
  }
`;

export const REMOVE_DELIVERY_LOCATION = gql`
  mutation RemoveDeliveryLocation($id: Int!) {
    removeDeliveryLocation(id: $id) {
      status
      message
    }
  }
`;
