const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    console.log("my own middleware is running");
    console.log("req.cookies.accept ", typeof req.cookies.accept);
    if (req.cookies.accept || req.url == "/cookie") {
        // console.log("inside my middelware");
        next();
    } else {
        console.log("inside my middelware");

        res.cookie("url", req.url);
        res.redirect("/cookie");
    }
});
app.use("/connectfour", (req, res, next) => {
    var creds = basicAuth(req);
    if (!creds || creds.name != "ahmad" || creds.pass != "connect4") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
});

app.use(express.static(`${__dirname}/projects`));

app.get("/cookie", (req, res) => {
    if (req.cookies.accept) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/cookie", (req, res) => {
    console.log("req.body", req.body);
    if (req.body.input == "accept") {
        res.cookie("accept", true);
        let redirectionLink = req.cookies.url || "/";
        console.log("redirectionLink", redirectionLink);
        res.redirect(redirectionLink);
    } else {
        res.send(`You should accept to see the content`);
    }
});

app.listen(8080, () => console.log("express listinig on port 8080"));
