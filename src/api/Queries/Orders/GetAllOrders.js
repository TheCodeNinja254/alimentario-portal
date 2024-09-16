import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const GET_ALL_ORDERS = gql`
  query GetAllOrders($pageSize: Int!, $orderStatus: String) {
    getAllOrders(pageSize: $pageSize, orderStatus: $orderStatus) {
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
          customerInfo {
            firstName
            lastName
            msisdn
            emailAddress
          }
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

const GetAllOrdersQuery = ({ ...restProps }) => {
  return <Query query={GET_ALL_ORDERS} {...restProps} />;
};

export default GetAllOrdersQuery;
