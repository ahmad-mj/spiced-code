const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

module.exports.getToken = function (callback) {
    let creds = `${consumerKey}:${consumerSecret}`;
    let encodedCreds = new Buffer.from(creds).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");

    function cb(resp) {
        if (resp.statusCode != 200) {
            callback(resp.statusCode);
            return;
        }

        let body = "";
        resp.on("data", (chunk) => {
            body += chunk;
        }).on("end", () => {
            // console.log("unparsedbody in twitter.js: ", body);
            let parsedBody = JSON.parse(body);
            // console.log(parsedBody);
            callback(null, parsedBody.access_token);
        });
    }
};

module.exports.getTweets = function (bearerToken, tweetTimeline, callback) {
    const req = https.request(
        {
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${tweetTimeline}&tweet_mode=extended`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        },
        (resp) => {
            if (resp.statusCode != 200) {
                callback(resp.statusCode);
                return;
            } else {
                let body = "";
                resp.on("data", (chunk) => (body += chunk)).on("end", () => {
                    try {
                        body = JSON.parse(body);
                        callback(null, body);
                    } catch (err) {
                        callback(err);
                    }
                });
            }
        }
    );
    req.end();
};

module.exports.filterTweets = function (tweets) {
    let filteredTweets = [];
    for (var i = 0; i < tweets.length; i++) {
        let obj = {};
        if (tweets[i].entities.urls.length == 1) {
            obj.name = tweets[i].user.name;
            obj.url = tweets[i].entities.urls[0].url;
            obj.text = `${obj.name}: ${tweets[i].full_text.slice(0, 50)}`;
            filteredTweets.push(obj);
        }
    }
    console.log("filteredTweets: ", filteredTweets);
    return filteredTweets;
};
