const spiralCanvas = document.getElementById("growingSpiralCanvas");
const spiralCtx = spiralCanvas.getContext("2d");

spiralCanvas.width = 500;
spiralCanvas.height = 300;

let angle = 0;
let radius = 1;

function drawGrowingSpiral() {
    spiralCtx.clearRect(0, 0, spiralCanvas.width, spiralCanvas.height);

    spiralCtx.beginPath();
    for (let i = 0; i < 1000; i++) {
        const x = 250 + radius * Math.cos(angle);
        const y = 150 + radius * Math.sin(angle);
        spiralCtx.lineTo(x, y);
        angle += 0.1;
        radius += 0.05;
    }
    spiralCtx.strokeStyle = "hsl(" + (angle * 10) % 360 + ", 70%, 50%)";
    spiralCtx.lineWidth = 2;
    spiralCtx.stroke();

    requestAnimationFrame(drawGrowingSpiral);
}
drawGrowingSpiral();
