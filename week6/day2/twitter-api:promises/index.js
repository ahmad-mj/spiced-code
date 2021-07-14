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
                // console.log("sorted: ", sorted);
            })
            .catch((err) => {
                console.log("unexpected error", err);
                res.sendStatus(500);
            });
    });
});

app.listen(8080, () => console.log("twitter api server listening...."));
