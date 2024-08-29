#### NAMASTE NODE.JS #####

## 1. Introduction to Node.js
## => 

## 2. JS on Server
## => 

## 3. Let's write code
## => 

## 4. module.exports & require
## => 

## 5. Diving into the NodeJS github repo
## =>






### **JavaScript on the Server**

NodeJS brought a groundbreaking philosophy: running JavaScript everywhere! 🌐

Before NodeJS, JavaScript was primarily a browser-side language, but NodeJS allowed it to run on servers, opening up new possibilities. This transition has empowered front-end developers to seamlessly shift into back-end roles, making full-stack development more accessible with just one language. Isn’t that cool?

### **NodeJS is Written in C++**

Yes, NodeJS is built using C++, and so is Google’s V8 engine, which powers it. 
Interestingly, around 70% of the V8 engine code is written in C++, though it also incorporates other languages like JavaScript, Python, and TypeScript.

### **What is the V8 Engine?**

V8 is Google’s open-source, high-performance JavaScript and WebAssembly engine, primarily written in C++. It’s not only used in Chrome but also in NodeJS, making it a critical component of both. 
- V8’s primary job is to run JavaScript efficiently.
- It follows the ECMAScript standard, which is maintained by the ECMA community.

The ability to embed V8 into any C++ application was a key reason why the creator of NodeJS chose it. NodeJS, with its combination of the V8 engine and additional APIs/modules written in JavaScript, has become incredibly powerful.

### **How V8 Works**

The V8 engine processes JavaScript code by converting it into machine-level code that the computer can understand (binary). 
This process involves several layers, from high-level languages like C++ down to assembly and machine code, eventually reaching binary, which is the language computers understand.

### **ECMA Specification**

The ECMAScript standard is maintained by TC39, a committee of 39 experts who oversee the evolution of JavaScript. This ensures that all JS engines, including V8, adhere to the same standards.


### episode 05 - Diving into the NodeJS Github Repo.

### **IIFE (Immediately Invoked Function Expression)**

(function () {
    console.log("Hello from IIFE!");
})();

### **What are variable & function private in different modules ?**

Bacause of IIFE & require(statement).


### **How do you get access to module.exports, require**

Node js passes module, require as a parameter to the IIFE.

### **What actually happens behind the scene when we do `require("./path")` **

It does these five steps :- 
1.  **Resolve the module**: Node.js resolves the path to the module whether it is a local path, json file or
a module from the npm registry(node:module).

2.  **Loading the module**: File content is loaded according to the file.
-   If it is a JSON file, it is loaded as a JSON object.
-   If it is a JavaScript file, it is loaded as a JavaScript module.
-   If it is a native module, it is loaded as a native module.
-   If it is a binary module, it is loaded as a binary module.

3.  **( Compile )Wrap inside IIFE**: Then it wraps inside IIFE.

4.  **Evaluation of code**: Then the module.exports actually happens.

5.  **Caching**: Finally, it perform caching.

## Caching :- suppose i have require a module and the same module is required in another 3 files.
##   now if I run any one of these three files, it does the same five steps and after completing
##   caching, if i called any other file of these, it does not perform those five steps. It just take
##   from previous caching thing. **


## These are all code which are wrapping my code.

let wrap = function(script) { // eslint-disable-line func-style
  return Module.wrapper[0] + script + Module.wrapper[1];
};

const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});',
];

### episode 06 - Libuv & async IO

Javascript engine needs some super power to get access to all of Operating System things when
it comes to asynchronous processing. For synchronous javascript do not need anything as we know
javascript is a synchronous single threaded language. It is node who is able to do async thing
in js. To communicate with the OS things(File, DB, Timer, Networks & more) js engine needs some 
super powers. Here Libuv comes into picture. Node.js is giving this super power to js engine.

libuv is genie for node js. It's a node js library(Just written in C). Suppose js engine need to access a file, so it cannot just go directly, it tells libuv and libuv talks to the OS, gets back the response and give it back to the v8 engine.
## https://libuv.org/

## Why libuv is written in C?
Javascript is a high level language. So to connect to OS we need low level language, that is C. That is why
it is written in C.

Node js has a concept of non-blocking I/O or asynchronous I/O using v8 engine.


### episode 07 - Sync, Async, setTimeoutZero


const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 35726;
var b = 63468;

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

### In this above code we see how v8 engine and libuv are working behind..but here comes a twist.

fs.readFileSync("./file.txt", "utf-8");
console.log("This will execute only after file read.");

### By using this readFileSync() function, this always run synchronously. So it will block the main thread, and that is why we should not use this function for being a good developer..we should not block the main thread.

### Now blocking the main thread.

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


### In this above code i am blocking the main thread by using crypto.pbkdf2Sync() this function. Let me tell you password encryption is very cpu intensive task.



### episode 08 - Deep dive into v8 JS Engine

Whenever js code is send to v8 engine and now..there have many steps:

--> A. PARSING
1. Lexical Analysis(Tokenization): this phase will read the code as token by token.
2. Syntax Analysis(Parsing): This phase your tokens are converted to AST(Abstract Syntax Tree is a format of tree); Follow more: https://astexplorer.net/
3. After converted to AST, then is goes to "Ignition Interpreter and from there, most of the code is interpret and convert into byte code and execute. but there are some code which is reused, or there are chances of optimization(Hot Code), that code is given to "Turbo fan compiler" and then turbo fan compiler built optimized to machine code. and then it is finally executes.


### episode 09 - libuv & Event Loop



### episode 10 - Thread pool in libuv

Homework: 
1. Read about epoll(Linux), kqueue(MacOs)
2. What data structure does epoll used?
3. FDS - socket description
4. Event emitter
5. Stream & buffer
6. Pipes