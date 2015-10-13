var num = 16;
var numsq; //total number of squares
var sqD; //size in pixels of squares
var gridS; //size of grid, not quite fixed so as to overcome rounding errors
var randColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
var opac; //here so available to reset fn

$(document).ready(function(){
    defaultG();
    $("#reset").on("click", function(){
        reset();
    });
   $("#newGrid").on("click", function(){
        newGrid();
    });
   $("input[name=mode]").click(highlightMode); //using the simple .click instead of .on
   $("input[name=deepen]").click(newGrid);
});

function initialise(){
    numsq = num*num;
    sqD = 600 / num; //dimensions of the squares
    gridS = sqD * num + 0.01; //so as rounding errors don't result in non sqaure grids
}

function defaultG(){
    initialise();
    $("#grid").css({"width": gridS, "height": gridS});
    createGrid();
    highlightMode();
}

function highlightMode(){
    if($("input[name=mode][value='coloured']").is(":checked")){
        $(".square").on("mouseenter", function(){
            $(this).css({'background-color': randColor, 'opacity' : '+=0.1'});
            randColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        });
    } else{
        $(".square").on("mouseenter", function(){
            $(this).css({'background-color': 'black', 'opacity' : '+=0.1'});
        });
    }
}

function reset(){
    $("#grid").find(".square").css({"background-color": "white", "opacity": opac});
    highlightMode();
};
    
function newGrid(){
    num = window.prompt("Enter the number of squares per side:", num);
    if(!num){ //if NULL, ie if cancel pressed
        return; //highlightMode();
    }
    $(".square").remove();
    initialise();
    createGrid();
}

function createGrid(){
    opac = 1;
    for(var i = 0; i < numsq; i++){
        $("#grid").append("<div class='square'></div>");
    }
    if($("input[name=deepen][value='deep']").is(":checked")){
        opac = 0;
    }
    $(".square").css({"width": sqD, "height": sqD, "opacity": opac});
    if(num > 100){ //1px is too large past a certain point
        $(".square").css({"border": "none"});
    }
    highlightMode();
}