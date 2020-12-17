import React from "react";
import { Divider, Typography, Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
console.log(stripePromise);

const PaymentForm = ({
  cart,
  back,
  checkoutToken,
  shippingData,
  refresh,
  handleCapturedCheckout,
  nextStep,
}) => {
  const handleSubmit = async (event, elements, stripe) => {
    // this is how stripe work for mor documentation... commercejs in payment stripefield
    event.preventDefault(); //after finishing this function we are gonna work in appjs we will creata function to handlecapturedcheckout and then a function to refresh cart after payment
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      console.log("[error]", error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "International",
          street: shippingData.adress1,
          street2: shippingData.adress2,
          town_city: shippingData.city,
          country_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      handleCapturedCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };
  console.log(handleCapturedCheckout);
  return (
    <div>
      <Review checkoutToken={checkoutToken} cart={cart} />
      <Divider />
      <Typography variant="h6" glutterBottom style={{ margin: "20px 0" }}>
        Payment{" "}
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br /> <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" color="secondary" onClick={back}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
