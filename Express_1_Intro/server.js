import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile("index.html", { root: "." });
});

app.post("/", function (req, res) {
	res.send("Result: " + (Number(req.body.num1) + Number(req.body.num2)));
});

app.get("/bmicalculator", function (req, res) {
	res.sendFile("bmiCalculator.html", { root: "." });
});

app.post("/bmicalculator", function (req, res) {
	var bmi = Math.floor(Number(req.body.weight) / Number(req.body.height) ** 2);
	res.send("Your BMI " + bmi);
});

// app.get("/contact", function (req, res) {
// 	res.send("contact me");
// });

// app.get("/about", function (req, res) {
// 	res.send("about me");
// });

// app.get("/hobbies", function (req, res) {
// 	res.send("hobbies of me");
// });

app.listen(3000, function () {
	console.log("Server started on port 3000");
});
