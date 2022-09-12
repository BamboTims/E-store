import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

import rootReducer from "./root.reducer";
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
