// ====================================
// 1. ARITHMETIC OPERATORS
// ====================================

const price = 100;
const quantity = 3;

console.log(price + quantity); // 103
console.log(price - quantity); // 97
console.log(price * quantity); // 300
console.log(price / quantity); // 33.333...
console.log(price % quantity); // 1
console.log(2 ** 3); // 8


// ====================================
// 2. ASSIGNMENT OPERATORS
// ====================================

let stock = 100;

stock += 20;
console.log(stock); // 120

stock -= 10;
console.log(stock); // 110

stock *= 2;
console.log(stock); // 220

stock /= 2;
console.log(stock); // 110

stock %= 3;
console.log(stock); // 2


// ====================================
// 3. COMPARISON OPERATORS
// ====================================

console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log(10 != "10"); // false
console.log(10 !== "10"); // true

console.log(20 > 10); // true
console.log(20 < 10); // false

console.log(20 >= 20); // true
console.log(15 <= 20); // true


// ====================================
// 4. LOGICAL AND (&&)
// ====================================

console.log(true && true); // true
console.log(true && false); // false

console.log("Laptop" && "Phone");
/*
Phone

Returns the last value
because all values are truthy
*/


console.log(null && "Phone");

/*
null

Returns the first falsy value
*/


// ====================================
// 5. LOGICAL OR (||)
// ====================================

console.log(false || true); // true

console.log("" || "Default Name");

/*
Default Name

Returns first truthy value
*/


console.log("Alice" || "Guest");

/*
Alice
*/


// ====================================
// 6. FALSY VALUES
// ====================================

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

/*
All false
*/


// ====================================
// 7. NULLISH COALESCING (??)
// ====================================

console.log(null ?? "Default");
console.log(undefined ?? "Default");

/*
Default
Default
*/


console.log(0 ?? "Default");
console.log("" ?? "Default");
console.log(false ?? "Default");

/*
0
""
false

Not replaced
*/


// ====================================
// 8. || VS ??
// ====================================

const quantity1 = 0;

console.log(quantity1 || 10);

/*
10

0 is falsy
*/


console.log(quantity1 ?? 10);

/*
0

0 is NOT null/undefined
*/


// ====================================
// 9. EMPTY STRING EXAMPLE
// ====================================

const username = "";

console.log(username || "Guest");

/*
Guest
*/


console.log(username ?? "Guest");

/*
""

Empty string remains
*/


// ====================================
// 10. FALSE EXAMPLE
// ====================================

const isAdmin = false;

console.log(isAdmin || true);

/*
true
*/


console.log(isAdmin ?? true);

/*
false
*/


// ====================================
// 11. OPERATOR PRECEDENCE
// ====================================

console.log(2 + 3 * 4);

/*
14

Multiplication first
*/


console.log((2 + 3) * 4);

/*
20

Parentheses first
*/


// ====================================
// 12. PRECEDENCE WITH LOGICAL OPERATORS
// ====================================

console.log(true || false && false);

/*
true

Equivalent:

true || (false && false)
*/


console.log((true || false) && false);

/*
false
*/


// ====================================
// 13. TERNARY OPERATOR
// ====================================

const age = 20;

const status =
    age >= 18 ? "Adult" : "Minor";

console.log(status);

/*
Adult
*/


// ====================================
// 14. DEFAULT VALUE USING ||
// ====================================

function showDiscount(discount) {
    const finalDiscount = discount || 5;

    console.log(finalDiscount);
}

showDiscount(20);
showDiscount(0);

/*
20
5

0 is falsy
*/


// ====================================
// 15. DEFAULT VALUE USING ??
// ====================================

function showShippingFee(fee) {
    const finalFee = fee ?? 10;

    console.log(finalFee);
}

showShippingFee(20);
showShippingFee(0);
showShippingFee(null);

/*
20
0
10
*/


// ====================================
// 16. CANNOT MIX ?? WITH || DIRECTLY
// ====================================

// const value = null || undefined ?? "Default";

/*
SyntaxError

Cannot mix ?? with ||
without parentheses
*/


// ====================================
// 17. CORRECT WAY
// ====================================

const value1 =
    (null || undefined) ?? "Default";

console.log(value1);

/*
Default
*/


const value2 =
    null ?? ("Guest" || "User");

console.log(value2);

/*
Guest
*/


// ====================================
// 18. REAL-WORLD EXAMPLE
// ====================================

const apiResponse = {
    productName: "",
    stock: 0,
    price: null
};

console.log(
    apiResponse.productName || "Unknown Product"
);

/*
Unknown Product
*/


console.log(
    apiResponse.stock ?? 100
);

/*
0
*/


console.log(
    apiResponse.price ?? 999
);

/*
999
*/
