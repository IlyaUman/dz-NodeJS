

import { parentPort, workerData } from 'node:worker_threads'

// const calc = ({arr}) => {
// 	return arr.map((x) => (Math.random() > 0.5 ? x * 2 : x / 3))
// }

const calc = ({arr}) => {
	let num = 0

try {
	arr.forEach(el => {
		if (el % 3 == 0) {
			num++
		}
	})
	return num
} catch(err) {
	return err.message
}
	
}

parentPort.postMessage(calc(workerData))