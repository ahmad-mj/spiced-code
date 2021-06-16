console.log("i'm linked");
(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;

    ctx.moveTo(300, 600);

    ctx.lineTo(300, 200);

    ctx.moveTo(300, 300);
    ctx.lineTo(100, 300);
    ctx.lineTo(50, 250);
    // ctx.lineTo(100, 200);
    ctx.moveTo(300, 300);
    ctx.lineTo(500, 300);
    ctx.lineTo(450, 400);

    ctx.moveTo(300, 600);
    ctx.lineTo(100, 800);

    ctx.moveTo(580, 300);
    ctx.lineTo(300, 600);

    ctx.closePath();
    ctx.stroke();

    //head
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.arc(300, 150, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "beige";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //mouth
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.arc(310, 170, 15, 0, Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "beige";
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(320, 130, 3, 0, Math.PI * 2); // left e
    ctx.fill();

    ctx.arc(280, 140, 3, 0, Math.PI * 2); //right eye
    ctx.fill();
})();
