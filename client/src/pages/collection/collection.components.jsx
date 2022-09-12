import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.components";
import { selectShopCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.css";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection">
			<h1>{title.toUpperCase()}</h1>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
