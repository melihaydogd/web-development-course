let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 3) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

p
    .then((message) => {
        console.log("This is in then " + message);
        return "hello";
    })
    .then((message) => {
        console.log("This is second then " + message);
        return "world";
    })
    .catch((error) => {
        console.log("This is in catch " + error);
        // return "catch";
        throw "err";
    })
    // .then((message) => {
    //     console.log("This is final then " + message);
    // },
    // (error) => {
    //     console.log("This is error fallback " + error);
    // })
    .then((message) => {
        console.log("This is final then " + message);
    }).catch((error) => {
        console.log("This is error fallback " + error);
    });
// commented part and later are the same.


// Promise.resolve().then(v => {
//     // code
// })

// Creation of promise happens on main thread.

console.log(p);