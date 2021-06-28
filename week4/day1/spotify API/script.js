(function () {
    $("#go").click(function () {
        // console.log("go button was clickd");

        var userInput = $("input").val(); // val(); here is a geter to get whatever the user type in the input field
        // console.log("userInput: ", userInput);
        var albumOrArtist = $("select").val(); // to tell me whether the user select album or artist
        // console.log("albumOrArtist: ", albumOrArtist);

        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            method: "GET",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: function (response) {
                response = response.artists || response.albums;
                console.log("response: ", response);
                var myHtml = ""; // = "" so it does not show me undefinde
                for (var i = 0; i < response.items.length; i++) {
                    // console.log(response.items[i].name);

                    var imageUrl = "/default.jpg";
                    if (response.items[i].images[0]) {
                        imageUrl = response.items[i].images[0].url;
                    }

                    myHtml +=
                        "<a target='_blank' href=" +
                        response.items[i].external_urls.spotify +
                        ">" +
                        "<img src = " +
                        imageUrl +
                        " >" +
                        "<p> " +
                        response.items[i].name +
                        "</p>" +
                        "</a>";

                    // there is a bug No results found for is not showing!!
                    var resultFor = "";

                    if (response.items.length > 0) {
                        resultFor +=
                            '<h2>Results for: "' + $("input").val() + '"</h2>';
                    } else {
                        resultFor +=
                            '<h2>No results found for: "' +
                            $("input").val() +
                            '"</h2>';
                    }
                    console.log("no result", resultFor);
                }
                $("#resultsForText").html(resultFor);

                // console.log("myHtml:", myHtml);
                $("#results-container").html(myHtml);
                // console.log("orginal url: ", response.next);

                var nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                var moreButton = $("#more_btn ");
                if (response.next === null) {
                    moreButton.css({ visibility: "hidden" });
                    // console.log("moreButton should not be visible", moreButton);
                } else if (response.next !== null) {
                    moreButton.css({ visibility: "visible" });
                    // console.log("moreButton should be visible", moreButton);
                    moreButton.click(function () {
                        console.log("clicking");
                    });
                }
                // console.log("new url: ", nextUrl);
            },
        });
    });
})();
