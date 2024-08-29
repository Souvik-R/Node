const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 35726;
var b = 63468;

fs.readFileSync("./file.txt", "utf-8");
console.log("This will execute only after file read.");


https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetch data successfully");
});

setTimeout(() => {
    console.log("setTimeout called after five second");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("File data : " + data);
});

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : " + c);
