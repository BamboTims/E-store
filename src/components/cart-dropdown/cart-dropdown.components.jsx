import React from "react";
import CustomButton from "../custom-button/custom-button.components";
import "./cart-dropdown.styles.css";
import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CartItem from "../cart-items/cart-items.components";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => {
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

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
