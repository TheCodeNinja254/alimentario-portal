import { gql } from "@apollo/client";

const ADD_ORDER = gql`
  mutation AddOrder($input: ConfirmOrderInput!) {
    addOrder(input: $input) {
      status
      message
    }
  }
`;

export const UPDATE_ORDER_STATUS = gql`
  mutation UpdateOrderStatus($input: UpdateOrderStatusInput!) {
    updateOrderStatus(input: $input) {
      status
      message
    }
  }
`;

export default ADD_ORDER;
