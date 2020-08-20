import { CombinedState } from "redux";
import { prop, pipe } from "ramda";
import { RiosManagement } from "../types";

type State = CombinedState<{
  alerts: RiosManagement.Alert[];
  auth: RiosManagement.Auth;
}>;

interface TreeSelector {
  root: Selector;
}

interface AuthTreeSelector extends TreeSelector {
  logged: Selector;
}

interface Selectors {
  alerts: TreeSelector;
  auth: AuthTreeSelector;
}

type Selector = (state: State) => any;

const alerts: Selector = prop("alerts");
const auth: Selector = prop("auth");
const logged: Selector = pipe(auth, prop("logged"));

const selectors: Selectors = {
  alerts: {
    root: alerts,
  },
  auth: {
    root: auth,
    logged,
  },
};

export default selectors;
