function x(){
    const a = 10;
    function b(){
        console.log("b");
    }
}

b();
console.log(a);


(function () {
    console.log("Hello from IIFE!");
})();