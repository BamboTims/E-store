import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.components";
import {
	convertCollectionToMap,
	firestore,
} from "../../firebase/firebase.utils";
import updateCollection from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/collection.components";
import withSpinner from "../../components/with-spinner/with-spinner.components";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends Component {
	state = {
		loading: true,
	};

	componentDidMount() {
		const { updateCollection } = this.props;
		const collectionRef = firestore.collection("collections");
		collectionRef.onSnapshot(async (snapshot) => {
			const collectionsMap = convertCollectionToMap(snapshot);
			console.log(collectionsMap);
			updateCollection(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const {loading} = this.state;
		return (
			<div className="shop">
				<Route
					exact
					path={match.path}
					render={(props) => (
						<CollectionOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollection: (collection) => dispatch(updateCollection(collection)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
