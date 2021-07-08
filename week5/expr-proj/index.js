const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const baicAuth = require("basic-auth");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    console.log("my own middleware is running");
    if (req.cookies.authenticated || req.url == "/cookie") {
        next();
    } else {
        res.cookie("url", req.url);
        res.redirect("/cookie");
    }
});

app.use(express.static("/projects"));

app.get("/cookie", (req, res) => {
    if (req.cookies.accept) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/cookie", (req, res) => {
    if (req.body.input == "accept") {
        res.cookie("accept");
        let redirectionLink = req.cookies.url || "/";
        res.redirect(redirectionLink);
    } else {
        res.send(`You should accept to see the content`);
    }
});

app.listen(8080, () => console.log("express listinig on port 8080"));
