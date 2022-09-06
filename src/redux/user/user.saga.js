import { takeLatest, put, call, all } from "redux-saga/effects";
import {
	auth,
	createUserProfileDocument,
	googleProvider,
} from "../../firebase/firebase.utils";
import { googleSignInFailed, googleSignInSuccess } from "./user.actions";
import UserTypes from "./user.types";

export function* onGoogleSignIn() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(
			googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
		);
	} catch (error) {
		put(googleSignInFailed(error.message));
	}
}

export function* googleSignInStart() {
	yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, onGoogleSignIn);
}

export function* userSagas() {
	yield all([call(googleSignInStart)]);
}
