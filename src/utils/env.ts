import { ENVIRONMENTS } from "../constants";

const isEnvironment = (env: ENVIRONMENTS) => (): boolean =>
  env === process.env.NODE_ENV;

export const isDevEnvironment = isEnvironment(ENVIRONMENTS.development);
export const isProdEnvironment = isEnvironment(ENVIRONMENTS.production);
export const isTestEnvironment = isEnvironment(ENVIRONMENTS.test);
