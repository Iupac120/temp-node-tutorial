const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
console.log(names);
console.log(data)
require('./7-mind-grenade')

sayHi('susana');
sayHi(names.John);
sayHi(names.Peter)