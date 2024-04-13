// Canvas Element 가져오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

// 하트 클래스 정의
class HeartObject {
    constructor(x, y) {
        this.rotate1 = getRandomRotate1();
        this.color = getRandomColor();
        this.size = getRandomSize();
        this.positionX = x;
        this.positionY = y;
        this.speed = getRandomSpeed();
        this.rotationSpeed = getRandomRotationSpeed();
        this.direction = getRandomDirection(x, y); 
    }

    draw() {
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.positionX, this.positionY);
        ctx.rotate(this.rotate1);
        ctx.scale(this.size, this.size);

        ctx.moveTo(0, 0);

        for (let t = 0; t <= 2 * Math.PI; t += 0.01) {
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
            ctx.lineTo(x, -y);
        }

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();
        ctx.restore();
    }

    move() {
        this.positionX += Math.cos(this.direction) * this.speed;
        this.positionY += Math.sin(this.direction) * this.speed;
        this.rotate1 += this.rotationSpeed;
    }
    isOutOfCanvas() {
        return this.positionX < 0 || this.positionX > canvas.width || this.positionY < 0 || this.positionY > canvas.height;
    }
}

// 하트 배열
var hearts = [];

// 마우스 위치 변수
var mouseX = -100;
var mouseY = -100;

// 마우스 이벤트 리스너
canvas.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// 하트 생성 함수
function createHeart() {
    const randomX = mouseX + getRandomOffset();
    const randomY = mouseY + getRandomOffset();
    hearts.push(new HeartObject(randomX, randomY));
    // 최대 100개 유지
    if (hearts.length > 100) {
        hearts.shift(); // 가장 오래된 하트 제거
    }
}

// 랜덤한 색상 반환 함수
function getRandomColor() {
    const colors = ["#C7C5FF", "black", "blue", "magenta", "pink", "cyan", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 랜덤한 크기 반환 함수
function getRandomSize() {
    return Math.random() * 1 + 1; // 크기 범위
}

// 랜덤한 이동속도 반환 함수
function getRandomSpeed() {
    return Math.random() * 1 + 1; // 이동속도 범위
}

// 랜덤한 회전속도 반환 함수
function getRandomRotationSpeed() {
    return Math.random() * 0.05; 
}
function getRandomRotate1(){
    return Math.random() * 0.05; // 회전 
}

// 랜덤한 이동방향 반환 함수
function getRandomDirection(x, y) {
    const angle = Math.atan2(y - mouseY, x - mouseX);
    const randomAngle = angle + (Math.random() * Math.PI / 2 - Math.PI / 4); // 마우스와 반대 방향으로부터 랜덤한 각도 선택
    return randomAngle;
}

// 랜덤한 오프셋 반환 함수 (마우스 주변에 생성하기 위해)
function getRandomOffset() {
    return Math.random() * 100 - 50;
}

// 화면 그리기 함수
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 생성된 HeartObject들을 화면에 그림
    hearts.forEach(heart => {
        heart.move();
        heart.draw();

        // 화면 밖으로 나간 하트 삭제
        if (heart.isOutOfCanvas()) {
            hearts.splice(hearts.indexOf(heart), 1);
        }
    });

    requestAnimationFrame(render);
}


setInterval(createHeart, 200);

render(); 
