export enum AVAILABLES_LANGUAGES {
  es = "es-ES",
}

export enum I18N_NS {
  common = "common",
  auth = "auth",
}

export const I18N_LOCALES_PATH = "/locales/{{lng}}/{{ns}}.json";

export const DEFAULT_LANGUAGE = AVAILABLES_LANGUAGES.es;
