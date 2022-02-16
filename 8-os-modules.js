// OS MODULE, built-in module

const os = require('os')

// info abt current user
const user = os.userInfo()
//console.log(user)

// mtd returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMomery: os.freemem(),
}
console.log(currentOS)