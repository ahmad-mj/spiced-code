const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projJson = require("./projectsData.json");
const fs = require("fs");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("projects"));

let projectsArr = [];
fs.readdir(__dirname + "/projects", { withFileTypes: true }, (err, data) => {
    if (err) {
        console.log("err: ", err);
    } else {
        for (let i = 0; i < data.length; i++) {
            projectsArr.push(data[i].name);
        }
    }
});

app.get("/", (req, res) => {
    res.render("welcomePage", {
        layout: "main",
        projects: projectsArr,
    });
});
// app.get("/about", (req, res) => {
//     res.render("about", {
//         layout: "main",
//         emojis: ["🐷", "🐹", "🐸", "🐢"],
//     });
// });

app.listen(8080, () => console.log("port 8080 listining....."));
