const EventEmitter = require('events');
const customEmitter = new EventEmitter()
customEmitter.on('response', ()=>{
    console.log('Data received')
})
customEmitter.on('response', (name,age)=>{
    console.log(`Some data has been received by ${name} of ${age} year`)
})
customEmitter.emit('response','mark',34)