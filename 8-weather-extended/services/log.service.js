import chalk from "chalk";
import dedent from "dedent";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("SUCCESS!") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("HELP")}
		Без параметров - вывод погоды
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
		-l для установки языка
		`
  );
};

const printWeather = (weather, icon) => {
  console.log(
    dedent`${chalk.bgCyan("WEATHER")} - ${weather.name}
		Температура: ${weather.main.temp}
		${icon}  ${weather.weather[0].description}
		Скорость ветра: ${weather.wind.speed}
		Влажность: ${weather.main.humidity}%
		~~~~~~~~~~~~~~~~~~~
		`
  );
};

export { printError, printSuccess, printHelp, printWeather };
