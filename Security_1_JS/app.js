//jshint esversion:6

// google oauth 2.0
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import findOrCreate from "mongoose-findorcreate";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(
    session({
        secret: "Our little secret.",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB?authSource=admin", {
    user: "root",
    pass: "example",
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String
});
userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
        .then((user) => {
            done(undefined, user);
        })
        .catch((err) => {
            done(err, undefined);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/google/secrets",
            userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
        },
        async function (accessToken, refreshToken, profile, done) {
            try {
                console.log(profile);
                // Find or create user in your database
                let user = await User.findOne({ googleId: profile.id });
                if (!user) {
                    // Create new user in database
                    const username =
                        Array.isArray(profile.emails) &&
                        profile.emails.length > 0
                            ? profile.emails[0].value.split("@")[0]
                            : "";
                    const newUser = new User({
                        username: profile.displayName,
                        googleId: profile.id,
                    });
                    user = await newUser.save();
                }
                return done(null, user);
            } catch (err) {
                return done(err);
            }
        }
    )
);

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);

app.get(
    "/auth/google/secrets",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res) {
        res.redirect("/secrets");
    }
);

app.get("/submit", function (req, res) {
    if (req.isAuthenticated()) {
        res.render("submit");
    } else {
        res.redirect("/login");
    }
});

app.post("/register", function (req, res) {
    User.register(
        { username: req.body.username },
        req.body.password,
        function (err, user) {
            if (err) {
                console.log(err);
                res.redirect("/register");
            } else {
                // passport.authenticate("local")(req, res, function () {
                //     res.redirect("/secrets");
                // });
                req.login(user, function (err) {
                    if (err) {
                        console.log(err);
                        res.redirect("/register");
                    }
                    res.redirect("/secrets");
                });
            }
        }
    );
});

app.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    function (req, res) {
        res.redirect("/secrets");
    }
);

app.post("/submit", function (req, res) {
    const submittedSecret = req.body.secret;

    //Once the user is authenticated and their session gets saved, their user details are saved to req.user.
    // console.log(req.user.id);

    User.findById(req.user.id)
        .then(function (foundUser) {
            if (foundUser) {
                foundUser.secret = submittedSecret;
                foundUser.save().then(function () {
                    res.redirect("/secrets");
                });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
});

app.get("/secrets", function (req, res) {
    User.find({ secret: { $ne: null } })
        .then(function (foundUsers) {
            if (foundUsers) {
                res.render("secrets-inc", { usersWithSecrets: foundUsers });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
});

app.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) {
            console.log(err);
        }
    });
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
