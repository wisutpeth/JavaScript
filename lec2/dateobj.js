//Date function return milliseconds that have elapsed
//since midnight on january 1, 1970, UTC
// This example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');
// expected output: starting timer...

setTimeout(() => {
    const millis = Date.now() - start;
    
    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    //expected output: seconds elapdes = 2
}, 2000);