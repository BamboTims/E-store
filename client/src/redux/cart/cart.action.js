import cartTypes from "./cart.types";

export const toggleCartHidden = () => ({
	type: cartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: cartTypes.ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: cartTypes.REMOVE_ITEM,
	payload: item,
});

export const reduceQuantity = (item) => ({
	type: cartTypes.REDUCE_QUANTITY,
	payload: item,
});

export const clearCart = () => ({
	type: cartTypes.CLEAR_CART,
});
