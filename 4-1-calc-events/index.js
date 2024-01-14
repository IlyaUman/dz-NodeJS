import { EventEmitter} from 'node:events';

import { add } from "./add.js";

import { mult } from "./mult.js";

import { div } from "./div.js";

const myEmitter = new EventEmitter()
const operators = ['add', 'mult', 'div'];
const [, , operator, num1, num2] = process.argv
const func = {
	'add': add,
	'mult': mult,
	'div': div
}

myEmitter.on(operator, (num1, num2) => {
	// if (!operators.includes(operator)) {
	// 	console.error('Enter correct operator!');
	// } else {
		try {
			console.log(func[operator](num1, num2))
		} catch(e) {
			console.log(e.message)
		}
	// }
	
})
if (operators.includes(operator)) {
	myEmitter.emit(operator, num1, num2)
}


// myEmitter.on('mult', (a, b) => {
// 	console.log(a * b)
// })

// myEmitter.on('div', (a, b) => {
// 	console.log(a / b)
// })

// if (Number(process.argv[2])) 
// 	{
// 		console.log('You have forgotten to type the operator first: add, mult or div')
// 	} else
// if (isNaN(process.argv[3]) || isNaN(process.argv[4])) 
// 	{
// 		console.log('Type numbers!')
// 	} else 
// {
// 	switch(operator) {
// 		case 'add': 
// 			myEmitter.emit('add', Number(process.argv[3]), Number(process.argv[4]))
// 			break
// 		case 'mult': 
// 			myEmitter.emit('mult', Number(process.argv[3]), Number(process.argv[4]))
// 			break
// 		case 'div':
// 			if (process.argv[4] == 0) {
// 				console.log ('Division by zero!')
// 			} else {
// 				myEmitter.emit('div', Number(process.argv[3]), Number(process.argv[4]))
// 			}
// 			break
// 		default:
// 			console.log('Enter correct operator')
// 			break
// 	}
	
// }