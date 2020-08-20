import { auth } from "firebase";

interface LoginProps {
  email: string;
  password: string;
}

const login = async ({ email, password }: LoginProps) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Login", err);
    throw new Error("auth:login.errors.generic");
  }
};

const logout = async () => {
  try {
    await auth().signOut();
    console.log("logout");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Logout", err);
    // TODO: Replace translation
    throw new Error("auth:login.errors.generic");
  }
};

const service = {
  login,
  logout,
};

export default service;
