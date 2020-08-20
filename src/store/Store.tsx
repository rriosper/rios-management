import React from "react";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import epics from "./epics";
import reducers from "./reducers";

const initialState = {};

const epicMiddleware = createEpicMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

interface StoreProps {
  children: React.ReactNode;
}

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

const persistor = persistStore(store);

epicMiddleware.run(epics);

const Store: React.FC<StoreProps> = ({ children }: StoreProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}{" "}
      </PersistGate>
    </Provider>
  );
};

export default Store;
