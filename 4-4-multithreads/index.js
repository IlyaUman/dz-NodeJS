

import { Worker } from 'node:worker_threads'

const len = process.argv[2] || 300000
let arr = []
for (let i = 0; i < len; i++) {
	arr.push(i+1)
}
const arr1 = arr.slice(0, Math.floor(arr.length / 4 ))
const arr2 = arr.slice(Math.floor(arr.length / 4), Math.floor(arr.length / 2 ))
const arr3 = arr.slice(Math.floor(arr.length / 2), Math.floor(arr.length / 4 * 3))
const arr4 = arr.slice(Math.floor(arr.length / 4 * 3), arr.length )

const calc = (arr) => {
	return new Promise((resolve, reject) => {
		const worker = new Worker('./worker.js', {
			workerData: {
				arr
			}
		})

		worker.on('message', (msg) => {
			console.log(worker.threadId)
			resolve(msg)
		})

		worker.on('error', (err) => {
			reject(err)
		})

		worker.on('exit', () => {
			console.log('Worker has finished it\'s work')
		})

		
	})
}

let num = 0
const main = async (arr) => {
	performance.mark('start')

	const res = await Promise.all([
		calc(arr1),
		calc(arr2),
		calc(arr3),
		calc(arr4)
	])
	num = res.reduce((a, b) => {
		return a + b
	}) 
	console.log(num)
	performance.mark('end')
	performance.measure('main', 'start', 'end')
	
	console.log(performance.getEntriesByName('main').pop())
}

main(arr)

const slow = (arr) => {
	performance.mark('start')
	//arr.map((x) => (Math.random() > 0.5 ? x * 2 : x / 3))
	arr.forEach(el => {
		if (el % 3 == 0) {
			num++
		}
	})
	console.log(num)
	performance.mark('end')
	performance.measure('slow', 'start', 'end')
	console.log(performance.getEntriesByName('slow').pop())
}
slow(arr)




