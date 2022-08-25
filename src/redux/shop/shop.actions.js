import shopTypes from "./shop.types";

const updateCollection = (collectionMap) => ({
	type: shopTypes.UPDATE_COLLECTION,
	payload: collectionMap,
});

export default updateCollection;
