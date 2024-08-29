console.log("Hello World");

const a = 384683;
const b = 87579;

setTimeout(()=>{
    console.log("Call me ASAP")
}, 3000)

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : " + c);