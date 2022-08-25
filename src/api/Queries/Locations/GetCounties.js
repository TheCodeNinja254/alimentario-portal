import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_COUNTIES = gql`
  query GetCounties($countryId: Int!) {
    getCounties(countryId: $countryId) {
      status
      message
      countiesList {
        id
        countyName
      }
    }
  }
`;

const GetCountiesQuery = ({ ...rest }) => {
  return <Query query={GET_COUNTIES} {...rest} />;
};

export default GetCountiesQuery;
