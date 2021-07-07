const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
    req.on("error", (err) => {
        console.log("err in request!", err);
    });
    res.on("error", (err) => {
        console.log("err in response!", err);
    });

    if (req.method !== "GET") {
        res.statusCode = 405;
        console.log("habibi Method is Not Allowed go look somewhere else😝");
        res.end();
    }
    const requiredPath = path.normalize(__dirname + "/projects" + req.url);

    if (requiredPath.startsWith(__dirname + "/projects")) {
        console.log("INTRUDER ALERT");
        res.statusCode = 403; // habibi das geht nicht haram!
        res.end();
    }
    fs.stat(requiredPath, (err, stats) => {
        if (err) {
            console.log("requested unvalid content", err);
            res.statusCode = 404;
            res.end();
        }
        if (stats.isDirectory()) {
            if(req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(`${requiredPath}index.html`);
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    res.statusCode = 500;
                    res.end();
                })
                else {
                    res.setHeader("Location", "/");
                     res.statusCode = 302;
                }
            } else {
                console.log("it is a file ");
                console.log("file path:", requiredPath);
                 const readStreamHtml = fs.createReadStream(`${requiredPath}index.html`);
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    res.statusCode = 500;
                    res.end();
                })
            }
        }
    })
}).listen(8080, () => {
    console.log("server listinig on port 8080, Good job mr. Bob!");
});
