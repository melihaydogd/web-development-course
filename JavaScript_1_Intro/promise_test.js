// Executes synchronously

async function test () {
    console.log("function");
    let a = await p;
    console.log("a variable " + a);
}

let p = new Promise((resolve, reject) => {
    console.log("first");
    console.log("second");
    resolve("Success");
}).then((message) => {
    console.log(message);
    return "return value";
})

test();

console.log("here");