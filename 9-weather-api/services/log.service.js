import { getIcon } from "./api.service.js";

const printError = (error) => {
  return `<span style="background-color:red">ERROR!</span> ${error}`;
};

const printSuccess = (message) => {
  return `<span style="background-color:green">SUCCESS!</span> ${message}`;
};

const printHelp = () => {
  return `<p><span style="background-color:cyan">HELP</span></p>
		<p>Без параметров - вывод погоды</p>
		<p>-s [CITY] для установки города</p>
		<p>-h для вывода помощи</p>
		<p>-t [API_KEY] для сохранения токена</p>
		<p>-l для установки языка</p>
		`;
};

const printWeather = (weather, icon) => {
  return `<p><span style="background-color:green">WEATHER</span> - ${
    weather.name
  } ${getIcon(icon)}</p>
	<p>Температура: ${weather.main.temp}</p>
	<p>${weather.weather[0].description}</p>
	<p>Скорость ветра: ${weather.wind.speed}</p>
	<p>Влажность: ${weather.main.humidity}%</p>
	`;
};

export { printError, printSuccess, printHelp, printWeather };
