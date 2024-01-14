import { add } from "./add.js";

import { mult } from "./mult.js";

import { div } from "./div.js";

const [, , operator, num1, num2] = process.argv;
const operators = ['add', 'mult', 'div'];
const func = {
	'add': add,
	'mult': mult,
	'div': div
};
if (!operators.includes(operator)) {
	console.error('Enter correct operator!');
	//throw new Error('Enter correct operator!')	- почему-то не работает(((
} else {
	try {
		console.log(func[operator](num1, num2))
	} catch(e) {
		console.log(e.message)
	}
};
