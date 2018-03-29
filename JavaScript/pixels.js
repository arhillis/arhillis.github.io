const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const gridColorInput = document.getElementById("grid-color");
const squareColorInput = document.getElementById("square-color");

let moveHistory = [];
let lastFive = [squareColorInput.value];

let Square = function (x, y, width, height, color) {

    //I will pass in as x and y the position of the mouse click. this.findPosition determines in which columns and rows the square is located.

    this.findPosition = function (num, size) {
        num = num - (num % size);
        return (num === 0) ? num : num + 1; //If the index is zero, I want to add one so that doesn't go into the edge of the canvas
    };

    this.x = this.findPosition(x, width);
    this.y = this.findPosition(y, height);
    this.width = width;
    this.height = height;

    //I'm subtracting from width and height because of the grid lines I drew in my drawGrid function. Because there is no grid line on the edges, I have to make those squares a little wider and/or a little longer, depending on which axis they're on.


    this.onVerticalAxis = this.x === 0 || this.x > (canvas.width - width);
    this.onHorizonatalAxis = this.y === 0 || this.y > (canvas.height - height);

    this.width -= this.onVerticalAxis ? 1 : 2;
    this.height -= this.onHorizonatalAxis ? 1 : 2;

    this.fillColor = color || "white";

};

Square.prototype.draw = function () {
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = gridColorInput.value;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.index = moveHistory.length - 1;
    moveHistory.push(this);
};

Square.prototype.erase = function () {
    this.fillColor = "white";
    this.draw();
};

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
}

function init() {
       let gridHeight = $("#grid-height-input").val(), 
           gridWidth = $("#grid-width-input").val();

    makeGrid(gridHeight, gridWidth, gridColorInput.value);
    drawHistory();

    $("#grid-color").change(function () {
        if ($("#border-input").is(":checked")) {
            makeGrid(gridHeight, gridWidth, this.value);
        }
    })

    function makeGrid(numCols, numRows, color) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = color || "black";
        canvas.style.borderColor = color;

        let canvasWidth = canvas.width,
            canvasHeight = canvas.height,
            width = canvas.width / numCols,
            height = canvas.height / numRows;

        //Horizonal lines
        for (let i = width; i < canvas.width; i += width) {
            drawLine(i, 0, i, canvasHeight);
        }

        //Vertical lines
        for (let i = height; i < canvasHeight; i += height) {
            drawLine(0, i, canvasWidth, i);
        }

        moveHistory.forEach(function (square) {
            square.draw();
        })

        function drawLine(x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.restore();
        }
    }

    function drawHistory(){
        $("#last-five").html(" ");
    
        for(let i= 0; i < 5; i++){
            let div = "<div id=\"color" + i + "\"></div>";
            $("#last-five").append(div);
            $("#color" + i).css("background", lastFive[i] || "white"); //"white" in case lastFive[i] is undefined               
        }      

        $("#last-five div").each(function(div){
            $(`#color${div}`).click(function(){
                if(lastFive[div]){    
                    let color = lastFive[div];  
                    squareColorInput.value = color;
                    color = lastFive.splice(div, 1)[0];
                    lastFive.unshift(color);
                    lastFive.forEach(function(color, index){
                        $(`#color${index}`).css("backgroundColor", color);
                    });
                }
                
            });
        })
    }

    //I have to take the background color of the div, which is in RGB format and convert it to hexidecimal format
    function rgbToHex(rgb){
        rgb = rgb.replace("rgb(", "");
        rgb = rgb.replace(")", "");
        rgb = rgb.split(",");

        function deciToHex(rgb) {
            const BASE = 16;
            const ALPHABET = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

            let rightHex = rgb % BASE;
            let leftHex = (rgb - rightHex) / BASE;
            return ALPHABET[leftHex] + ALPHABET[rightHex];
        }

        return '#' + deciToHex(rgb[0]) + deciToHex(rgb[1]) + deciToHex(rgb[2]);
    }

    canvas.onclick = function (event) {
        drawSquare(event);
    };

    $("canvas").on("mousemove", function (event) {
        event.preventDefault();
        if(event.buttons == 1 || event.buttons == 3){
            drawSquare(event);
        }
    });

    $("#border-input").change(function () {
        let color = (this.checked) ? gridColorInput.value : "white";
        makeGrid(gridHeight, gridWidth, color);
    });

    $("#square-color").on("change", function(){
        lastFive.unshift(this.value);
        if(lastFive.length > 5){
            lastFive.pop(); 
        }     
        drawHistory();
   }); 

   $("#grid-size-submit").on("click", function(event){
       event.preventDefault();
       gridWidth = $("#grid-width-input").val();
       gridHeight = $("#grid-height-input").val();
       
       makeGrid(gridHeight, gridWidth, gridColorInput.value);
   })

   function drawSquare(event){    
        let margin = canvas.getBoundingClientRect(); //This will calculate the margins for the canvas

        let x = event.clientX - margin.left;
        let y = event.clientY - margin.top;

        let squareWidth = canvas.width/gridWidth;
        let squareHeight = canvas.height/gridHeight;

        let newSquare = new Square(x, y, squareHeight, squareWidth,    squareColorInput.value);
        newSquare.draw();
   }
}

window.addEventListener("load", init, false);