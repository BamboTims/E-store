import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.components";
import "./collection-item.styles.css";

const CollectionItem = ({ item, addItem }) => {
	const { id, imageUrl, name, price } = item;
	return (
		<div key={id} className="collection-item">
			<div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />

			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">${price}</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
