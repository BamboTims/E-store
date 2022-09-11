import React from "react";
import { addItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.components";
import { useDispatch } from "react-redux/es/exports";
import "./collection-item.styles.css";

const CollectionItem = ({ item }) => {
	const dispatch = useDispatch();
	const { id, imageUrl, name, price } = item;
	return (
		<div key={id} className="collection-item">
			<div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />

			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton inverted onClick={() => dispatch(addItem(item))}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
