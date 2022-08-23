import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collection-overview.styles.css";

const CollectionOverview = ({ collection }) => {
	return (
		<div className="collection-overview">
			{collection.map(({ id, ...otherCollectionsProps }) => (
				<CollectionPreview key={id} {...otherCollectionsProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collection: selectShopCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
