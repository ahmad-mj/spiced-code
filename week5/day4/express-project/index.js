const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    // console.log("my own middleware is running");
    // console.log("req.cookies.accept ", typeof req.cookies.accept);
    if (req.cookies.accept || req.url == "/cookie") {
        // console.log("inside my middelware");
        next();
    } else {
        // console.log("inside my middelware");

        res.cookie("url", req.url);
        res.redirect("/cookie");
    }
});
app.use("/spotify", (req, res, next) => {
    const creds = basicAuth(req);
    console.log("creds", creds);
    if (!creds || creds.name != "ahmad" || creds.pass != "password") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
});

// app.use(express.static(`${__dirname}/projects`));
app.use(express.static(__dirname + `/projects`));

app.get("/cookie", (req, res) => {
    if (req.cookies.accept) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});
app.get("/", (req, res) => {
    // console.log("sending you to home page");
    res.send("Welcome to Express project you can surf now :)");
});

app.post("/cookie", (req, res) => {
    // console.log("req.body", req.body);
    if (req.body.input == "accept") {
        res.cookie("accept", true);
        const redirecting = req.cookies.url || "/";
        res.redirect(redirecting);
    } else {
        res.send("Please accept to continue");
    }
});

app.listen(8080, () => console.log("express listinig on port 8080"));
