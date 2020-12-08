import React from "react";
import { Divider, Typography, Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Review from "./Review";

const PaymentForm = ({ cart }) => {
  return (
    <div>
      Payment Form
      <Review cart={cart} />
    </div>
  );
};

export default PaymentForm;
