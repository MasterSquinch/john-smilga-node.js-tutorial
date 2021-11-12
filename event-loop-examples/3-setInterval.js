setInterval(() => {
    console.log('hello world')
}, 2000)
console.log(`I will run first`)
console.log(`I will run second`)
// process stays alive unless
// kill process (^C)
// unexpected error