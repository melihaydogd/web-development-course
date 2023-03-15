// export { getDate };
// export { getDate as date };
// export default { a: getDate, b: getDay };
// Without default, you should use exported values directly in main file.

// commonjs
// const date = require(__dirname + "/date.js");
// module.exports = getDate;
// module.exports = { d: getDate, a: getDay };

export default { getDate, getDay };

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
