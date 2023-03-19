import express from "express";
import bodyParser from "body-parser";
// import { getDate } from "./date.js";
// import { date } from "./date.js";
import date, { a, getDate } from "./date.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", function (req, res) {
  res.render("list", {
    listTitle: date.getDate(),
    items: items,
    action: req.url,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (item) items.push(req.body.newItem);
  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("list", {
    listTitle: "Work List",
    items: workItems,
    action: req.url,
  });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  if (item) workItems.push(req.body.newItem);
  res.redirect("/work");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server is running on 3000");
});
