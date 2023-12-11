import { EventEmitter} from 'node:events'

const myEmitter = new EventEmitter()

const operator = process.argv[2]

myEmitter.on('add', (a, b) => {
	console.log(a + b)
})

myEmitter.on('mult', (a, b) => {
	console.log(a * b)
})

myEmitter.on('div', (a, b) => {
	console.log(a / b)
})

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
			myEmitter.emit('add', Number(process.argv[3]), Number(process.argv[4]))
			break
		case 'mult': 
			myEmitter.emit('mult', Number(process.argv[3]), Number(process.argv[4]))
			break
		case 'div':
			if (process.argv[4] == 0) {
				console.log ('Division by zero!')
			} else {
				myEmitter.emit('div', Number(process.argv[3]), Number(process.argv[4]))
			}
			break
		default:
			console.log('Enter correct operator')
			break
	}
	
}