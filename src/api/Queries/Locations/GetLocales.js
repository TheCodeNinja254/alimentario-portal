import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_LOCALES = gql`
  query GetLocales($countyId: Int!) {
    getLocales(countyId: $countyId) {
      status
      message
      localesList {
        id
        localeName
      }
    }
  }
`;

const GetLocalesQuery = ({ ...rest }) => {
  return <Query query={GET_LOCALES} {...rest} />;
};

export default GetLocalesQuery;
