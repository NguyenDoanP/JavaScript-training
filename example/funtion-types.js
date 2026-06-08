// ====================================
// 1. FUNCTION DECLARATION
// ====================================

showWelcome();

function showWelcome() {
    console.log("Welcome!");
}

/*
Works because Function Declaration
is fully hoisted.
*/


// ====================================
// 2. FUNCTION EXPRESSION
// ====================================

// greetCustomer(); // ReferenceError

const greetCustomer = function () {
    console.log("Hello customer!");
};

greetCustomer();

/*
Cannot be called before declaration.

The variable exists in TDZ
until initialization.
*/


// ====================================
// 3. ARROW FUNCTION
// ====================================

// calculateTax(); // ReferenceError

const calculateTax = () => {
    console.log("Calculating tax...");
};

calculateTax();

/*
Arrow functions behave like variables.

Not fully hoisted.
*/


// ====================================
// 4. SHORTER ARROW SYNTAX
// ====================================

const double = number => number * 2;

console.log(double(5));

/*
Equivalent to:

function double(number) {
  return number * 2;
}
*/


// ====================================
// 5. FUNCTION DECLARATION RETURN
// ====================================

function getProductName() {
    return "Laptop";
}

console.log(getProductName());


// ====================================
// 6. FUNCTION EXPRESSION RETURN
// ====================================

const getCategory = function () {
    return "Electronics";
};

console.log(getCategory());


// ====================================
// 7. ARROW FUNCTION RETURN
// ====================================

const getPrice = () => 1000;

console.log(getPrice());


// ====================================
// 8. REGULAR FUNCTION HAS ITS OWN THIS
// ====================================

const user = {
    name: "Alice",

    sayHello: function () {
        console.log(this.name);
    }
};

user.sayHello();

/*
Output:

Alice

this = user
*/


// ====================================
// 9. ARROW FUNCTION DOES NOT HAVE ITS OWN THIS
// ====================================

const customer = {
    name: "Bob",

    sayHello: () => {
        console.log(this.name);
    }
};

customer.sayHello();

/*
Output in Node.js:

undefined

Arrow function does not create this.

It uses this from outer scope.
*/


// ====================================
// 10. THIS INSIDE CALLBACK
// ====================================

const cart = {
    items: ["Phone", "Tablet"],

    showItems() {
        this.items.forEach(item => {
            console.log(this.items.length, item);
        });
    }
};

cart.showItems();

/*
Arrow function is useful here.

It inherits this from showItems().
*/


// ====================================
// 11. ARGUMENTS OBJECT
// ====================================

function regularFunction() {
    console.log(arguments);
}

regularFunction(1, 2, 3);


/*
arguments exists
inside regular functions
*/


// ====================================
// 12. ARROW FUNCTION HAS NO ARGUMENTS
// ====================================

const arrowFunction = (...args) => {
    console.log(args);
};

arrowFunction(1, 2, 3);

/*
Must use rest parameter.

Arrow functions do not have arguments.
*/


// ====================================
// 13. CAN BE USED AS CONSTRUCTOR
// ====================================

function Product(name) {
    this.name = name;
}

const phone = new Product("iPhone");

console.log(phone);


/*
Works.

Regular functions can be constructors.
*/


// ====================================
// 14. ARROW FUNCTION CANNOT BE CONSTRUCTOR
// ====================================

const ProductArrow = (name) => {
    this.name = name;
};

// const tablet = new ProductArrow("iPad");

/*
TypeError:

ProductArrow is not a constructor
*/


// ====================================
// 15. HOISTING - FUNCTION DECLARATION
// ====================================

showMessage();

function showMessage() {
    console.log("Function Declaration");
}

/*
Works
*/


// ====================================
// 16. HOISTING - FUNCTION EXPRESSION (VAR)
// ====================================

try {
    showStatus();
} catch (error) {
    console.log(error.message);
}

var showStatus = function () {
    console.log("Status");
};

/*
showStatus exists
but equals undefined

TypeError:
showStatus is not a function
*/


// ====================================
// 17. HOISTING - FUNCTION EXPRESSION (LET)
// ====================================

try {
    displayOrder();
} catch (error) {
    console.log(error.message);
}

let displayOrder = function () {
    console.log("Order");
};

/*
ReferenceError

TDZ
*/


// ====================================
// 18. HOISTING - ARROW FUNCTION (VAR)
// ====================================

try {
    calculateDiscount();
} catch (error) {
    console.log(error.message);
}

var calculateDiscount = () => {
    console.log("Discount");
};

/*
TypeError
*/


// ====================================
// 19. HOISTING - ARROW FUNCTION (CONST)
// ====================================

try {
    calculateShipping();
} catch (error) {
    console.log(error.message);
}

const calculateShipping = () => {
    console.log("Shipping");
};

/*
ReferenceError
*/


// ====================================
// 20. PASSING FUNCTION AS DATA
// ====================================

function processOrder(callback) {
    console.log("Processing order...");

    callback();
}

processOrder(function () {
    console.log("Order completed");
});

/*
Function Expression is commonly used
when passing functions as values.
*/


// ====================================
// 21. ARROW CALLBACK
// ====================================

const products = ["Laptop", "Phone", "Tablet"];

products.forEach(product => {
    console.log(product);
});

/*
Arrow functions are ideal
for short callbacks.
*/
