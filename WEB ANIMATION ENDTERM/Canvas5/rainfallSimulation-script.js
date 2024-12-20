const rainCanvas = document.getElementById("rainfallSimulationCanvas");
const rainCtx = rainCanvas.getContext("2d");

rainCanvas.width = 500;
rainCanvas.height = 300;

const raindrops = [];
for (let i = 0; i < 50; i++) {
    raindrops.push({
        x: Math.random() * rainCanvas.width,
        y: Math.random() * rainCanvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 5 + 2,
    });
}

function drawRainfall() {
    rainCtx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);

    raindrops.forEach(drop => {
        rainCtx.beginPath();
        rainCtx.moveTo(drop.x, drop.y);
        rainCtx.lineTo(drop.x, drop.y + drop.length);
        rainCtx.strokeStyle = "rgba(173, 216, 230, 0.6)";
        rainCtx.lineWidth = 2;
        rainCtx.stroke();

        drop.y += drop.speed;
        if (drop.y > rainCanvas.height) drop.y = -drop.length;
    });

    requestAnimationFrame(drawRainfall);
}
drawRainfall();
