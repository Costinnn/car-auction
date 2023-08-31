import "server-only";

const dictionaries = {
  en: () => import("../languagesData/en.json").then((module) => module.default),
  ro: () => import("../languagesData/ro.json").then((module) => module.default),
};

export const getLanguage = async (locale) => dictionaries[locale]();
