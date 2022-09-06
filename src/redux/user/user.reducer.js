import  UserTypes  from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	error: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		case UserTypes.EMAIL_SIGN_IN_SUCCESS:
		case UserTypes.GOOGLE_SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		case UserTypes.GOOGLE_SIGN_IN_FAILED:
		case UserTypes.EMAIL_SIGN_IN_FAILED:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
