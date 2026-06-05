// ==========================================
// 1. OBJECT LITERAL
// ==========================================

const user = {
    name: "An",
    age: 20,

    sayHello() {
        console.log(`Hello ${this.name}`);
    },
};

console.log("User:", user);

// ==========================================
// 2. ACCESS PROPERTIES
// ==========================================

console.log("\n=== ACCESS PROPERTIES ===");

console.log(user.name); // Dot notation
console.log(user["age"]); // Bracket notation

const key = "name";
console.log(user[key]);

// ==========================================
// 3. MODIFY PROPERTIES
// ==========================================

console.log("\n=== MODIFY PROPERTIES ===");

user.age = 21;
user.country = "Vietnam";

console.log(user);

// ==========================================
// 4. DELETE PROPERTY
// ==========================================

console.log("\n=== DELETE PROPERTY ===");

delete user.country;

console.log(user);

// ==========================================
// 5. METHODS & THIS
// ==========================================

console.log("\n=== METHODS & THIS ===");

user.sayHello();

// ==========================================
// 6. CONST OBJECT
// ==========================================

console.log("\n=== CONST OBJECT ===");

const student = {
    name: "Binh",
};

student.name = "Cuong";

console.log(student);

// student = {}; // TypeError

// ==========================================
// 7. OBJECT COMPARISON
// ==========================================

console.log("\n=== OBJECT COMPARISON ===");

const a = {
    name: "An",
};

const b = {
    name: "An",
};

console.log(a == b);
console.log(a === b);

// ==========================================
// 8. REFERENCE
// ==========================================

console.log("\n=== REFERENCE ===");

const c = {
    name: "John",
};

const d = c;

console.log(c === d);

d.name = "David";

console.log(c);
console.log(d);

// ==========================================
// 9. NEW OBJECT()
// ==========================================

console.log("\n=== NEW OBJECT() ===");

const person = new Object();

person.name = "Peter";
person.age = 30;

console.log(person);

// ==========================================
// 10. CONSTRUCTOR FUNCTION
// ==========================================

console.log("\n=== CONSTRUCTOR FUNCTION ===");

function User(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User("An", 20);
const user2 = new User("Binh", 22);

console.log(user1);
console.log(user2);

// ==========================================
// 11. OBJECT.CREATE()
// ==========================================

console.log("\n=== OBJECT.CREATE() ===");

const animal = {
    speak() {
        console.log("Animal speaks");
    },
};

const dog = Object.create(animal);

dog.name = "Milo";

console.log(dog.name);

dog.speak();

// ==========================================
// 12. CHECK PROPERTY
// ==========================================

console.log("\n=== CHECK PROPERTY ===");

console.log("name" in dog);
console.log("age" in dog);
