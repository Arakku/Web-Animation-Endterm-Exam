const waveCanvas = document.getElementById("waveMotionCanvas");
const waveCtx = waveCanvas.getContext("2d");

waveCanvas.width = 500;
waveCanvas.height = 300;

let angle = 0;

function drawWave() {
    waveCtx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);
    waveCtx.beginPath();

    for (let x = 0; x < waveCanvas.width; x++) {
        let y =
            Math.sin((x + angle) * 0.05) * 20 +
            Math.cos((x + angle) * 0.03) * 10 +
            waveCanvas.height / 2;
        waveCtx.lineTo(x, y);
    }

    waveCtx.strokeStyle = `hsl(${angle % 360}, 70%, 50%)`;
    waveCtx.lineWidth = 2;
    waveCtx.stroke();

    angle += 2;
    requestAnimationFrame(drawWave);
}
drawWave();
