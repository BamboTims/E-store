import {
	convertCollectionToMap,
	firestore,
} from "../../firebase/firebase.utils";
import shopTypes from "./shop.types";

const fetchCollectionStart = () => ({
	type: shopTypes.FETCH_COLLECTIONS_START,
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
	return (dispatch) => {
		dispatch(fetchCollectionStart());
		const collectionRef = firestore.collection("collections");

		collectionRef
			.get()
			.then((snapshot) => {
				const collectionsMap = convertCollectionToMap(snapshot);
				dispatch(fetchCollectionSuccess(collectionsMap));
			})
			.catch((error) => dispatch(fetchCollectionFailed(error.message)));
	};
};

export default fetchCollectionStartAsync;
