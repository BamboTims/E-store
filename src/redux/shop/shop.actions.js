import {
	convertCollectionToMap,
	firestore,
} from "../../firebase/firebase.utils";
import shopTypes from "./shop.types";

const fetchCollectionStart = () => ({
	type: shopTypes.FETCH_COLLECTIONS_START,
	isFetching: true,
});

const fetchCollectionSuccess = (collectionMap) => ({
	type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionMap,
});

const fetchCollectionFailed = (errorMessage) => ({
	type: shopTypes.FETCH_COLLECTIONS_FAILED,
	payload: errorMessage,
});

const fetchCollectionStartAsync = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchCollectionStart());
			const collectionRef = firestore.collection("collections");
			const collectionSnapshot = await collectionRef.get();
			const collectionsMap = convertCollectionToMap(collectionSnapshot);
			dispatch(fetchCollectionSuccess(collectionsMap));
		} catch (error) {
			dispatch(fetchCollectionFailed(error.message));
		}
	};
};

export default fetchCollectionStartAsync;
