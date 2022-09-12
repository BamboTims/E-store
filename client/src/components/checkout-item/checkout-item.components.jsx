import React from "react";
import { ReactComponent as Bin } from "../../assets/trash-svgrepo-com.svg";
import "./checkout-item.styles.css";
import {
	removeItem,
	addItem,
	reduceQuantity,
} from "../../redux/cart/cart.action";
import { useDispatch } from "react-redux/es/exports";

const CheckoutItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div
					className="arrow"
					onClick={() => dispatch(reduceQuantity(cartItem))}
				>
					&#10094;
				</div>
				<div className="value">{quantity}</div>
				<div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove" onClick={() => dispatch(removeItem(cartItem))}>
				<Bin />
			</div>
		</div>
	);
};

export default CheckoutItem;
