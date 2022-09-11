import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selectors";
import "./collection-overview.styles.css";
import { useSelector } from "react-redux/es/exports";

const CollectionOverview = () => {
	const collection = useSelector(selectShopCollectionsForPreview);
	return (
		<div className="collection-overview">
			{collection.map(({ id, ...otherCollectionsProps }) => (
				<CollectionPreview key={id} {...otherCollectionsProps} />
			))}
		</div>
	);
};

export default CollectionOverview;
