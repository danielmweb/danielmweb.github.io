//set the width to fill the screen

resizeCanvas();

function resizeCanvas() {
    let width = window.innerWidth - 5;
    let height = window.innerHeight - 30;
    $("#game").width(width);
    $("#game").height(height);
}

window.addEventListener("resize", resizeCanvas);
