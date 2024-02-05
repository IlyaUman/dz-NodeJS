import { TOKEN_DICTIONARY, saveKeyValue } from "../services/storage.service.js";

const saveCity = async (city) => {
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
  } catch (e) {
    printError(e.message);
  }
};

const saveToken = async (token) => {
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
  } catch (e) {
    printError(e.message);
  }
};

const saveLang = async (lang) => {
  try {
    await saveKeyValue(TOKEN_DICTIONARY.lang, lang);
  } catch (e) {
    printError(e.message);
  }
};

export { saveCity, saveToken, saveLang };
