import React from "react";
import {ReactComponent as Bin} from '../../assets/trash-svgrepo-com.svg'
import { connect } from "react-redux";
import './checkout-item.styles.css'
import {
	removeItem,
	addItem,
	reduceQuantity,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, removeItem, addItem, reduceQuantity }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => reduceQuantity(cartItem)}>
					&#10094;
				</div>
				<div className="value">{quantity}</div>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove" onClick={() => removeItem(cartItem)}>
				<Bin/>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItem(item)),
	addItem: (item) => dispatch(addItem(item)),
	reduceQuantity: (item) => dispatch(reduceQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
