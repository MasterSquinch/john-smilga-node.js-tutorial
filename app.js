// npm - global command, comes with node
// npm --version

// local dependency - use it in this particular project
// npm i <packageName>

// global dependency - use <packageName>
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (store
//manual approach (create package.jso
//npm init (step by step, press enter
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
console.log(items)
const newItems = _.flattenDeep(items)
console.log(items)
console.log(newItems)