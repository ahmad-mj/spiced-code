(function () {
    var headlines = $("#headlines");
    var curX = headlines.offset().left;
    var links = $("a");
    var animId;
    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function (data) {
            var htmlStr = "";
            for (var i = 0; i < data.length; i++) {
                htmlStr +=
                    '<a class="up" href="' +
                    data[i].href +
                    '">' +
                    data[i].text +
                    "</a>";
            }

            headlines.append(htmlStr);
            console.log("headlines: ", headlines);

            headlines.on("mouseenter", function () {
                cancelAnimationFrame(animId);
            });

            headlines.on("mouseleave", function () {
                moveHeadlines();
            });
            moveHeadlines();

            function moveHeadlines() {
                curX--;

                if (curX < -links.eq(0).width()) {
                    links.eq(0).appendTo(headlines);
                    curX += links.eq(0).width();
                    links = $("a");
                }

                headlines.css({
                    left: curX + "px",
                });

                animId = requestAnimationFrame(moveHeadlines);
            }
        },
    });
})();
