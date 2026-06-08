// ====================================
// 1. CALL STACK BASICS
// ====================================

function third() {
    console.log("Third");
}

function second() {
    console.log("Second");
    third();
}

function first() {
    console.log("First");
    second();
}

first();

/*
Call Stack:

first()
second()
third()

Output:

First
Second
Third
*/


// ====================================
// 2. LIFO (LAST IN, FIRST OUT)
// ====================================

function taskA() {
    console.log("Task A Start");

    taskB();

    console.log("Task A End");
}

function taskB() {
    console.log("Task B");
}

taskA();

/*
Output:

Task A Start
Task B
Task A End
*/


// ====================================
// 3. SYNCHRONOUS EXECUTION
// ====================================

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

/*
Output:

Step 1
Step 2
Step 3
*/


// ====================================
// 4. SETTIMEOUT (MACROTASK)
// ====================================

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

/*
Output:

Start
End
Timeout
*/


// ====================================
// 5. PROMISE (MICROTASK)
// ====================================

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

/*
Output:

Start
End
Promise
*/


// ====================================
// 6. MICROTASK VS MACROTASK
// ====================================

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

/*
Output:

Start
End
Promise
Timeout

Microtasks run before macrotasks.
*/


// ====================================
// 7. MULTIPLE MICROTASKS
// ====================================

console.log("Start");

Promise.resolve().then(() => {
    console.log("Microtask 1");
});

Promise.resolve().then(() => {
    console.log("Microtask 2");
});

console.log("End");

/*
Output:

Start
End
Microtask 1
Microtask 2
*/


// ====================================
// 8. MULTIPLE MACROTASKS
// ====================================

console.log("Start");

setTimeout(() => {
    console.log("Timer 1");
}, 0);

setTimeout(() => {
    console.log("Timer 2");
}, 0);

console.log("End");

/*
Output:

Start
End
Timer 1
Timer 2
*/


// ====================================
// 9. MICROTASK INSIDE MACROTASK
// ====================================

console.log("Start");

setTimeout(() => {
    console.log("Timer");

    Promise.resolve().then(() => {
        console.log("Promise Inside Timer");
    });
}, 0);

console.log("End");

/*
Output:

Start
End
Timer
Promise Inside Timer
*/


// ====================================
// 10. MACROTASK INSIDE MICROTASK
// ====================================

console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");

    setTimeout(() => {
        console.log("Timer");
    }, 0);
});

console.log("End");

/*
Output:

Start
End
Promise
Timer
*/


// ====================================
// 11. queueMicrotask()
// ====================================

console.log("Start");

queueMicrotask(() => {
    console.log("Microtask");
});

console.log("End");

/*
Output:

Start
End
Microtask
*/


// ====================================
// 12. MICROTASK PRIORITY
// ====================================

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

queueMicrotask(() => {
    console.log("Microtask");
});

console.log("End");

/*
Output:

Start
End
Microtask
Timer
*/


// ====================================
// 13. ASYNC/AWAIT IS MICROTASK BASED
// ====================================

async function run() {
    console.log("Inside Async");

    await Promise.resolve();

    console.log("After Await");
}

console.log("Start");

run();

console.log("End");

/*
Output:

Start
Inside Async
End
After Await
*/


// ====================================
// 14. PROMISE CHAIN ORDER
// ====================================

Promise.resolve()
    .then(() => {
        console.log("Then 1");
    })
    .then(() => {
        console.log("Then 2");
    });

console.log("Sync");

/*
Output:

Sync
Then 1
Then 2
*/


// ====================================
// 15. BLOCKING THE MAIN THREAD
// ====================================

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

const startTime = Date.now();

while (Date.now() - startTime < 3000) {
    // Block thread for 3 seconds
}

console.log("Finished Blocking");

/*
Output:

Start

(wait 3 seconds)

Finished Blocking
Timer

Even though timer = 0ms,
it cannot run until
the Call Stack is empty.
*/


// ====================================
// 16. COMPLETE EVENT LOOP EXAMPLE
// ====================================

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

queueMicrotask(() => {
    console.log("Microtask");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");

/*
Output:

Start
End

Promise 1
Microtask
Promise 2

Timeout 1
Timeout 2
*/
