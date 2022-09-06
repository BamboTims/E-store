import { takeLatest, call, put } from "redux-saga/effects";
import {
	convertCollectionToMap,
	firestore,
} from "../../firebase/firebase.utils";
import { fetchCollectionFailed, fetchCollectionSuccess } from "./shop.actions";
import shopTypes from "./shop.types";

export function* fetchCollectionAsync() {
	try {
		const collectionRef = firestore.collection("collections");
		const collectionSnapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionToMap,
			collectionSnapshot
		);
		yield put(fetchCollectionSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionFailed(error.message));
	}
}

export function* fetchCollectionStart() {
	yield takeLatest(shopTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
