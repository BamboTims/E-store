import { put, call, takeLatest, all } from "redux-saga/effects";
import UserTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* signOutSuccess() {
	yield takeLatest(UserTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
	yield all([call(signOutSuccess)]);
}
