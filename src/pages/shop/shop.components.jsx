import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.components";
import CollectionPage from "../collection/collection.components";

const ShopPage = ({ match }) => {
	return (
		<div className="shop">
			<Route exact path={match.path} component={CollectionOverview} />
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPage}
			/>
		</div>
	);
};

export default ShopPage;
