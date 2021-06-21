(function () {
    // var headlines = document.getElementById("headlines");
    var jQheadlines = $("#headlines");
    console.log("jQuery headlines", jQheadlines);

    // var left = headlines.offsetLeft;
    var jQleft = jQheadlines.offset().left;
    // var links = document.getElementsByTagName("a");
    var jQlinks = $("a");

    var myReqId;

    console.log("links in jquery: ", jQlinks);

    for (var i = 0; i < jQlinks.length; i++) {
        jQlinks.eq(i).on("mouseenter", function (evt) {
            cancelAnimationFrame(myReqId);
            console.log("mosueenred on an <a>");
            console.log("moused on this element:", evt.target);

            // event.target.style.color = "red";
            $(event.target).css({
                color: "red",
            });
        });

        jQlinks.eq(i).on("mouseleave", function (evt) {
            console.log("you just mouseleft on an a tag");
            console.log("you mouse left this element:", evt.target);
            // event.target.style.color = "green";
            $(event.target).css({
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
