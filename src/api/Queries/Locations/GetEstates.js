/*
 * Copyright (c) 2020.
 * Safaricom PLC
 * Systems, URLs, Databases and content in this document maybe proprietary to Safaricom PLC. Use or reproduction may require written permission from Safaricom PLC
 *
 * @Author: Fredrick Mbugua/FMMBUGUA
 */

import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_ESTATES = gql`
  query GetEstatesQuery(
    $zoneId: Int!
    $retrieveByZone: String!
    $pageSize: Int
    $pageNo: Int
  ) {
    getEstates(
      zoneId: $zoneId
      retrieveByZone: $retrieveByZone
      pageSize: $pageSize
      pageNo: $pageNo
    ) {
      getEstatesStatus
      getEstatesCount
      estates {
        estateId
        estateName
        regionId
        status
        contractorAgencyId
        oltName
        noOfHouses
        occupancy
        coordinates
        houseNumbers
        zoneId
        tierNumber
        createdBy
        createdAt
        updatedAt
        deletedAt
      }
    }
  }
`;

const GetEstatesQuery = ({ ...rest }) => {
  return <Query query={GET_ESTATES} {...rest} />;
};

export default GetEstatesQuery;
