var segments = [
    [1, 1, 1, 1, 1, 1, 0], // 0
    [0, 1, 1, 0, 0, 0, 0], // 1
    [1, 1, 0, 1, 1, 0, 1], // 2
    [1, 1, 1, 1, 0, 0, 1], // 3
    [0, 1, 1, 0, 0, 1, 1], // 4
    [1, 0, 1, 1, 0, 1, 1], // 5
    [1, 0, 1, 1, 1, 1, 1], // 6
    [1, 1, 1, 0, 0, 0, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1]  // 9
];

function drawNum(canvas, studentID) {
    var ctx = canvas.getContext("2d");

    var digitWidth = 30;
    var x = 10;
    var y = canvas.height / 4;

    var digits = studentID.toString().split('').map(Number);

    digits.forEach(function (digit, index)
    {
        drawDigit(ctx, x + index * (digitWidth + 5), y, digit);
    });
}

function drawDigit(ctx, x, y, digit) {
    var segment = segments[digit];
    var width = 20;
    var height = 40;
    var spacing = 3;
    var lineWidth = 3;

    ctx.fillStyle = "#00FF00";

   
    if (segment[0]) ctx.fillRect(x  + spacing, y-1, width, lineWidth);
    if (segment[1]) ctx.fillRect(x  + width + spacing * 1 + lineWidth, y + spacing, lineWidth, height / 2 - spacing);
    if (segment[2]) ctx.fillRect(x  + width + spacing * 1 + lineWidth, y + height -17 + spacing, lineWidth, height / 2 - spacing);
    if (segment[3]) ctx.fillRect(x + spacing, y + height + lineWidth, width, lineWidth);
    if (segment[4]) ctx.fillRect(x -2, y + height / 2 + spacing + lineWidth, lineWidth, height / 2 - spacing);
    if (segment[5]) ctx.fillRect(x -2, y + spacing, lineWidth, height / 2 - spacing);
    if (segment[6]) ctx.fillRect(x + spacing, y + height / 2 + spacing -5 + lineWidth, width, lineWidth);
}
