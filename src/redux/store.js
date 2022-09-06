import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root.reducer";
import { fetchCollectionStart } from "./shop/shop.saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	middleware.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
sagaMiddleware.run(fetchCollectionStart);
