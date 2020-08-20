import { combineEpics } from "redux-observable";

import authEpics from "./auth";

const epics = combineEpics(authEpics);

export default epics;
