import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const key =
		"pk_test_51LZwU3F7S4dZG01jnWSIHG2nxqEGZJhyBq2l8H0kpAGTRllyGICtgSnN1MqPfL7XX4xyU9POsfsFGn2O1wwyFWl700fo5ftv6z";

	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((response) => {
				alert("Payment was successful");
			})
			.catch((err) => {
				console.log(err);
				alert("There was an issue with the payment, please try again !");
			});
	};

	return (
		<StripeCheckout
			name="E-store"
			label="Pay with 💳"
			shippingAddress
			billingAddress
			amount={priceForStripe}
			token={onToken}
			stripeKey={key}
		/>
	);
};

export default StripeButton;
