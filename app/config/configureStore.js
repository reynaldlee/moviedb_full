import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas";
import rootReducers from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];


if (__DEV__) {
    middleware.push(logger);
}

export default configureStore = () => {
    const store = createStore(rootReducers, applyMiddleware(...middleware))
    sagaMiddleware.run(rootSaga);

    return store;
}