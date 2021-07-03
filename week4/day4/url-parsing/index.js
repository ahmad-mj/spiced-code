const url = require("url");
const qs = require("querystring");
const parsedUrl = url.parse(process.argv[2]); //argv returns an array containing the command-line arguments passed when the Node.js process was launched..why[2]?

console.log("The protocol is: ", parsedUrl.protocol);
console.log("The host is: ", parsedUrl.host);
console.log("The hostname is: ", parsedUrl.hostname);
console.log("The port is: ", parsedUrl.port);
console.log("The pathname is: ", parsedUrl.pathname);
console.log("The query is", parsedUrl.query);

const qsValue = qs.parse(parsedUrl.query);
for (let parameter in qsValue) {
    console.log(
        `The value of the ${parameter} parameter is: ${qsValue[parameter]} `
    );
}

// The value of the a parameter is 100
// The value of the b parameter is 200
