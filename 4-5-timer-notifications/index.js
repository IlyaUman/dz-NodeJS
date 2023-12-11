import { WindowsToaster } from 'node-notifier'

const notifier = new WindowsToaster()

const start = performance.now()

let secs, mins, hours, timer

if (!process.argv[2]) {
	console.log('No delay for timer entered')
} else if (!process.argv[3]) {
	timer =  parseFloat(process.argv[2])*1000
	secs = parseFloat(process.argv[2])
} else if (!process.argv[4]) {
	timer =  parseFloat(process.argv[3])*1000 + parseFloat(process.argv[2])*60*1000
	mins = parseFloat(process.argv[2])
	secs = parseFloat(process.argv[3])
} else {
	timer =  parseFloat(process.argv[4])*1000 + parseFloat(process.argv[3])*60*1000 + parseFloat(process.argv[2])*3600*1000
	hours = parseFloat(process.argv[2])
	mins = parseFloat(process.argv[3])
	secs = parseFloat(process.argv[4])
}


setTimeout(() => {
	notifier.notify(`Timer worked! You entered ${hours || 0} hours, ${mins || 0} mins, ${secs || 0} secs`)
}, timer <= 5000 ? timer : 5000)

