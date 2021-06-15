(function () {
    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var links = document.getElementsByTagName("a");

    console.log("headlines: ", headlines);
    // console.log("starting left position of headlines: ", left);
    // console.log("links: ", links);

    function moveHeadlines() {
        left--;

        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);

            // console.log("1st link is COMPLETELY offscreen");

            // There's 2 thing you need to do in here!!!
            // #1 - to avoid jumpiness behaviour, make srue that you account for the space that you're about to remove by adding the width of the link you're remove as the new value of left
            // #2 - remove the first link and make it the last
        }

        //console.log("left value AFTER decrementing: ", left);
        headlines.style.left = left;
        requestAnimationFrame(moveHeadlines);
    }

    moveHeadlines();
})();
