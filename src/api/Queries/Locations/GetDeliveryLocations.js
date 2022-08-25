import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_DELIVERY_LOCATIONS = gql`
  query GetDeliveryLocations {
    getDeliveryLocations {
      status
      message
      locationsList {
        id
        countryId
        countyId
        localeId
        deliveryPreciseLocation
        deliveryAdditionalNotes
        alternativePhoneNumber
        countryName
        countyFlagUri
        countyName
      }
    }
  }
`;

const GetDeliveryLocationsQuery = ({ ...rest }) => {
  return <Query query={GET_DELIVERY_LOCATIONS} {...rest} />;
};

export default GetDeliveryLocationsQuery;
