const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => { console.log("Time Expired") }, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => { console.log("2md Timer") }, 0);
    process.nextTick(() => { console.log("2nd nextTick") });
    setImmediate(() => console.log("2nd setImmediate"));
    console.log("File Reading CV")
});

process.nextTick(() => { console.log("nextTick") });

console.log("Last line of the code");


// Last line of the code
// nextTick
// Promise
// Time Expired
// setImmediate
// File Reading CV
// 2nd nextTick
// 2nd setImmediate
// 2md Timer