// ====================================
// 1. FUNCTION BASICS
// ====================================

function showWelcomeMessage() {
    console.log("Welcome to our online store!");
}

showWelcomeMessage();


// ====================================
// 2. PARAMETERS & ARGUMENTS
// ====================================

function greetCustomer(customerName) {
    console.log(`Hello, ${customerName}!`);
}

greetCustomer("Alice");
greetCustomer("Bob");

/*
customerName = parameter
"Alice" and "Bob" = arguments
*/


// ====================================
// 3. RETURN VALUES
// ====================================

function calculateTotal(price, quantity) {
    return price * quantity;
}

const totalPrice = calculateTotal(50, 3);

console.log("Total Price:", totalPrice);

/*
return sends a value back
to whoever called the function
*/


// ====================================
// 4. FUNCTION WITHOUT RETURN
// ====================================

function confirmOrder() {
    console.log("Order confirmed");
}

const orderResult = confirmOrder();

console.log(orderResult);

/*
Output:

Order confirmed
undefined

Because the function does not return anything.
JavaScript automatically returns undefined.
*/


// ====================================
// 5. FUNCTION SCOPE
// ====================================

function createOrder() {
    const orderId = 1001;

    console.log("Inside function:", orderId);
}

createOrder();

// console.log(orderId);

/*
ReferenceError: orderId is not defined

Because orderId only exists
inside createOrder()
*/


// ====================================
// 6. LEXICAL SCOPE
// ====================================

const taxRate = 0.1;

function calculateFinalPrice(price) {
    const shippingFee = 20;

    function showFinalPrice() {
        console.log(
            price + shippingFee + price * taxRate
        );
    }

    showFinalPrice();
}

calculateFinalPrice(100);

/*
showFinalPrice() can access:

price
shippingFee
taxRate

because of lexical scope
*/


// ====================================
// 7. SCOPE CHAIN
// ====================================

const country = "USA";

function company() {
    const companyName = "Tech Solutions";

    function employee() {
        const employeeName = "John";

        console.log(employeeName);
        console.log(companyName);
        console.log(country);
    }

    employee();
}

company();

/*
JavaScript looks for variables in this order:

1. Current scope
2. Parent scope
3. Global scope

This process is called Scope Chain.
*/


// ====================================
// 8. LEXICAL SCOPE VS CALL LOCATION
// ====================================

const product = "Laptop";

function showProduct() {
    console.log(product);
}

function run() {
    const product = "Phone";

    showProduct();
}

run();

/*
Output:

Laptop

Not Phone

JavaScript determines scope
based on where a function is defined,
not where it is called.
*/


// ====================================
// 9. HOISTING - FUNCTION DECLARATION
// ====================================

showGreeting();

function showGreeting() {
    console.log("Hello!");
}

/*
Works correctly.

Function declarations
are fully hoisted.
*/


// ====================================
// 10. HOISTING - FUNCTION EXPRESSION
// ====================================

// sayGoodbye();

const sayGoodbye = function () {
    console.log("Goodbye!");
};

sayGoodbye();

/*
If uncomment:

sayGoodbye();

Will get:

ReferenceError

Because const exists in the
Temporal Dead Zone (TDZ)
before initialization.
*/


// ====================================
// 11. HOISTING - VAR
// ====================================

console.log(score);

var score = 100;

/*
Output:

undefined

JavaScript treats it like:

var score;

console.log(score);

score = 100;
*/


// ====================================
// 12. HOISTING - LET / CONST
// ====================================

// console.log(age);

let age = 25;

/*
ReferenceError

Because let and const
are in the Temporal Dead Zone (TDZ)
until the declaration is reached.
*/
