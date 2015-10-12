var num = 11;
var numsq = num*num;
var sqD = 960 / num; //dimensions of the squares
var gridS = sqD * num + 0.01; //so as rounding errors don't result in non sqaure grids

$(document).ready( defaultG );

function defaultG(){
    $("#grid").css({"width": gridS, "height": gridS});
    for(var i = 0; i < numsq; i++){
        $("#grid").append("<div class='square'></div>");
    }
    $(".square").css({"width": sqD, "height": sqD});
    $(".square").on("mouseenter", function(){
        $(this).addClass("highlighted");
    });
}
    
