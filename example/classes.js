// ====================================
// 1. BASIC CLASS SYNTAX
// ====================================

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayInfo() {
        console.log(`${this.name} - $${this.price}`);
    }
}

const laptop = new Product("Laptop", 1200);

laptop.displayInfo();

/*
Laptop - $1200
*/


// ====================================
// 2. CLASS IS NOT HOISTED
// ====================================

// const phone = new Phone();

/*
ReferenceError

Cannot access 'Phone'
before initialization
*/

class Phone {
    constructor(model) {
        this.model = model;
    }
}


// ====================================
// 3. INSTANCE FIELDS
// ====================================

class Customer {
    membershipLevel = "Standard";

    constructor(name) {
        this.name = name;
    }
}

const customer1 = new Customer("Alice");

console.log(customer1.name);
console.log(customer1.membershipLevel);


/*
Alice
Standard
*/


// ====================================
// 4. INSTANCE METHODS
// ====================================

class Order {
    constructor(orderId) {
        this.orderId = orderId;
    }

    confirm() {
        console.log(`Order ${this.orderId} confirmed`);
    }
}

const order = new Order(1001);

order.confirm();

/*
Order 1001 confirmed
*/


// ====================================
// 5. STATIC FIELD
// ====================================

class Store {
    static storeName = "Tech Store";
}

console.log(Store.storeName);

/*
Tech Store
*/


// ====================================
// 6. STATIC METHOD
// ====================================

class CurrencyConverter {
    static usdToEur(amount) {
        return amount * 0.92;
    }
}

console.log(
    CurrencyConverter.usdToEur(100)
);

/*
92
*/


// ====================================
// 7. STATIC IS NOT AVAILABLE
// ON INSTANCES
// ====================================

const converter = new CurrencyConverter();

// console.log(converter.usdToEur(100));

/*
TypeError

Static methods belong
to the class itself
*/


// ====================================
// 8. PRIVATE FIELD
// ====================================

class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    showBalance() {
        console.log(this.#balance);
    }
}

const account = new BankAccount();

account.deposit(500);
account.showBalance();

/*
500
*/


// ====================================
// 9. PRIVATE FIELD ACCESS ERROR
// ====================================

// console.log(account.#balance);

/*
SyntaxError

Private fields can only
be accessed inside the class
*/


// ====================================
// 10. PRIVATE METHOD
// ====================================

class Payment {
    #validateCard() {
        console.log("Card validated");
    }

    process() {
        this.#validateCard();

        console.log("Payment completed");
    }
}

const payment = new Payment();

payment.process();

/*
Card validated
Payment completed
*/


// ====================================
// 11. INHERITANCE
// ====================================

class Employee {
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

class Developer extends Employee {
}

const developer = new Developer("John");

developer.work();

/*
John is working
*/


// ====================================
// 12. SUPER() IN CONSTRUCTOR
// ====================================

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);

        this.model = model;
    }
}

const car = new Car("Toyota", "Camry");

console.log(car.brand);
console.log(car.model);

/*
Toyota
Camry
*/


// ====================================
// 13. MUST CALL SUPER FIRST
// ====================================

class Animal {
    constructor(name) {
        this.name = name;
    }
}

/*
This would throw an error:

class Dog extends Animal {
  constructor(name) {
    this.name = name;

    super(name);
  }
}

Must call super()
before using this.
*/


// ====================================
// 14. METHOD OVERRIDING
// ====================================

class User {
    login() {
        console.log("User login");
    }
}

class Admin extends User {
    login() {
        console.log("Admin login");
    }
}

const admin = new Admin();

admin.login();

/*
Admin login
*/


// ====================================
// 15. CALL PARENT METHOD
// ====================================

class Person {
    greet() {
        console.log("Hello");
    }
}

class Manager extends Person {
    greet() {
        super.greet();

        console.log("I am a manager");
    }
}

const manager = new Manager();

manager.greet();

/*
Hello
I am a manager
*/


// ====================================
// 16. DEFAULT CONSTRUCTOR
// ====================================

class Device {
    constructor(name) {
        this.name = name;
    }
}

class Tablet extends Device {
}

const tablet = new Tablet("iPad");

console.log(tablet.name);

/*
iPad
*/


// JavaScript automatically creates:

/*
class Tablet extends Device {
  constructor(...args) {
    super(...args);
  }
}
*/


// ====================================
// 17. instanceof
// ====================================

console.log(
    developer instanceof Developer
);

console.log(
    developer instanceof Employee
);

/*
true
true
*/


// ====================================
// 18. COMPLETE EXAMPLE
// ====================================

class ProductCatalog {
    static category = "Electronics";

    #stock;

    constructor(name, stock) {
        this.name = name;
        this.#stock = stock;
    }

    sell(quantity) {
        this.#stock -= quantity;
    }

    showStock() {
        console.log(
            `${this.name}: ${this.#stock} units`
        );
    }

    static showCategory() {
        console.log(this.category);
    }
}

const monitor = new ProductCatalog(
    "Monitor",
    50
);

monitor.sell(5);

monitor.showStock();

ProductCatalog.showCategory();

/*
Monitor: 45 units
Electronics
*/
