import { useEffect } from "react";
import firebase from "./firebase";

const useInit = () => {
  useEffect(() => {
    firebase();
  });
};

export default useInit;
