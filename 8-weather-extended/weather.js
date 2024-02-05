#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { getIcon, getWeather } from "./services/api.service.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DICTIONARY,
} from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Токен не передан");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Токен сохранён");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("Город не передан");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("Город сохранён");
  } catch (e) {
    printError(e.message);
  }
};

const saveLang = async (lang) => {
  if (!lang.length) {
    lang = "ru";
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.lang, lang);
    printSuccess("Язык сохранён");
  } catch (e) {
    printError(e.message);
  }
};

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const lang = process.env.LANG ?? (await getKeyValue(TOKEN_DICTIONARY.lang));
    for (let i = 0; i < city.split(",").length; i++) {
      const weather = await getWeather(city.split(",")[i], lang);
      const icon = getIcon(weather.weather[0].icon);

      printWeather(weather, icon);
    }
  } catch (e) {
    if (e?.response?.status == 404) {
      printError("Неверно указан город");
    } else if (e?.response?.status == 401) {
      printError("Неверно указан токен");
    } else {
      printError(e.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  if (args.l) {
    return saveLang(args.l);
  }
  return getForecast();
  console.log(args);
};

initCLI();
