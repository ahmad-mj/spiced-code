const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const chalk = require("chalk");

const server = http.createServer((req, res) => {
    req.on("error", (err) => {
        console.log("err in request: ", err);
        req.end();
    });
    res.on("error", (err) => {
        console.log("err in response: ", err);
        res.end();
    });

    if (req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");

        res.end(`
       <!doctype html>
                <html>
                <title>Colors</title>
                <form method="POST">
                <input type="text" name="text">
                <select name="color">
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                    <option value="gray">gray</option>
                    <option value="magenta">magenta</option>
                    <option value="cyan">cyan</option>
                </select>
                <button type="submit">Go</button>
                </form>
                </html>
        `);
    } else if (req.method === "POST") {
        let body = "";

        req.on("data", (chunk) => {
            // console.log("chunk: ", chunk);
            body += chunk; // puting stuff back together
        });
        req.on("end", () => {
            // console.log("body:", body);
            let parsedBody = qs.parse(body);
            console.log("parsedBody:", parsedBody);
            let linkColor = parsedBody.color;
            console.log(chalk[parsedBody.color](parsedBody.text));
            res.end(`<!doctype html>
                        <html>
                        <title>it is better to have loved and lost than never to have loved at all</title>
                        <a href="/" style="color:${linkColor}">it is better to have loved and lost than never to have loved at all</a>
                        </html>`);
        });
    }
});

server.listen(8080, () => {
    console.log(
        "i've been created and ready to go, good job Ahmad! we are on port 8080"
    );
});
