import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  const publishableKey =
    "pk_test_51J5YIuBlb4EiEvT1JQ4WTqHEKJMi6Y0toT5QrEWeF1mMOXvTvglvkHVc7TazY9eERbmcbS2A1AE2842gPCYlX26P006v3e6uIm";
  return (
    <StripeCheckout
      currency={String.fromCharCode(0x20a6)}
      label="Pay Now"
      name="E-commerce-clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is ${String.fromCharCode(0x20a6)}${price}`}
      amount={priceForStripe}
      panelLabel={`Pay ${String.fromCharCode(0x20a6)}`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
