const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    req.on("error", (err) => {
        console.log("err in request: ", err);
        req.statusCode = 404;
        req.end(`<h1>${err}</h1>`);
    });
    res.on("error", (err) => {
        console.log("err in response: ", err);
        res.statusCode = 502;
        res.end(`<h1>${err}</h1>`);
    });
    fs.appendFile(
        "requests.txt",
        `Date:${new Date()}\t,${req.method}\t,${req.url}\t,${
            req.headers["user-agent"]
        }\n`,
        (err) => {
            if (err) {
                console.log("There was an error");
            }
        }
    );
    console.log("--------------------------------");
    console.log("requset for url: ", req.url);
    console.log("--------------------------------");
    console.log("req.method:", req.method);
    console.log("--------------------------------");
    console.log("req.headers: ", req.headers);
    console.log("--------------------------------");

    if (req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        res.end(`
        <!doctype html>
            <html>
            <title>Hello World!</title>
            <p>Hello World!</p>
            </html>
        `);
    } else if (req.method === "HEAD") {
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        res.end();
    } else if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            console.log("chunk: ", chunk);
            body += chunk; // puting stuff back together
        });
        req.on("end", () => {
            console.log("body:", body);
            res.setHeader("Location", "/");
            res.statusCode = 302;
            res.end(`<h1>${body}</h1>`);
        });
    } else {
        res.statusCode = 405;
        res.end();
    }
});

server.listen(8080, () => {
    console.log(
        "i've been created and ready to go, good job Ahmad! we are on port 8080"
    );
});
