import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.components";
import updateCollection from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.components";
import withSpinner from "../../components/with-spinner/with-spinner.components";
import { createStructuredSelector } from "reselect";
import fetchCollectionStartAsync from "../../redux/shop/shop.actions";
import { selectShopIsFetching } from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends Component {
	componentDidMount() {
		const { fetchCollectionStartAsync } = this.props;
		fetchCollectionStartAsync();
	}

	render() {
		const { match, isCollectionFetching } = this.props;

		return (
			<div className="shop">
				<Route
					exact
					path={match.path}
					render={(props) => (
						<CollectionOverviewWithSpinner
							isLoading={!isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={!isCollectionFetching}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectShopIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync),
});

export default connect(null, mapDispatchToProps)(ShopPage);
