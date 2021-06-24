$.ajax({
    url: "/data.json",
    method: "GET",

    success: function (data) {
        console.log("data: ", data);
        var htmlStr = "";
        for (var i = 0; i < data.length; i++) {
            console.log("data.text[i]: ", data[i]);
            htmlStr += "<a>" + data[i] + "</a>";
        }
        console.log("htmlStr: ", htmlStr);
        $("#headlines").html(htmlStr);

        (function () {
            var jQheadlines = $("#headlines");
            // console.log("jQuery headlines", jQheadlines);
            var jQleft = jQheadlines.offset().left;
            var jQlinks = $("a");
            var myReqId;

            for (var i = 0; i < jQlinks.length; i++) {
                jQlinks.eq(i).on("mouseenter", function (evt) {
                    cancelAnimationFrame(myReqId);
                    console.log("mosueenred on an <a>");
                    console.log("moused on this element:", evt.target);
                    $(evt.target).css({
                        color: "red",
                    });
                });

                jQlinks.eq(i).on("mouseleave", function (evt) {
                    console.log("you just mouseleft on an a tag");
                    console.log("you mouse left this element:", evt.target);
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
    },
    error: function (error) {
        console.log("error: ", error);
    },
});
