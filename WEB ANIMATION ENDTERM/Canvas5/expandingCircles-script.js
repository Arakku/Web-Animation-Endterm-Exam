const circlesCanvas = document.getElementById("expandingCirclesCanvas");
const circlesCtx = circlesCanvas.getContext("2d");

circlesCanvas.width = 500;
circlesCanvas.height = 300;

let radius = 0;
function drawExpandingCircles() {
    circlesCtx.clearRect(0, 0, circlesCanvas.width, circlesCanvas.height);
    for (let i = 1; i <= 5; i++) {
        circlesCtx.beginPath();
        circlesCtx.arc(
            circlesCanvas.width / 2,
            circlesCanvas.height / 2,
            radius * i,
            0,
            Math.PI * 2
        );
        circlesCtx.strokeStyle = `hsl(${i * 60}, 70%, 50%)`;
        circlesCtx.lineWidth = 2;
        circlesCtx.stroke();
    }

    radius += 1;
    if (radius > 50) radius = 0;
    requestAnimationFrame(drawExpandingCircles);
}
drawExpandingCircles();
