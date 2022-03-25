const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(`this system has uptime of ${os.uptime()} seconds`)
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)
 