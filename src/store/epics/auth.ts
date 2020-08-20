import { ActionsObservable } from "redux-observable";
import { mapTo } from "rxjs/operators";
import actions from "../actions";

const epic = (action$: ActionsObservable<any>) =>
  action$.ofType(actions.types.user.auth);
mapTo({ type: "test" });

export default epic;
