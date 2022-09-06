import shopTypes from "./shop.types";

export const fetchCollectionStart = () => ({
	type: shopTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
	type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionMap,
});

export const fetchCollectionFailed = (errorMessage) => ({
	type: shopTypes.FETCH_COLLECTIONS_FAILED,
	payload: errorMessage,
});
