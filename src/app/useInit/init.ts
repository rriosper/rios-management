import { useEffect, useReducer } from "react";
import { generateActions } from "reduxt";

import "./firebase";
import i18n from "./i18n";

const init = async () => {
  await i18n();
};

const [actionTypes, actionCreators] = generateActions(
  null,
  "init",
  "success",
  "error"
);

type State = {
  loading: boolean;
  error: boolean;
  success: boolean;
};

const initialState: State = {
  loading: false,
  error: false,
  success: false,
};

type Action = {
  type:
    | typeof actionTypes.init
    | typeof actionTypes.success
    | typeof actionTypes.error;
};

const reducer = (state: State, { type }: Action) => {
  switch (type) {
    case actionTypes.init:
      return { loading: true, error: false, success: false };
    case actionTypes.success:
      return { loading: false, error: false, success: true };
    case actionTypes.error:
      return { loading: false, error: true, success: false };
    default:
      return state;
  }
};

const useInit = () => {
  const [{ loading, error, success }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    if (!loading && !error && !success) {
      init()
        .then(() => dispatch(actionCreators.success()))
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error("Init", err);
          dispatch(actionCreators.error());
        });
    }
  });

  return null;
};

export default useInit;
