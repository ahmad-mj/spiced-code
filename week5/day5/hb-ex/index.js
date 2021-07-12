const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projects = require("./projectsData.json");
// const jsdom = require("jsdom");
// const dom = new jsdom.JSDOM("");
// const $ = require("jquery")(dom.window);

// $(".nav_title").on("click", (e) => {
//     console.log("clicking is working");
//     $(e.target).addClass("active");
//     console.log(e.target);
// });

// const fs = require("fs");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));

app.use(express.static("./puplic"));

///////////////////////////////vs1///////////////////////////////////////
// let projectsArr = [];
// fs.readdir(__dirname + "/projects", { withFileTypes: true }, (err, data) => {
//     if (err) {
//         console.log("err: ", err);
//     } else {
//         for (let i = 0; i < data.length; i++) {
//             projectsArr.push(data[i].name);
//         }
//     }
// });
// app.get("/", (req, res) => {
//     res.render("welcomePage", {
//         layout: "main",
//         // projects: projectsArr,
//
//     });
// });
///////////////////////////////vs2///////////////////////////////////////

app.get("/", (req, res) => {
    res.render("welcomePage", {
        layout: "main",
        projects,
    });
});

app.get("/project/:project", (req, res) => {
    const searchedProject = req.params.project;
    const selectedProject = projects.find(
        (item) => item.directory === searchedProject
    );
    console.log("selectedProject", selectedProject);
    if (!selectedProject) {
        return res.sendStatus(404);
    }
    res.render("descriptionPage", {
        layout: "main",
        projects,
        selectedProject,
    });
});

app.listen(8080, () => console.log("port 8080 listining....."));
