// async functions returns Promise<String>
// await can be put before Promise.
const handler = async () => {
    return "hello world";
}

// await can only be used in async functions.
// Promise callbacks run before timer.
const test = async () => {
    var a = await handler();
    console.log(a);
}

test();

setTimeout(() => {
    console.log('Timed out!');
}, 0);


console.log("here");
