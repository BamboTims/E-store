import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsShopCollectionLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.components";
import withSpinner from "../../components/with-spinner/with-spinner.components";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectIsShopCollectionLoaded(state),
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	withSpinner
)(CollectionPage);

export default CollectionPageContainer;
