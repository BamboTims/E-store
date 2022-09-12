import React from "react";
import "./checkout.styles.css";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import StripeButton from "../../components/stripe-checkout/stripe-checkout.components";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
	const total = useSelector(selectCartTotal);
	const cartItems = useSelector(selectCartItems);

	return (
		<div className="checkout">
			<h1 className="checkout-header">CHECKOUT</h1>
			<div className="checkout-details">
				<div className="details-header">
					<span>Product</span>
					<span>Description</span>
					<span>Quantity</span>
					<span>Price</span>
					<span>Remove</span>
				</div>
				{cartItems.map((cartItem) => (
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<div className="checkout-summary">
				<h2>Total : ${total}</h2>
			</div>
			<StripeButton price={total} />
		</div>
	);
};

export default CheckoutPage;
