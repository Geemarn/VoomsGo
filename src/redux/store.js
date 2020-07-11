import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import customMiddleWares from "./middlewares";
import createRootReducer from "./reducers";

//set history
const history = createBrowserHistory();

//redux persist configuration
const persistConfig = {
  key: "voomsgo",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["auth"],
};

// Implement a top-level app reducer to handle user logout and nullify state.
const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

// add the middleWares
const middleWares = [...customMiddleWares, thunk, routerMiddleware(history)];

//include logger in development mode
if (process.env.NODE_ENV === "development") {
  middleWares.push(createLogger());
}

// apply the middleware
let middleware = applyMiddleware(...middleWares);

//use redux dev tools if available in the browser
if (
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
}

// create the store
const store = createStore(persistedReducer, middleware);

//persist store
const persistor = persistStore(store);

//export
export { store as default, history, persistor };
