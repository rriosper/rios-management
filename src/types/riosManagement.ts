import { ALERT_TYPES } from "../constants";

export namespace RiosManagement {
  export interface Alert {
    id: string;
    type: ALERT_TYPES;
    message: string;
    callback?: () => void;
  }

  export type User = { [key: string]: any };

  export interface Auth {
    logged: boolean;
    user: User;
  }
}
