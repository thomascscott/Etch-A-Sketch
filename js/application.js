var num = 4;
var numsq = num*num;
var sqD = 200 / num; //dimensions of the squares
var gridS = sqD * num + 0.01; //so as rounding errors don't result in non sqaure grids

$(document).ready(function(){
    defaultG();
    $("#reset").on("click", function(){
        reset();
    });
   
});

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

function reset(){
    $("#grid").find(".square").removeClass("highlighted");
};
    
