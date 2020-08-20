import { always } from "ramda";
import { AnyAction, CombinedState } from "redux";
import { generateReducer } from "reduxt";

import actions from "../actions";

interface AuthState {
  logged: boolean;
  user: { [key: string]: any };
}

const initialState: AuthState = {
  logged: false,
  user: {},
};

const loginFn = (_: CombinedState<AuthState>, { payload }: AnyAction) => ({
  logged: true,
  user: payload,
});

const logoutFn = always(initialState);

const reducer = generateReducer(initialState, {
  [actions.types.auth.login]: loginFn,
  [actions.types.auth.logout]: logoutFn,
});

export default reducer;
