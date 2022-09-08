import { takeLatest, put, call, all } from "redux-saga/effects";
import {
	auth,
	createUserProfileDocument,
	getCurrentUser,
	googleProvider,
} from "../../firebase/firebase.utils";
import {
	signInFailed,
	signInSuccess,
	signOutFailed,
	signOutSuccess,
	signUpFailed,
	signUpSuccess,
} from "./user.actions";
import UserTypes from "./user.types";

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailed(error.message));
	}
}

export function* onGoogleSignIn() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailed(error.message));
	}
}

export function* onEmailSignIn({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailed(error.message));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailed(error.message));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailed(error.message));
	}
}

export function* isUserCreated({
	payload: { password, confirmPassword, displayName, email },
}) {
	if (password !== confirmPassword) {
		alert("Passwords are not the same");
		return;
	}
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		const userRef = yield call(createUserProfileDocument, user, {
			displayName,
		});
		const userSnapshot = yield userRef.get();
		yield put(signUpSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signUpFailed(error.message));
	}
}

export function* googleSignInStart() {
	yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, onGoogleSignIn);
}

export function* emailSignInStart() {
	yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, onEmailSignIn);
}

export function* checkUserSession() {
	yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutStart() {
	yield takeLatest(UserTypes.SIGN_OUT_START, signOut);
}

export function* signUpStart() {
	yield takeLatest(UserTypes.SIGN_UP_START, isUserCreated);
}

export function* userSagas() {
	yield all([
		call(googleSignInStart),
		call(emailSignInStart),
		call(checkUserSession),
		call(signOutStart),
		call(signUpStart),
	]);
}
