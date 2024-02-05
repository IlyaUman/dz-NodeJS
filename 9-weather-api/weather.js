#!/usr/bin/env node
import express from "express";
import { getIcon, getWeather } from "./services/api.service.js";
import { printError, printWeather } from "./services/log.service.js";
import { getKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { weatherRouter } from "./services/routes.service.js";

const app = express();
const port = 3000;

const getForecast = async () => {
  try {
    let str = "";
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const lang = process.env.LANG ?? (await getKeyValue(TOKEN_DICTIONARY.lang));
    for (let i = 0; i < city.split(",").length; i++) {
      const weather = await getWeather(city.split(",")[i], lang);
      const icon = getIcon(weather.weather[0].icon);
      str += printWeather(weather, icon);
    }
    return str;
  } catch (e) {
    if (e?.response?.status == 404) {
      return printError("Неверно указан город");
    } else if (e?.response?.status == 401) {
      return printError("Неверно указан токен");
    } else {
      return printError(e.message);
    }
  }
};

const str = await getForecast();

app.use("/weather", weatherRouter);

app.get("/weather", (req, res) => {
  res.send(str);
  res.end();
});

app.listen(port, () => {
  console.log(`Сервер погоды запущен на http://localhost:${port}`);
});
