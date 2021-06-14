//ex.1
function styleElements(selector) {
    var allElements = document.querySelectorAll(selector); //finde all the elements(querySelectorAll) in the document
    for (var i = 0; i < allElements.length; i++) {
        allElements[i].style.fontWeight = "bold";
        allElements[i].style.fontStyle = "italic";
        allElements[i].style.textDecoration = "underline";
        // allElements[i].style.textDecoration = "underline|bold|italic";
    }
}
styleElements("body");

//ex.2
function arr(className) {
    var array = [];
    var allCalsses = document.getElementsByClassName(className);
    for (var i = 0; i < allCalsses.length; i++) {
        array.push(allCalsses[i]);
    }
    return array;
}
arr("listItem"); //(6)[li.listItem, li.listItem, li#favorite.listItem, li.listItem, li.listItem, li.listItem]

//ex.3
function insert() {
    var newHeading = document.createElement("h3");
    var text = document.createTextNode("AWESOME");
    newHeading.appendChild(text);
    document.querySelector("body").appendChild(newHeading);

    newHeading.style.position = "fixed";
    newHeading.style.zIndex = "2147483647";
    newHeading.style.left = "20px";
    newHeading.style.top = "100px";
    newHeading.style.fontSize = "200px";
}
insert();
