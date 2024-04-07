
const canvas = document.getElementById('solarSystemCanvas');
const ctx = canvas.getContext('2d');

const sunRadius = 50;
const earthRadius = 20;
const moonRadius = 5;

let sunAngle = 0;
let earthAngle = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'yellow';
  ctx.fillRect(canvas.width / 2 - sunRadius, canvas.height / 2 - sunRadius, sunRadius * 2, sunRadius * 2); // 태양 네모로 그리기

  const earthX = canvas.width / 2 + 200 * Math.cos(sunAngle);
  const earthY = canvas.height / 2 + 200 * Math.sin(sunAngle);
  ctx.fillStyle = 'blue';
  ctx.fillRect(earthX - earthRadius, earthY - earthRadius, earthRadius * 2, earthRadius * 2);

  const moonX = earthX + 50 * Math.cos(earthAngle * 2);
  const moonY = earthY + 50 * Math.sin(earthAngle * 2);
  ctx.fillStyle = 'gray';
  ctx.fillRect(moonX - moonRadius, moonY - moonRadius, moonRadius * 2, moonRadius * 2);
  sunAngle += Math.PI / 200;
  earthAngle += Math.PI / 150; 
  requestAnimationFrame(draw);
}
draw();
