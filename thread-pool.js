process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("1. pbkdf2 generated.");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("2. pbkdf2 generated.");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("3. pbkdf2 generated.");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("4. pbkdf2 generated.");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("5. pbkdf2 generated.");
});