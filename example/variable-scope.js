console.log("=== VAR ===");

function varExample() {
    if (true) {
        var message = "Hello from var";
    }

    console.log(message);
}

varExample();

console.log("\n=== LET ===");

function letExample() {
    if (true) {
        let age = 25;
        console.log(age);
    }

    // console.log(age); //
}

letExample();

console.log("\n=== CONST ===");

const user = {
    name: "An",
};

user.name = "John";

console.log(user);

// user = {}; //


console.log("=== Function Scope vs Block Scope ===");

function scopeDemo() {
    if (true) {
        var a = "var";
        let b = "let";
        const c = "const";
    }

    console.log(a);

    // console.log(b); // Error
    // console.log(c); // Error
}

scopeDemo();

console.log("=== Hoisting ===");

console.log(myVar);
var myVar = "Hello";

// console.log(myLet);
// let myLet = "World";
