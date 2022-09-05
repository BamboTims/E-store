import shopTypes from "./shop.types";

const INITIAL_STATE = {
	collection: null,
	isFetching: false,
	errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case shopTypes.FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		case shopTypes.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				collection: action.payload,
			};
		case shopTypes.FETCH_COLLECTIONS_FAILED:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};

export default shopReducer;
