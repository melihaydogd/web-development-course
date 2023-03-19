//jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";

const app = express();

app.set("view engine", "ejs");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.static("public"));
app.use(function (req, res, next) {
    res.header("Content-Type",'application/json');
    next();
});

mongoose.connect("mongodb://localhost:27017/wikiDB?authSource=admin", {user: "root", pass: "example"});

const articleSchema = {
    title: String,
    content: String,
};

const Article = mongoose.model("Article", articleSchema);

/////////////////////////All Articles///////////////////////////////////

app.route("/articles")

    .get(function (req, res) {
        Article.find().then((function (articles) {
            if (articles) {
                const jsonArticles = JSON.stringify(articles);
                res.send(jsonArticles);
            } else {
                res.send("No articles currently in wikiDB.");
            }
        })).catch((error) => {
            console.log(error.message);
        });
    })

    .post(function (req, res) {
        const newArticle = Article({
            title: req.body.title,
            content: req.body.content,
        });

        newArticle.save().then(function (result) {
            res.send(result);
        }).catch((error) => {
            console.log(error.message);
        });
    })

    .delete(function (req, res) {
        Article.deleteMany().then(function (result) {
            res.send(result);
        }).catch((error) => {
            console.log(error.message);
        });
    });

/////////////////////////Individual Articles///////////////////////////////////

app.route("/articles/:articleTitle")

    .get(function (req, res) {
        const articleTitle = req.params.articleTitle;
        
        Article.findOne({ title: articleTitle }).then(function (article) {
            if (article) {
                const jsonArticle = JSON.stringify(article);
                res.send(jsonArticle);
            } else {
                res.send("No article with that title found.");
            }
        }).catch((error) => {
            console.log(error.message);
        });
    })

    .patch(function (req, res) {
        const articleTitle = req.params.articleTitle;

        Article.findOneAndUpdate(
            { title: articleTitle },
            { content: req.body.newContent })
            .then(function (result) {
                res.send(result);
            }).catch((error) => {
                console.log(error.message);
            });
    })

    .put(function (req, res) {
        const articleTitle = req.params.articleTitle;

        Article.findOneAndUpdate(
            { title: articleTitle },
            { content: req.body.newContent },
            { overwrite: true })
            .then(function (result) {
                res.send(result);
            }).catch((error) => {
                console.log(error.message);
            });
    })

    .delete(function (req, res) {
        const articleTitle = req.params.articleTitle;

        Article.findOneAndDelete({ title: articleTitle })
        .then(function (result) {
            res.send(result);
        }).catch((error) => {
            console.log(error.message);
        });
    });

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
