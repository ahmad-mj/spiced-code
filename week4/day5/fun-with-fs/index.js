const fs = require("fs");
const myPath = __dirname;
// // console.log("__dirname: ", __dirname);
// function logSizes(fullPath) {
//     // const contents = fs.readdirSync(myPath, { withFileTypes: true });
//     //fs.readdir Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
//     //fs.readdir(path[, options], callback)
//     fs.readdir(fullPath, { withFileTypes: true }, (err, contents) => {
//         if (err) {
//             console.log("err: ", err);
//             return;
//         }
//         // console.log("contents: ", contents);
//         for (let i = 0; i < contents.length; i++) {
//             fs.stat(fullPath + "/", (err, stats) => {
//                 if (err) {
//                     console.log("err", err);
//                     return;
//                 }
//                 console.log(
//                     fullPath + "/" + contents[i].name + ": " + stats.size
//                 );
//             });

//             if (contents[i].isDirectory()) {
//                 logSizes(fullPath + "/" + contents[i].name);
//             }
//         }
//     });
// }
// logSizes(myPath);

//Part 2
function mapSizes(myPath) {
    const results = fs.readdirSync(myPath, { withFileTypes: true });
    console.log("results: ", results);
    const obj = {};
    fs.writeFileSync(`${myPath}/info.json`, JSON.stringify(obj));
    fs.writeFileSync(`${myPath}/info.json`, JSON.stringify(obj, null, 4));
}
mapSizes(myPath);
