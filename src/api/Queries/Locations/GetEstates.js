import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_ESTATES = gql`
  query GetEstatesQuery($regionId: Int!, $pageSize: Int, $pageNo: Int) {
    getEstates(regionId: $regionId, pageSize: $pageSize, pageNo: $pageNo) {
      getEstatesStatus
      getEstatesCount
      estates {
        estateId
        estateName
        regionId
      }
    }
  }
`;

const GetEstatesQuery = ({ ...rest }) => {
  return <Query query={GET_ESTATES} {...rest} />;
};

export default GetEstatesQuery;
