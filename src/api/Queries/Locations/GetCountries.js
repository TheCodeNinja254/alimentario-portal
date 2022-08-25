import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_COUNTRIES = gql`
  query GetCountries {
    getCountries {
      status
      message
      countriesList {
        id
        countryName
        countyFlagUri
      }
    }
  }
`;

const GetCountriesQuery = ({ ...rest }) => {
  return <Query query={GET_COUNTRIES} {...rest} />;
};

export default GetCountriesQuery;
