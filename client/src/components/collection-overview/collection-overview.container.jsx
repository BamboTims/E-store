import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopIsFetching } from "../../redux/shop/shop.selectors";
import  collectionOverview  from "./collection-overview.components";
import withSpinner from "../with-spinner/with-spinner.components";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
	isLoading: selectShopIsFetching,
});

const CollectionOVerviewContainer = compose(
	connect(mapStateToProps),
	withSpinner
)(collectionOverview);

export default CollectionOVerviewContainer;
