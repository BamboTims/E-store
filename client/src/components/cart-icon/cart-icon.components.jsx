import React from "react";
import { ReactComponent as Bag } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.css";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";
import { useDispatch, useSelector } from "react-redux/es/exports";

const CartIcon = () => {
	const cartItemsCount = useSelector((state) => selectCartItemCount(state));
	const dispatch = useDispatch();
	return (
		<div className="cartIcon" onClick={() => dispatch(toggleCartHidden())}>
			<Bag />
			<span>{cartItemsCount}</span>
		</div>
	);
};

export default CartIcon;
