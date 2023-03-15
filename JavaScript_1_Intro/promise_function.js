console.log("start");

// If promise is returned, there is no need to add async.
const handler = async () => {
    console.log("in handler");
    return new Promise((resolve, reject) => {
        console.log("in promise");
        resolve("Success")
    }).then((message) => {
        console.log(message);
        return "hello";
    });
}

console.log("1");

const test = async () => {
    console.log("in test");
    var a = await handler(); // It only awaits callback of promise.
    console.log(a);
}

console.log("2");

test();

console.log("here");