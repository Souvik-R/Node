const crypto = require("crypto");

console.log("Hello World");

const a = 384683;
const b = 87579;

// Synchronous function will block you main thread: DON'T USE IT
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key is Generated")

// pbkdf2 : Password-Based Key Derivation Function 2
// This is async function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated.");
});

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : " + c);
