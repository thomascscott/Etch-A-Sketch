var num = 4;
var numsq;
var sqD;
var gridS;

$(document).ready(function(){
    defaultG();
    $("#reset").on("click", function(){
        reset();
    });
   $("#newGrid").on("click", function(){
        newGrid();
    });
});

function initialise(){
    numsq = num*num;
    sqD = 960 / num; //dimensions of the squares
    gridS = sqD * num + 0.01; //so as rounding errors don't result in non sqaure grids
}

function defaultG(){
    initialise();
    $("#grid").css({"width": gridS, "height": gridS});
    createGrid();
    highlightMode();
}

function highlightMode(){
    $(".square").on("mouseenter", function(){
        $(this).addClass("highlighted");
    });
}

function reset(){
    $("#grid").find(".square").removeClass("highlighted");
};
    
function newGrid(){
    $(".square").remove();
    num = window.prompt("Testing", "64");
    initialise();
    createGrid();
}

function createGrid(){
    for(var i = 0; i < numsq; i++){
        $("#grid").append("<div class='square'></div>");
    }
    $(".square").css({"width": sqD, "height": sqD});
    highlightMode();
}