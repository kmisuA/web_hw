const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");  

canvas.width = 480;
canvas.height = 800;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function drawTitleScreen() {
    ctx.fillStyle = "rgb(72, 153, 242)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "40px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Reactive: Midterm Game", centerX, centerY - 100);

    // Start 버튼 그리기
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(centerX - 100, centerY + 50, 200, 50);

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Start Game", centerX, centerY + 85);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

drawTitleScreen();

function drawStar(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();

    for (let i = 0; i < 10; i++) {
        const angle = Math.PI * 0.4 * i + Math.PI / -10;  
        const radius = (i % 2 === 0) ? size *2.7 : size;  
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius;
        
        if (i === 0) {
            ctx.moveTo(px, py);  
        } else {
            ctx.lineTo(px, py);  
        }
    }

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function drawHeart(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    
    for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
        const px = 16 * Math.pow(Math.sin(t), 3) * size;
        const py = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * size;
        
        if (t === 0) {
            ctx.moveTo(x + px, y + py);
        } else {
            ctx.lineTo(x + px, y + py);
        }
    }
    
    ctx.closePath();
    ctx.fill();
}

// 화면 클릭 이벤트
canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Start 버튼 영역 클릭 시 이전 화면으로 이동
    if (mouseX >= centerX - 100 && mouseX <= centerX + 100 &&
        mouseY >= centerY + 50 && mouseY <= centerY + 100) {
        
    }

    // 화면 클릭 시 타이틀 화면 지우기
    clearCanvas();
    drawStar(centerX, centerY, 10, "yellow");
    drawHeart(Math.random() * canvas.width, Math.random() * canvas.height, 1, "red");
});
