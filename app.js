let board = document.getElementById("board");
let ctx = board.getContext("2d");

ctx.scale(0.7, 0.7);
let dial = document.getElementById("image1");
let secArrow = document.getElementById("secArrow");
let minArrow = document.getElementById("minArrow");
let hourArrow = document.getElementById("hourArrow");

setInterval(() => {
    this.drawArrows();
}, 1000);

function drawArrows() {
    ctx.drawImage(dial, 10, 10);

    ctx.translate(board.width / 2, board.height / 2);

    let d = new Date();
    let sec = d.getSeconds();

    let hour = d.getHours();
    let append = ((100 / 60) * d.getMinutes()) / 100;
    let fi = (360 / 12) * (hour + append);
    ctx.rotate((fi * Math.PI) / 180);
    ctx.drawImage(hourArrow, -45, -215);
    ctx.rotate((-fi * Math.PI) / 180);

    min = d.getMinutes();
    fi = 6 * min;
    ctx.rotate((fi * Math.PI) / 180);
    ctx.drawImage(minArrow, -21, -265);
    ctx.rotate((-fi * Math.PI) / 180);

    fi = 6 * sec;
    ctx.rotate((fi * Math.PI) / 180);
    ctx.drawImage(secArrow, -19, -275);
    ctx.rotate((-fi * Math.PI) / 180);

    ctx.translate(-board.width / 2, -board.height / 2);
}
