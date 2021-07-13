const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");
const util = require("util");
const twiToken = util.promisify(getToken);
const twiTweets = util.promisify(getTweets);

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    console.log(
        "server is now handling this request from ajax - req for json has been made!"
    );
    twiToken().then((token) => {
        Promise.all([
            twiTweets(token, "theonion"), //tweetTimeline (in this case is theonion) is the 2nd parameter in my getTweets function, should pass it also in the path link...
            twiTweets(token, "nytimes"),
            twiTweets(token, "bbcworld"),
        ])
            .then((tweets) => {
                // const theOnion = tweets[0];
                // const nyTimes = tweets[1];
                // const bbcWorld = tweets[2];
                // const [theOnion, nyTimes, bbcWorld] = tweets;
                // const flatendresults = theOnion.concat(nyTimes, bbcWorld);
                const flat = tweets.flat();
                const sorted = flat.sort((a, b) => {
                    const difference =
                        new Date(a.created_at) - new Date(b.created_at);
                    return difference;
                });
                res.json(filterTweets(sorted));
                console.log("sorted: ", sorted);
            })
            .catch((err) => {
                console.log("unexpected error", err);
                res.sendStatus(500);
            });
    });

    // There will be 4 things we want to do in here:
    // 1. get the bearer token
    // getToken((err, bearerToken) => {
    //     if (err) {
    //         console.log("err in getToken: ", err);
    //         return;
    //     }

    //     // at this point, getToken has FINISHED and we have access to the token
    //     console.log("this is the bearerToken in index.js! ", bearerToken);

    //     // 2. with the token, make a request for tweets
    //     getTweets(bearerToken, (err, tweets) => {
    //         if (err) {
    //             console.log("err in getTweets: ", err);
    //             return;
    //         }

    //         /// at this point, everything went well and tweets should be defined!!!
    //         console.log("tweets in index.js! ", tweets);

    //         // 3. once we receive the tweets, filter them
    //         const filteredTweets = filterTweets(tweets);

    //         // 4. send filtered tweets to the client (script.js) as json
    //         res.json(filteredTweets);
    //     });
    // });
});

app.listen(8080, () => console.log("twitter api server listening...."));
