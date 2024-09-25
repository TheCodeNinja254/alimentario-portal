import { gql } from "@apollo/client";
import React from "react";
import Query from "../../../components/Query";

export const CHECK_PAYMENTS_STATUS = gql`
  query CheckPaymentStatus($paymentCorrelationId: String!) {
    checkPaymentStatus(paymentCorrelationId: $paymentCorrelationId) {
      pollingComplete
      status
      message
      paymentDetails {
        #        id
        paymentMethod
        amountPaid
        resultCode
        resultDesc
      }
    }
  }
`;

const CheckPaymentStatusQuery = ({ ...rest }) => {
  return <Query query={CHECK_PAYMENTS_STATUS} {...rest} />;
};

export default CheckPaymentStatusQuery;
