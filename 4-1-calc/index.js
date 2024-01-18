import { add } from "./add.js";

import { mult } from "./mult.js";

import { div } from "./div.js";

const [, , operator, num1, num2, smth] = process.argv;
const operators = ["add", "mult", "div"];
const func = {
  add: add,
  mult: mult,
  div: div,
};
if (!operators.includes(operator) || smth) {
  console.error("You must enter correct operator and two numbers like that: 'add 5 10'!");
  //throw new Error('Enter correct operator!')	- почему-то не работает(((
} else {
  try {
    console.log(func[operator](num1, num2));
  } catch (e) {
    console.log(e.message);
  }
}
