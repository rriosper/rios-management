import { generateActions } from "reduxt";

const [authTypes, authCreators] = generateActions("auth", "login", "logout");
const [alertTypes, alertCreators] = generateActions("alert", "add", "close");
const [userTypes, userCreators] = generateActions(
  "user",
  "auth",
  "auth start",
  "auth error",
  "auth success"
);

const actions = {
  types: {
    alert: alertTypes,
    auth: authTypes,
    user: userTypes,
  },

  creators: {
    alert: alertCreators,
    auth: authCreators,
    user: userCreators,
  },
};

export default actions;
