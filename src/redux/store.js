import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

import rootReducer from "./root.reducer";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
	middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
