import { EventEmitter } from "node:events";

import { add } from "./add.js";

import { mult } from "./mult.js";

import { div } from "./div.js";

const myEmitter = new EventEmitter();
const operators = ["add", "mult", "div"];
const [, , operator, num1, num2] = process.argv;
const func = {
  add: add,
  mult: mult,
  div: div,
};

myEmitter.on(operator, (num1, num2) => {
  try {
    console.log(func[operator](num1, num2));
  } catch (e) {
    console.log(e.message);
  }
});
if (operators.includes(operator)) {
  myEmitter.emit(operator, num1, num2);
}
