(function () {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var links = document.getElementsByTagName("a");

    var myReqId;

    console.log("headlines: ", headlines);

    console.log("links: ", links);

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (evt) {
            cancelAnimationFrame(myReqId);
            console.log("mosueenred on an <a>");
            console.log("moused on this element:", evt.target);

            event.target.style.color = "red";
        });

        links[i].addEventListener("mouseleave", function (evt) {
            console.log("you just mouseleft on an a tag");
            console.log("you mouse left this element:", evt.target);
            event.target.style.color = "green";

            moveHeadlines();
        });
    }

    function moveHeadlines() {
        left--;

        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }

        headlines.style.left = left;

        myReqId = requestAnimationFrame(moveHeadlines);
    }

    moveHeadlines();
})();
