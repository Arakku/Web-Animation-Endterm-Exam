const pulsingCanvas = document.getElementById("pulsingCirclesCanvas");
const pulsingCtx = pulsingCanvas.getContext("2d");

pulsingCanvas.width = 500;
pulsingCanvas.height = 300;

let pulseRadius = 5;
let growing = true;

function drawPulsingCircles() {
    pulsingCtx.clearRect(0, 0, pulsingCanvas.width, pulsingCanvas.height);

    pulsingCtx.beginPath();
    pulsingCtx.arc(pulsingCanvas.width / 2, pulsingCanvas.height / 2, pulseRadius, 0, Math.PI * 2);
    pulsingCtx.fillStyle = "rgba(255, 99, 71, 0.6)";
    pulsingCtx.fill();

    if (growing) {
        pulseRadius += 0.5;
        if (pulseRadius >= 50) growing = false;
    } else {
        pulseRadius -= 0.5;
        if (pulseRadius <= 5) growing = true;
    }

    requestAnimationFrame(drawPulsingCircles);
}
drawPulsingCircles();
