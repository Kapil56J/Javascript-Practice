// Promises: A Promise in JavaScript is an object that represents the eventual completion (or failure)
//  of an asynchronous operation. It is used to handle asynchronous tasks like fetching data, reading files, or calling APIs without blocking the execution flow.

// Key Terms in Promises
// Promise States:

// Pending: Initial state, before the promise is resolved or rejected.
// Fulfilled: The operation is successful, and the .then() method is called.
// Rejected: The operation failed, and the .catch() method is called.

// Methods Used:

// .then(callback): Runs when the promise is resolved (fulfilled).
// .catch(callback): Runs when the promise is rejected (failed).
// .finally(callback): Runs regardless of whether the promise was fulfilled or rejected.


// function getUserData(userId) {
//     return new Promise((resolve, reject) => {
//         console.log('Fetching first user data');

//         setTimeout(() => {
//             const users = {1:'Kapil', 2:'Jagga', 3:'Maroti'};
//             if (users[userId]) {
//                 resolve(`First user name is : ${users[userId]}`);
//             } else {
//                 reject(`User not found`)
//             }
//         }, [2000])
//     })
// };

// getUserData(4).
// then(success => console.log('Success', success)).catch(error => console.log('error:', error)).finally(() => console.log('Execution is finished==========='));

// Callback hell
// Before Promises, JavaScript developers relied on callbacks for handling asynchronous tasks. 
// When multiple asynchronous functions depend on each other, callbacks get deeply nested, making the code difficult to read and maintain. This is called Callback Hell (Pyramid of Doom).

// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log("Fetched user details");
//         callback({ id: id, name: "Anu" });
//     }, 1000);
// }

// function getOrders(user, callback) {
//     setTimeout(() => {
//         console.log(`Fetched orders for ${user.name}`);
//         callback(["Order 1", "Order 2", "Order 3"]);
//     }, 1000);
// }

// function getOrderDetails(order, callback) {
//     setTimeout(() => {
//         console.log(`Details for ${order}`);
//         callback({ order: order, price: 500 });
//     }, 1000);
// }

// // Nested callbacks = Callback Hell
// getUser(1, (user) => {
//     getOrders(user, (orders) => {
//         getOrderDetails(orders[0], (details) => {
//             console.log("Order Details:", details);
//         });
//     });
// });

// Above example using Promise
function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched user details");
            resolve({ id: id, name: "Anu" });
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched orders for ${user.name}`);
            resolve(["Order 1", "Order 2", "Order 3"]);
        }, 1000);
    });
}

function getOrderDetails(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Details for ${order}`);
            resolve({ order: order, price: 500 });
        }, 1000);
    });
}
getUser(1)
    .then((user) => getOrders(user))
    .then((orders) => getOrderDetails(orders[0]))
    .then((details) => console.log("Order Details:", details))
    .catch((error) => console.log("Error:", error))
    .finally(() => console.log("Process Completed"));

//  async/await is often preferred when you want to handle asynchronous operations in a more synchronous and cleaner manner than promise.

async function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched user details");
            resolve({ id: id, name: "Anu" });
        }, 1000);
    });
}

async function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched orders for ${user.name}`);
            resolve(["Order 1", "Order 2", "Order 3"]);
        }, 1000);
    });
}

async function getOrderDetails(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Details for ${order}`);
            resolve({ order: order, price: 500 });
        }, 1000);
    });
}

// Using async/await to make it more readable
async function getOrderDetailsForUser(id) {
    try {
        const user = await getUser(id);
        const orders = await getOrders(user);
        const details = await getOrderDetails(orders[0]);
        console.log("Order Details:", details);
    } catch (error) {
        console.error("Error:", error);
    }
}

getOrderDetailsForUser(1);
