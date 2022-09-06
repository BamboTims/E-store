import UserTypes from "./user.types";

export const setCurrentUser = (user) => ({
	type: UserTypes.SET_CURRENT_USER,
	payload: user,
});

export const googleSignInStart = () => ({
	type: UserTypes.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
	type: UserTypes.GOOGLE_SIGN_IN_SUCCESS,
	payload: user,
});

export const googleSignInFailed = (error) => ({
	type: UserTypes.GOOGLE_SIGN_IN_FAILED,
	payload: error,
});

export const emailSignInStart = (emailandPassword) => ({
	type: UserTypes.EMAIL_SIGN_IN_START,
	payload: emailandPassword,
});

export const emailSignInSuccess = (user) => ({
	type: UserTypes.EMAIL_SIGN_IN_SUCCESS,
	payload: user,
});

export const emailSignInFailed = (error) => ({
	type: UserTypes.EMAIL_SIGN_IN_FAILED,
	payload: error,
});
