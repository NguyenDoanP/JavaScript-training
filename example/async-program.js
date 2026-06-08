// ====================================
// 1. CALLBACK BASICS
// ====================================

function processOrder(callback) {
    console.log("Processing order...");

    callback();
}

processOrder(() => {
    console.log("Order completed");
});

/*
Processing order...
Order completed
*/


// ====================================
// 2. CALLBACK WITH DATA
// ====================================

function getProduct(callback) {
    const product = {
        id: 1,
        name: "Laptop"
    };

    callback(product);
}

getProduct((product) => {
    console.log(product);
});

/*
{ id: 1, name: 'Laptop' }
*/


// ====================================
// 3. CALLBACK WITH ERROR
// ====================================

function fetchUser(callback) {
    const success = false;

    if (success) {
        callback(null, {
            id: 1,
            name: "Alice"
        });
    } else {
        callback("Failed to fetch user", null);
    }
}

fetchUser((error, user) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(user);
});

/*
Failed to fetch user
*/


// ====================================
// 4. CALLBACK HELL
// ====================================

function login(callback) {
    setTimeout(() => {
        console.log("User logged in");
        callback();
    }, 1000);
}

function getProfile(callback) {
    setTimeout(() => {
        console.log("Profile loaded");
        callback();
    }, 1000);
}

function getOrders(callback) {
    setTimeout(() => {
        console.log("Orders loaded");
        callback();
    }, 1000);
}

login(() => {
    getProfile(() => {
        getOrders(() => {
            console.log("All data loaded");
        });
    });
});

/*
Hard to read when nesting grows.
This is callback hell.
*/


// ====================================
// 5. BASIC PROMISE
// ====================================

const orderPromise = new Promise(
    (resolve, reject) => {
        const success = true;

        if (success) {
            resolve("Order completed");
        } else {
            reject("Order failed");
        }
    }
);

orderPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


// ====================================
// 6. PROMISE WITH setTimeout
// ====================================

function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "Laptop",
                "Phone",
                "Tablet"
            ]);
        }, 2000);
    });
}

fetchProducts()
    .then((products) => {
        console.log(products);
    });


// ====================================
// 7. PROMISE CHAINING
// ====================================

function loginUser() {
    return Promise.resolve({
        id: 1,
        name: "Alice"
    });
}

function getUserOrders(userId) {
    return Promise.resolve([
        "Order 1",
        "Order 2"
    ]);
}

loginUser()
    .then((user) => {
        console.log(user);

        return getUserOrders(user.id);
    })
    .then((orders) => {
        console.log(orders);
    })
    .catch((error) => {
        console.log(error);
    });

/*
Each .then() returns a new Promise.
*/


// ====================================
// 8. REJECTION
// ====================================

Promise.reject(
    new Error("Something went wrong")
)
    .catch((error) => {
        console.log(error.message);
    });


// ====================================
// 9. CATCH AT END OF CHAIN
// ====================================

Promise.resolve(100)
    .then((value) => {
        return value * 2;
    })
    .then(() => {
        throw new Error("Unexpected error");
    })
    .then(() => {
        console.log("Never runs");
    })
    .catch((error) => {
        console.log(error.message);
    });

/*
Unexpected error
*/


// ====================================
// 10. ASYNC FUNCTION
// ====================================

async function getMessage() {
    return "Hello";
}

getMessage()
    .then((message) => {
        console.log(message);
    });

/*
async always returns a Promise
*/


// ====================================
// 11. AWAIT
// ====================================

function fetchProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Laptop");
        }, 2000);
    });
}

async function showProduct() {
    console.log("Loading...");

    const product =
        await fetchProduct();

    console.log(product);
}

showProduct();


// ====================================
// 12. ASYNC / AWAIT
// ====================================

function fetchUserData() {
    return Promise.resolve({
        id: 1,
        name: "Alice"
    });
}

async function loadUser() {
    const user =
        await fetchUserData();

    console.log(user);
}

loadUser();


// ====================================
// 13. TRY / CATCH
// ====================================

function fetchOrders() {
    return Promise.reject(
        new Error("Failed to load orders")
    );
}

async function loadOrders() {
    try {
        const orders =
            await fetchOrders();

        console.log(orders);
    } catch (error) {
        console.log(error.message);
    }
}

loadOrders();

/*
Failed to load orders
*/


// ====================================
// 14. MULTIPLE AWAIT
// ====================================

function getCustomer() {
    return Promise.resolve("Customer");
}

function getCart() {
    return Promise.resolve("Cart");
}

async function loadPage() {
    const customer =
        await getCustomer();

    const cart =
        await getCart();

    console.log(customer);
    console.log(cart);
}

loadPage();

/*
Works but runs sequentially.
*/


// ====================================
// 15. PROMISE.ALL
// ====================================

async function loadPageFast() {
    const [customer, cart] =
        await Promise.all([
            getCustomer(),
            getCart()
        ]);

    console.log(customer);
    console.log(cart);
}

loadPageFast();

/*
Runs both tasks in parallel.
Faster than sequential awaits.
*/


// ====================================
// 16. PROMISE.ALL EXAMPLE
// ====================================

const productPromise =
    Promise.resolve("Laptop");

const userPromise =
    Promise.resolve("Alice");

const orderPromise2 =
    Promise.resolve("Order #1001");

Promise.all([
    productPromise,
    userPromise,
    orderPromise2
])
    .then((results) => {
        console.log(results);
    });

/*
[
  'Laptop',
  'Alice',
  'Order #1001'
]
*/


// ====================================
// 17. PROMISE.ALL REJECTION
// ====================================

Promise.all([
    Promise.resolve("Success"),
    Promise.reject(
        new Error("Failed")
    )
])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error.message);
    });

/*
Failed
*/
