import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { useDispatch } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { useRouteMatch } from "react-router-dom";

const ShopPage = () => {
	const dispatch = useDispatch();
	const match = useRouteMatch();

	useEffect(() => {
		dispatch(fetchCollectionStart());
	}, [fetchCollectionStart]);

	return (
		<div className="shop">
			<Route exact path={match.path} component={CollectionOverviewContainer} />
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPageContainer}
			/>
		</div>
	);
};

export default ShopPage;
