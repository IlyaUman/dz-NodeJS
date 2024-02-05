import express from "express";
import { printError, printHelp, printSuccess } from "./log.service.js";
import { saveCity, saveToken, saveLang } from "../helpers/saveFuncs.js";
import { getArgs } from "../helpers/args.js";

const weatherRouter = express.Router();

const args = getArgs(process.argv);

weatherRouter.get("/help", (req, res) => {
  res.send(printHelp());
  res.end();
});

weatherRouter.post("/city", (req, res) => {
  if (!args.s || !args.s.length) {
    res.send(printError("город не передан"));
    res.end();
  } else {
    res.send(printSuccess("Город сохранён"));
    return saveCity(args.s);
    res.end();
  }
});

weatherRouter.post("/token", (req, res) => {
  if (!args.t || !args.t.length) {
    res.send(printError("Токен не передан"));
    res.end();
  } else {
    res.send(printSuccess("Токен сохранён"));
    return saveToken(args.t);
    res.end();
  }
});

weatherRouter.post("/lang", (req, res) => {
  if (!args.l || !args.l.length) {
    res.send(printError("Язык не передан, по умолчанию установлен русский"));
    return saveLang("ru");
    res.end();
  } else {
    res.send(printSuccess("Язык сохранён"));
    return saveLang(args.l);
    res.end();
  }
});

export { weatherRouter };
