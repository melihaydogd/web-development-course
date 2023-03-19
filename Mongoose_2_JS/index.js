import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/fruitsDB?authSource=admin", {user: "root", pass: "example"});

const fruitSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: [true, "Enter name"]
    },
    rating: {
        type: Number,
        min: [1, "Rating should be bigger than 1"],
        max: [10, "Rating should be smaller than 10"],
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

pineapple.save();

const person = new Person({
    name: "Jim",
    age: 37,
    favouriteFruit: pineapple
});

// person.save();

const fruit1 = new Fruit({
    rating: 15,
    review: "Pretty solid as a fruit."
});

fruit1.save().then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error.message);
});

// try {
//     await fruit1.save();
// } catch (error) {
//     let errors = {};

//     Object.keys(error.errors).forEach((key) => {
//         errors[key] = error.errors[key].message;
//     });

//     console.log(errors);
// }

// const fruit2 = new Fruit({
//     name: "Kiwi",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// const fruit3 = new Fruit({
//     name: "Orange",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// const fruit4 = new Fruit({
//     name: "Banana",
//     rating: 7,
//     review: "Pretty solid as a fruit."
// });

// fruit.save();
// Fruit.insertMany([fruit1,fruit2,fruit3,fruit4])

// Promise.resolve(Fruit.find({})).then(function (fruits, err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(fruits);
//     }
// });

// console.log(await Fruit.find({}));
// console.log(await Fruit.find({}).exec());

// Fruit.find({}).then(function (fruits, err) {
//     if (err) {
//         console.log(err);
//     } else {
//         mongoose.connection.close()
//         fruits.forEach(function (fruit) {
//             console.log(fruit.name);
//         })
//     }
// })