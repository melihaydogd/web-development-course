import express from "express";
import https from "https";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const baseApiUrl = "https://api.openweathermap.org";
const baseIconUrl = "http://openweathermap.org";

const url = new URL("/data/2.5/weather", baseApiUrl);
url.searchParams.append("appid", "b889284d94e22bf9beeac94660a90364");
url.searchParams.append("units", "metric");

const apiUrl = (city) => {
	let u = new URL(url.href);
	u.searchParams.append("q", city);
	return u.href;
};

const iconUrl = (imageName) =>
	new URL(`/img/wn/${imageName}@2x.png`, baseIconUrl).href;

app.get("/", function (req, res) {
	res.sendFile("index.html", { root: "." });
});

app.post("/", function (req, res) {
	https.get(apiUrl(req.body.cityName), function (response) {
		response.on("data", function (data) {
			const weatherData = JSON.parse(data);
			res.write(`<h1>The degree is ${weatherData.main.temp}</h1>`);
			res.write(
				`<h1>The weather description is ${weatherData.weather[0].description}</h1>`
			);
			res.write(
				`<img src='${iconUrl(
					weatherData.weather[0].icon
				)}' alt='weatherIcon'>`
			);
			res.send();
		});
	});
});

app.listen(3000, function () {
	console.log("Server is running on 3000");
});
