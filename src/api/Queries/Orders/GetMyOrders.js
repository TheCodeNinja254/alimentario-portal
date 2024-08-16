import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_MY_ORDERS = gql`
  query GetMyOrders($pageSize: Int!, $orderStatus: String) {
    getMyOrders(pageSize: $pageSize, orderStatus: $orderStatus) {
      status
      message
      myOrders {
        currentSelection
        totalElements
        content {
          orderId
          amountDue
          deliveryLocationId
          orderStatus
          orderType
          createdAt
          updatedAt
          deliveryLocation {
            id
            deliveryPreciseLocation
            deliveryAdditionalNotes
            alternativePhoneNumber
            countryName
            countyFlagUri
            countyName
            localeName
          }
          specifications {
            id
            orderId
            productId
            productQuantity
            orderSpecification
            addedBy
            createdAt
            productName
            productDescription
            productPicMain
            productPicTwo
            productPicThree
            productPicFour
            productUnitOfMeasure
            productInstructionsLink
            productVideoLink
            stockStatus
            productStatus
            productPrice
            productCategory
            expiryDate
            productStorageFacility
          }
        }
      }
    }
  }
`;

const GetMyOrdersQuery = ({ ...restProps }) => {
  return <Query query={GET_MY_ORDERS} {...restProps} />;
};

export default GetMyOrdersQuery;
