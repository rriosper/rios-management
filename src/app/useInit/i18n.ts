import i18next from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { isDevEnvironment } from "../../utils";
import { DEFAULT_LANGUAGE, I18N_LOCALES_PATH, I18N_NS } from "../../constants";

const i18n = async () => {
  try {
    await i18next
      .use(Backend)
      .use(initReactI18next)
      .init({
        lng: DEFAULT_LANGUAGE,
        debug: isDevEnvironment(),
        fallbackLng: DEFAULT_LANGUAGE,
        ns: Object.values(I18N_NS),
        defaultNS: I18N_NS.common,
        backend: {
          allowMultiLoading: true,
          loadPath: I18N_LOCALES_PATH,
          crossDomain: true,
        },
      });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("I18N", err);
  }
};

export default i18n;
