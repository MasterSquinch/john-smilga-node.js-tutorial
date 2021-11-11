//Modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alt');

//Importing a module invokes it.
require('./7-init')

sayHi(`susan`);
sayHi(names.john);
sayHi(names.peter);