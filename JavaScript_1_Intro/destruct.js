const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingReq: {
      food: 2,
      water: 3,
      brand: ["good", "bad"],
    },
  },
  {
    name: "dog",
    sound: "hav",
  },
];

const [cat, dog] = animals;
console.log(cat);

// const { name, sound } = cat;
// const { name: catName, sound: catSound } = cat;
// const { name: catName, sound: catSound, kind: catKind = "Fluff" } = cat;
const {
  name: catName,
  sound: catSound,
  feedingReq: {
    food: catFood,
    water,
    brand: [goodBrand],
  },
} = cat;
console.log(goodBrand);
