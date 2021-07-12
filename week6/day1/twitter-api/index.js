const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    console.log(
        "server is now handling this request from ajax - req for json has been made!"
    );

    // There will be 4 things we want to do in here:
    // 1. get the bearer token
    getToken((err, bearerToken) => {
        if (err) {
            console.log("err in getToken: ", err);
            return;
        }

        // at this point, getToken has FINISHED and we have access to the token
        console.log("this is the bearerToken in index.js! ", bearerToken);

        // 2. with the token, make a request for tweets
        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log("err in getTweets: ", err);
                return;
            }

            /// at this point, everything went well and tweets should be defined!!!
            console.log("tweets in index.js! ", tweets);

            // 3. once we receive the tweets, filter them
            const filteredTweets = filterTweets(tweets);

            // 4. send filtered tweets to the client (script.js) as json
            res.json(filteredTweets);
        });
    });
});

app.listen(8080, () => console.log("twitter api server listening...."));
