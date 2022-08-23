import React from "react";
import { ReactComponent as Bag } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.css";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => {
	return (
		<div className="cartIcon" onClick={toggleCartHidden}>
			<Bag />
			<span>{cartItemsCount}</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
	cartItemsCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
