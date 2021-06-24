(function () {
    // var headlines = document.getElementById("headlines");
    var jQheadlines = $("#headlines");
    console.log("jQuery headlines", jQheadlines);

    // var left = headlines.offsetLeft;
    var jQleft = jQheadlines.offset().left;
    // var links = document.getElementsByTagName("a");
    var jQlinks = $("a");

    var myReqId;
    $.ajax({
        url: "/data.json",
        method: "GET",

        success: function (data) {
            console.log("data: ", data);
            var linksStr = "";
            for (var i = 0; i < data[i].length; i++) {
                linksStr +=
                    "<a href = " + data[i].href + ">" + data[i].text + "</a>";
                // "<a href = " + data[i].href + ">" + data[i].text + "</a>";
            }
            console.log("linksStr: ", linksStr);

            console.log("data[i].text: ", data[i].text);
            console.log("data[i].href: ", data[i].href);
            jQheadlines.html(linksStr);
        },
        // error: function (error) {
        //     console.log("error: ", error);
        // },
    });

    for (var i = 0; i < jQlinks.length; i++) {
        jQlinks.eq(i).on("mouseenter", function (evt) {
            cancelAnimationFrame(myReqId);
            console.log("mosueenred on an <a>");
            // console.log("moused on this element:", evt.target);

            // event.target.style.color = "red";
            $(evt.target).css({
                color: "red",
            });
        });

        jQlinks.eq(i).on("mouseleave", function (evt) {
            console.log("you just mouseleft on an a tag");
            // console.log("you mouse left this element:", evt.target);
            // event.target.style.color = "green";
            $(evt.target).css({
                color: "green",
            });

            moveHeadlines();
        });
    }

    function moveHeadlines() {
        jQleft--;

        if (jQleft <= -jQlinks.eq(0).Width) {
            jQleft += jQlinks.eq(0).Width;
            jQheadlines.appendChild(jQlinks.eq(0));
        }

        jQheadlines.css({
            left: jQleft + "px",
        });

        myReqId = requestAnimationFrame(moveHeadlines);
    }

    moveHeadlines();
})();
//
