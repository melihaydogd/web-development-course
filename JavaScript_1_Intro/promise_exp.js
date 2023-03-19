Promise.resolve(Fruit.find({})).then(function (fruits, err) {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits);
    }
});

console.log(await Fruit.find({}));

Fruit.find({}).then(function (fruits) {
    console.log(fruits);
})

// Three of them returns same output. await blocks and waits for result.

// Fruit.find({}) is a Mongoose query and is not a fully-fledged promise but it does have a .then().
// Fruit.find({}).exec() is a fully-fledged promise.
// await can be put before promises.
// promises have .then() functions.