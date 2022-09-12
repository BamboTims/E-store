import cartTypes from "./cart.types";
import { addItemToCart, reduceQuantity } from "./cart.utilities";

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case cartTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case cartTypes.REDUCE_QUANTITY:
			return {
				...state,
				cartItems: reduceQuantity(state.cartItems, action.payload),
			};
		case cartTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item.id !== action.payload.id
				),
			};
		case cartTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};

export default cartReducer;
