import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import "./cart-dropdown.styles.css";
import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CartItem from "../cart-items/cart-items.components";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";

const CartDropdown = () => {
	const history = useHistory();
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<div className="empty-message">Your cart is Empty !</div>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push("/checkout");
					dispatch(toggleCartHidden());
				}}
			>
				CHECKOUT <Cart />
			</CustomButton>
		</div>
	);
};

export default CartDropdown;
