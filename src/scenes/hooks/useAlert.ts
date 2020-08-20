import { reduce } from "ramda";
import { useDispatch } from "react-redux";

import { ALERT_TYPES } from "../../constants";
import { actions } from "../../store";

const useAlert = () => {
  const dispatch = useDispatch();

  return reduce(
    (acc: { [key: string]: any }, key: ALERT_TYPES) => {
      acc[key] = (message: string, callback: () => void) =>
        dispatch(actions.creators.alert.add({ type: key, message, callback }));
      return acc;
    },
    {},
    Object.values(ALERT_TYPES)
  );
};

export default useAlert;
