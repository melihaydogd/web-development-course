// export { getDate };
// export { getDate as date };
// export default { a: getDate, b: getDay };
// Without default, you should use exported values directly in main file.
// Without default, import { getDate } from "./date.js";
// With default, import date from "./date.js";

// commonjs
// const date = require(__dirname + "/date.js");
// module.exports = getDate;
// module.exports = { d: getDate, a: getDay };

export default { b: getDate, getDate, getDay };
export { getDate as a, getDay, getDate };
// can use both at the same time

// a(), getDate(), date.b(), date.getDate() all gives the same output

const dateOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

const dayOptions = {
  weekday: "long",
};

function getDate() {
  return new Date().toLocaleDateString("en-US", dateOptions);
}

function getDay() {
  return new Date().toLocaleDateString("en-US", dayOptions);
}
