import { add } from "./add.js";

import { mult } from "./mult.js";

import { div } from "./div.js";

const [, , operator, num1, num2, smth] = process.argv;
const func = { add, mult, div };
const operators = Object.keys(func);
if (!operators.includes(operator) || smth) {
  throw new Error(
    "Enter correct operator and expression like that: 'add 5 6'!"
  );
} else {
  try {
    console.log(func[operator](num1, num2));
  } catch (e) {
    console.error(e.message);
  }
}

