import { add } from './add.js'

import { mult } from './mult.js'

import { div } from './div.js'

const operator = process.argv[2]

if (Number(process.argv[2])) 
	{
		console.log('You have forgotten to type the operator first: add, mult or div')
	} else
if (isNaN(process.argv[3]) || isNaN(process.argv[4])) 
	{
		console.log('Type numbers!')
	} else 
{
	switch(operator) {
		case 'add': 
			console.log(add(Number(process.argv[3]), Number(process.argv[4])))
			break
		case 'mult': 
			console.log(mult(Number(process.argv[3]), Number(process.argv[4])))
			break
		case 'div':
			if (process.argv[4] == 0) {
				console.log ('Division by zero!')
			} else {
				console.log(div(Number(process.argv[3]), Number(process.argv[4])))
			}
			break
		default:
			console.log('Enter correct operator')
			break
	}
	
} 
