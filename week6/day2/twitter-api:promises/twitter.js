const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

// #1. make a request to get the bearer token
module.exports.getToken = function (callback) {
    //this function is responsible for getting the bearerToken from Twitter
    // we did this together in class <3

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

    // options - obj that has info about the request we're about to make
    // cb - callback specific to our https request that runs WHEN the request is completed
    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");

    function cb(resp) {
        if (resp.statusCode != 200) {
            // something went wrong with our request!!
            callback(resp.statusCode);
            return;
        }

        // if we get to this point, everything went well!!!
        // we got some data back!
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

module.exports.getTweets = function (bearerToken, callback) {
    const req = https.request(
        {
            host: "api.twitter.com",
            path: "/1.1/statuses/user_timeline.json?screen_name=theonion&tweet_mode=extended",
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
            obj.text = tweets[i].full_text;
            obj.href = tweets[i].entities.urls[0].url;
            filteredTweets.push(obj);
        }
    }
    console.log("filteredTweets: ", filteredTweets);
    return filteredTweets;
};
