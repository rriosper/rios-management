import { prepend, propEq, reject } from "ramda";
import { AnyAction } from "redux";
import { generateReducer } from "reduxt";
import { v4 } from "uuid";

import { RiosManagement } from "../../types";
import actions from "../actions";

type AlertState = RiosManagement.Alert[];

const initialState: AlertState = [];

const addFn = (state: AlertState, { payload }: AnyAction) =>
  prepend({ id: v4(), ...payload }, state);

const closeFn = (state: AlertState, { payload }: AnyAction) =>
  reject(propEq("id", payload), state);

const reducer = generateReducer(initialState, {
  [actions.types.alert.add]: addFn,
  [actions.types.alert.close]: closeFn,
});

export default reducer;
