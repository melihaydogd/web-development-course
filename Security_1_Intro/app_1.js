//jshint esversion:6

// Plain username and password
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

mongoose.connect("mongodb://localhost:27017/userDB?authSource=admin", {
    user: "root",
    pass: "example",
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.post("/register", function (req, res) {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password,
    });
    newUser
        .save()
        .then((result) => {
            res.render("secrets");
        })
        .catch((error) => {
            console.log(error.message);
            res.redirect("/register");
        });
});
app.post("/login", function (req, res) {
    User.findOne({ email: req.body.username })
        .then((user) => {
            if (user) {
                if (user.password === req.body.password) {
                    res.render("secrets");
                } else {
					res.redirect("/login")
				}
            }
        })
        .catch((error) => {
            console.log(error.message);
            res.redirect("/register");
        });
});

app.get("/logout", function(req, res){
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
