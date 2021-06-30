(function () {
    var nextUrl;
    var spotifyApiUrl = "https://spicedify.herokuapp.com/spotify";
    function setNextUrl(next) {
        nextUrl =
            next &&
            next.replace("https://api.spotify.com/v1/search", spotifyApiUrl);
    }
    function generateResultsHtml(items) {
        var myHtml = "";
        var imageUrl = "/default.jpg";
        for (var i = 0; i < items.length; i++) {
            if (items[i].images.length > 0) {
                imageUrl = items[i].images[0].url;
            }
            myHtml +=
                "<a target='_blank' href=" +
                items[i].external_urls.spotify +
                ">" +
                "<img src = " +
                imageUrl +
                " >" +
                "<p> " +
                items[i].name +
                "</p>" +
                "</a>";
            // there is a bug No results found for is not showing!!
            var resultFor = "";
            if (items.length > 0) {
                resultFor += '<h2>Results for: "' + $("input").val() + '"</h2>';
            } else {
                resultFor +=
                    '<h2>No results found for: "' + $("input").val() + '"</h2>';
            }
        }
        $("#resultsForText").html(resultFor);
        return myHtml;
    }

    $(document).on("click", "#go, #more_btn", function (e) {
        var goGotClicked = e.target.id === "go";
        var data;
        var url = spotifyApiUrl;

        if (goGotClicked) {
            data = {
                query: $("input").val(),
                type: $("select").val(),
            };
        } else {
            url = nextUrl;
        }
        $.ajax({
            url: url,
            method: "GET",
            data: data,
            success: function (response) {
                response = response.albums || response.artists;
                var html = generateResultsHtml(response.items);
                if (goGotClicked) {
                    $("#results-container").html(html);
                } else {
                    $("#results-container").append(
                        generateResultsHtml(response.items)
                    );
                }
                setNextUrl(response.next);
                // IF nextUrl has value, make more button appear
                var moreButton = $("#more_btn ");
                if (response.next === null) {
                    moreButton.css({ visibility: "hidden" });
                    // console.log("moreButton should not be visible", moreButton);
                } else if (response.next !== null) {
                    moreButton.css({ visibility: "visible" });
                    // moreButton.css({ visibility: "visible" });
                }
            },
        });
        // function infinteScroll() {
        //     var entireHeight = $(document).height();
        //     var windowHeight = $(window).height();
        //     var scrollTop = $(document).scrollTop();

        //     var userReachedTheBottom = windowHeight + scrollTop;
        //     console.log("userReachedTheBottom", userReachedTheBottom);

        //     console.log("show entireHeight", entireHeight);
        //     if (userReachedTheBottom != entireHeight) {
        //         setTimeout(infinteScroll, 3000);
        //     } else return;
        // }
    });
})();
