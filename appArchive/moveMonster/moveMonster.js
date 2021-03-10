function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  function monster(xPos, yPos, angle, size, color) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.angle = angle;
    this.size = size;
    this.color = color;
  }
  monster.prototype.draw = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var transX = this.xPos + (this.size / 2);
    var transY = this.yPos + (this.size / 2);

    ctx.save();
    ctx.fillStyle = this.color;

    ctx.translate(transX, transY);
    ctx.rotate(this.angle);
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);

    //Eyes
    ctx.save();
    drawEye(-this.size / 3, -this.size / 3, this.size / 7, "blue");
    ctx.translate(this.size / 2, 0);
    drawEye(-this.size / 3, -this.size / 3, this.size / 7, "blue");
    ctx.restore();

    //Nose
    ctx.beginPath();
    ctx.fillStyle = "pink";
    ctx.strokeStyle = "pink";
    ctx.arc(0, 0, this.size / 15, 0, 2 * Math.PI);
    ctx.fill();

    //Mouth
    ctx.beginPath();   
    ctx.strokeStyle = "pink";
    ctx.lineWidth = this.size * 0.05;
    ctx.arc(0, this.size / 10, this.size / 3, 0, Math.PI);
    ctx.stroke();

    //Hair
    
    ctx.translate(-transX, -transY);
    ctx.restore();

  }

  monster.prototype.move = function(keyCode){
      switch (keyCode) {
        case 32:
            this.angle += 0.2 * Math.PI;
            break;
        case 37: //Left arrow
            this.xPos -= (monster1.xPos <= 0) ? 0 : 1;
            break;
        case 38: //Up arrow
            this.yPos -= (monster1.yPos <= 0) ? 0 : 1;
            break;
        case 39: //Right arrow
            this.xPos += (monster1.xPos >= canvas.width - monster1.size) ? 0 : 1;
            break;
        case 40: //Down arrow
            this.yPos += (monster1.yPos >= canvas.height - monster1.size) ? 0 : 1;
            break;
        case 107: //Numpad plus
            this.size += (monster1.size <= canvas.width) ? 1 : 0;
            break;
        case 109: //Numpad minus
            monster1.size -= (monster1.size >= 1) ? 1 : 0;
            break;
        default:
            console.log("That button doesn't do anything.");
            break;
      }
      this.draw();
  }
  monster1 = new monster(100, 100, 0, 50, "#3F7883");

  monster1.draw();

  canvas.addEventListener('click', moveMonster, false);
  window.addEventListener('keydown', function(event){
    monster1.move(event.keyCode);
  }, false);
 
}

function moveMonster(e) {
  monster1.xPos = e.clientX - canvas.offsetLeft - (monster1.size / 2);
  monster1.yPos = e.clientY - canvas.offsetTop - (monster1.size / 2);
  monster1.draw();

}

function drawLine(x1, y1, x2, y2){
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

function drawEye(x, y, eyeSize, color) {
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, eyeSize, eyeSize);
  ctx.fillStyle = "blue";
  ctx.fillRect(x + (eyeSize * 0.25), y + (eyeSize / 4), eyeSize / 2, eyeSize / 2);
  ctx.restore();
}

window.addEventListener("load", init, false);