const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => { console.log("Time Expired") }, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => {
        console.log('inner setTimeout');
    }, 0);
    console.log("File reading CB");
});


process.nextTick(() => {
    process.nextTick(() => { console.log("Inner nextTick") })
    console.log("nextTick")
});


console.log("Last line of the code");


/**
 * Last line of the code
 * nextTick
 * Inner nextTick
 * Promise
 * Time Expired
 * setImmediate
 * 
 */