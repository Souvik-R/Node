const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    console.log("File reading CB");
});

setTimeout(() => { console.log("Time Expired") }, 0);

process.nextTick(()=>{console.log("process.nextTick")});

function printA() {
    console.log("a = " + a);
}

printA();

console.log("Last line of the code");

// a = 100
// Last line of the code
// process.nextTick
// Promise
// Time Expired
// setImmediate
// File reading CB