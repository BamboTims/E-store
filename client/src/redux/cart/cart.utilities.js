export const addItemToCart = (cartItems, addedItem) => {
	const existingCartItem = cartItems.find((item) => item.id === addedItem.id);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === existingCartItem.id
				? {
						...cartItem,
						quantity: cartItem.quantity + 1,
				  }
				: cartItem
		);
	}

	return [...cartItems, { ...addedItem, quantity: 1 }];
};

export const reduceQuantity = (cartItems, cartItem) => {
	const existingCartItem = cartItems.find((item) => item.id === cartItem.id);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== cartItem.id);
	}

	return cartItems.map((item) =>
		item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
	);
};
