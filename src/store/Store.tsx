import { identity } from "ramda";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

const initialState = {};

const epicMiddleware = createEpicMiddleware();

interface StoreProps {
  children: React.ReactNode;
}

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const Store: React.FC<StoreProps> = ({ children }: StoreProps) => {
  const store = createStore(
    identity,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Store;
