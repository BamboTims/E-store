import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { useRouteMatch } from "react-router-dom";
import Spinner from "../../components/spinner/spinner.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.components";

const CollectionOverviewContainer = lazy(() =>
	import("../../components/collection-overview/collection-overview.container")
);
const CollectionPageContainer = lazy(() =>
	import("../collection/collection.container")
);

const ShopPage = () => {
	const dispatch = useDispatch();
	const match = useRouteMatch();

	useEffect(() => {
		dispatch(fetchCollectionStart());
	}, [fetchCollectionStart]);

	return (
		<div className="shop">
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Route
						exact
						path={match.path}
						component={CollectionOverviewContainer}
					/>
					<Route
						path={`${match.path}/:collectionId`}
						component={CollectionPageContainer}
					/>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default ShopPage;
