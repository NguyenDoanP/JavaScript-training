// ====================================
// 1. SYNCHRONOUS CODE ONLY
// ====================================

console.log("A");
console.log("B");
console.log("C");

/*
Output:

A
B
C
*/


// ====================================
// 2. SIMPLE MACROTASK
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
// 3. SIMPLE MICROTASK
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
// 4. MICROTASK VS MACROTASK
// ====================================

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

/*
Output:

A
D
C
B
*/


// ====================================
// 5. queueMicrotask()
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
// 6. queueMicrotask VS setTimeout
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
// 7. Promise.then VS setTimeout
// ====================================

console.log("Start");

setTimeout(() => {
    console.log("Macrotask");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask");
});

console.log("End");

/*
Output:

Start
End
Microtask
Macrotask
*/


// ====================================
// 8. Promise.then VS queueMicrotask
// ====================================

console.log("Start");

queueMicrotask(() => {
    console.log("queueMicrotask");
});

Promise.resolve().then(() => {
    console.log("Promise.then");
});

console.log("End");

/*
Output:

Start
End
queueMicrotask
Promise.then

Both are microtasks.

Executed in scheduling order.
*/


// ====================================
// 9. MULTIPLE MICROTASKS
// ====================================

console.log("Start");

Promise.resolve().then(() => {
    console.log("Microtask 1");
});

queueMicrotask(() => {
    console.log("Microtask 2");
});

Promise.resolve().then(() => {
    console.log("Microtask 3");
});

console.log("End");

/*
Output:

Start
End
Microtask 1
Microtask 2
Microtask 3
*/


// ====================================
// 10. MULTIPLE MACROTASKS
// ====================================

console.log("Start");

setTimeout(() => {
    console.log("Timer 1");
}, 0);

setTimeout(() => {
    console.log("Timer 2");
}, 0);

setTimeout(() => {
    console.log("Timer 3");
}, 0);

console.log("End");

/*
Output:

Start
End
Timer 1
Timer 2
Timer 3
*/


// ====================================
// 11. MICROTASK INSIDE MICROTASK
// ====================================

Promise.resolve().then(() => {
    console.log("Microtask 1");

    Promise.resolve().then(() => {
        console.log("Microtask 2");
    });
});

/*
Output:

Microtask 1
Microtask 2

All microtasks finish before
moving to any macrotask.
*/


// ====================================
// 12. MICROTASK INSIDE MACROTASK
// ====================================

setTimeout(() => {
    console.log("Timer");

    Promise.resolve().then(() => {
        console.log("Promise");
    });
}, 0);

/*
Output:

Timer
Promise
*/


// ====================================
// 13. MACROTASK INSIDE MICROTASK
// ====================================

Promise.resolve().then(() => {
    console.log("Promise");

    setTimeout(() => {
        console.log("Timer");
    }, 0);
});

/*
Output:

Promise
Timer
*/


// ====================================
// 14. PRIORITY DEMONSTRATION
// ====================================

console.log("Script start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

queueMicrotask(() => {
    console.log("queueMicrotask");
});

Promise.resolve().then(() => {
    console.log("Promise.then");
});

console.log("Script end");

/*
Output:

Script start
Script end
queueMicrotask
Promise.then
setTimeout
*/


// ====================================
// 15. MICROTASK QUEUE MUST BE EMPTY
// ====================================

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");

    Promise.resolve().then(() => {
        console.log("Promise 2");
    });
});

Promise.resolve().then(() => {
    console.log("Promise 3");
});

/*
Output:

Promise 1
Promise 3
Promise 2
Timer

All microtasks finish first.
*/


// ====================================
// 16. ASYNC/AWAIT USES MICROTASKS
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
// 17. REAL INTERVIEW QUESTION
// ====================================

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

queueMicrotask(() => {
    console.log("4");
});

console.log("5");

/*
Output:

1
5
3
4
2
*/


// ====================================
// 18. EXECUTION PRIORITY RULE
// ====================================

console.log("Sync Code");

Promise.resolve().then(() => {
    console.log("Microtask");
});

setTimeout(() => {
    console.log("Macrotask");
}, 0);

/*
Execution order:

1. Synchronous Code
2. Microtasks
3. Macrotasks

Output:

Sync Code
Microtask
Macrotask
*/
