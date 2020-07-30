import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { types } from "../store/reducers";

const persistConfig = {
  key: "authInfo",
  storage: storage,
  whitelist: [types.APITOKEN, types.LOGGEDUSER],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk))
);
export const persistedStore = persistStore(store);
