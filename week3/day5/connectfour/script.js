//currentPlayer
var currentPlayer = "player1";

function switchPlayer() {
    currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
    console.log("The current player is: ", currentPlayer);
}
function checkForVictory(slots) {
    // console.log("slots in checkForVictory: ", slots);
    var count = 0;
    for (var slot, i = 0; i < slots.length; i++) {
        // wrap any slot in a jQuery object
        slot = $(slots[i]);
        if (slot.hasClass(currentPlayer)) {
            count++;
            if (count == 4) {
                return true;
            }
        } else count = 0;
    }
}

function checkForVictoryDiagonal() {
    var diagonalsPossibilities = [
        [0, 7, 14, 21],
        [7, 14, 21, 28],
        [14, 21, 28, 35],
        [1, 8, 15, 22],
        [8, 15, 22, 29],
        [2, 9, 16, 23],
        [6, 13, 20, 27],
        [13, 20, 27, 34],
        [20, 27, 34, 41],
        [12, 19, 26, 33],
        [19, 26, 33, 40],
        [18, 25, 32, 39],
        [24, 19, 14, 9],
        [19, 14, 9, 4],
        [24, 19, 14, 9],
        [19, 14, 9, 4],
        [30, 25, 20, 15],
        [25, 20, 15, 10],
        [20, 15, 10, 5],
        [36, 31, 26, 21],
        [26, 21, 16, 11],
        [37, 32, 27, 22],
        [32, 27, 22, 17],
        [38, 33, 28, 23],
    ];

    var allSlots = $(".slot");
    for (var possibleVictorys of diagonalsPossibilities) {
        var slotsInDiagonal = [];
        for (var i of possibleVictorys) {
            slotsInDiagonal.push(allSlots[i]);
        }

        var victory = checkForVictory(slotsInDiagonal);

        if (victory) {
            return true;
        }
    }
}

// reload the page

$("#btn").on("click", function () {
    // console.log("location reload", location.reload());
    location.reload();
});

$(".column").on("click", function (e) {
    console.log("clicked on a column");
    var col = $(e.currentTarget);
    // console.log(col);
    var slotInCol = col.children();
    // console.log("slotInCol", slotInCol);
    for (var slot, i = slotInCol.length - 1; i >= 0; i--) {
        // console.log("slotInCol[i]", slotInCol[i]);
        slot = slotInCol.eq(i);
        // console.log("slot: ", slot);
        if (!slot.hasClass("player1") && !slot.hasClass("player2")) {
            slot.addClass(currentPlayer);

            break;
        }
    }
    // console.log("i", i);
    if (i === -1) {
        return;
    }
    var turns = $(".turns");

    if (currentPlayer == "player1") {
        // turns.css({ visibility: "visible", background: "yellow" });
        turns.css({ background: "yellow" });
    } else if (currentPlayer == "player2") {
        // turns.css({ visibility: "visible", background: "red" });
        turns.css({ background: "red" });
    } else return;

    var winVerticaly = checkForVictory(slotInCol);

    var slotInRow = $(".row" + i);
    var winHorizontly = checkForVictory(slotInRow);
    var winDiagonally = checkForVictoryDiagonal();

    if (winVerticaly || winHorizontly || winDiagonally) {
        console.log("victory for player: ", currentPlayer);
        function delay() {
            var announceVictory =
                "Well done! 🎉👑\n" +
                "There was a victory for " +
                currentPlayer +
                "\nPress OK to restart the game";
            var winner = window.confirm(announceVictory);
            if (winner == true) {
                location.reload();
            } else return;
        }
        setTimeout(delay, 200);
    }

    switchPlayer();
});
