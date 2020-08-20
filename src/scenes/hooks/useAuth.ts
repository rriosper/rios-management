import { auth } from "firebase";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectors, actions } from "../../store";

const useAuth = () => {
  const logged = useSelector(selectors.auth.logged);
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      console.log("auth", { user, logged });
      if (user && !logged) {
        dispatch(actions.creators.auth.login(user));
      }

      if (!user && logged) {
        dispatch(actions.creators.auth.logout());
      }
    });
  });
  return { logged };
};

export default useAuth;
