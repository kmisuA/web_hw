function drawCanvas() {
    document.getElementById('d_Right').innerHTML = '';

    var canvasExists = document.getElementById('canvas_container');
    if (canvasExists) {
        document.getElementById('d_Right').removeChild(canvasExists);
    }

    var canvasDiv = document.createElement('div');
    canvasDiv.id = 'canvas_container';
    var canvas = document.createElement('canvas');
    canvas.id = 'myCanvas';
    canvas.width = 200;
    canvas.height = 200;
    canvasDiv.appendChild(canvas);
    document.getElementById('d_Right').appendChild(canvasDiv);

    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(100, 100, 50, 0, 2 * Math.PI);
    context.stroke();
}

function showGameInfo() {
    document.getElementById('d_Right').innerHTML = '';
    var gameInfoDiv = document.createElement('div');
    gameInfoDiv.innerHTML = '<img id="game" src="game.jpg"><div class="game_info">리그오브레전드<br>출시일:2011.12.04<br>장르:MOBA<br>좋아하는이유:팀 게임으로 단합할수있어서</div>';
    document.getElementById('d_Right').appendChild(gameInfoDiv);
}
