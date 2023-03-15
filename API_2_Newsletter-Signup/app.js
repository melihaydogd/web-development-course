import express from "express";
import bodyParser from "body-parser";
import https from "https";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

const listId = "94357f7d8e";
const dataCenter = "us11";
const apiKey = `42f2cd3903867f671a67050f9468f2b0-${dataCenter}`;
const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}`;
// Authorization Header
// const auth =
// 	"Basic " + new Buffer.from("anything:" + apiKey).toString("base64");

app.get("/", function (req, res) {
	res.sendFile("signup.html", { root: "." });
});

app.post("/", function (req, res) {
	const data = {
		members: [
			{
				email_address: req.body.email,
				status: "subscribed",
				merge_fields: {
					FNAME: req.body.firstName,
					LNAME: req.body.lastName,
				},
			},
		],
	};
	const jsonData = JSON.stringify(data);
	const options = {
		method: "POST",
		auth: `melih:${apiKey}`,
	};
	const request = https.request(url, options, function (response) {
		response.on("data", function (data) {
			var data = JSON.parse(data);
			console.log(data);
			if (data.error_count === 0) {
				res.sendFile("success.html", { root: "." });
			} else {
				res.sendFile("failure.html", { root: "." });
			}
		});
	});
	request.write(jsonData);
	request.end();
});

app.post("/back", function (req, res) {
	res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
	console.log("Server is running on 3000");
});
