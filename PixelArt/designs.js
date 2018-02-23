var Cell = function(x, y){
    this.x = x;
    this.y = y;
};

Cell.prototype.locate = function(){
    console.log("Row: " + this.y);
    console.log("Column: " + this.x);
}


let lastFive= [];

function makeGrid() {

    // Your code goes here!

    $("#pixel_canvas").html("");
    let cells = $("#input_width").val();
    let rows = $("#input_height").val();

    if (rows * cells > 2500) {
        alert("Sorry, grid too big...");

    } else {
        var width = cells * (20 + 2),
            height = 18;

        $("#pixel_canvas").css("width", width.toString() + "px");
        for (let r = 0; r < rows; r++) {
            let row = "<tr>";

            for (let c = 0; c < cells; c++) {
                let cell = new Cell(c, r);
                cell.id = "r" + r + "c" + c;
                cell.html =  "<td id=\"" + cell.id + "\"></td>";
                row += cell.html;
            }

            row += "</tr>";

            $("#pixel_canvas").append(row);

        }

        $("#pixel_canvas tr").addClass("row");
        $(".row td").addClass("cell");

        $(".cell").css("height", height.toString() + "px");

        $(".cell").on("mousemove", function (event) {
            event.preventDefault();
            if(event.buttons == 1 || event.buttons == 3){
            let color = $("#color-picker").val();
            $(this).css("background", color);
            }
        });

        $(".cell").on("click", function (event) {
            event.preventDefault();
            let color = $("#color-picker").val();
            $(this).css("background", color);
        });

    }
}

function drawHistory(){
    $("#last-five").html(" ");

    for(let i= 0; i < 5; i++){
        var div = "<div id=\"color" + i + "\"></div>";
        $("#last-five").prepend(div);
        $("#color" + i).css("background", lastFive[i]);
        
        $("#color" + i).click(function(){
            $("input[type=\"color\"").val(lastFive[i]);
        });
    }
}
$(document).ready(function () {

    makeGrid();
    drawHistory();

    $("input[type=submit]").on("click", function (event) {
        event.preventDefault();
        makeGrid();
    });

    $("#clear-btn").on("click", function () {
        $(".cell").css("background", "white");
    });

    $("#border-input").on("change", function () {
        $("table, .row, .cell").toggleClass("no-border");
    });    


   $("#color-picker").on("change", function(){
        lastFive.push(this.value);
        if(lastFive.length > 5){
            lastFive.shift(); 
        }     
        drawHistory();
   }); 
});