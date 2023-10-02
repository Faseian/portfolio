var seqPattern = [];
var playerPattern = [];
var level = 1;


$(".btn").click(function() { //adds animation

    var button = $(this); 
    button.addClass("pressed");
    var colorBtn = this.id;
    playerPattern.push(colorBtn);
    setTimeout(function() {
        button.removeClass("pressed");
    }, 100);
    playerPattern.forEach((element) => console.log("Player: " + element));
})

function ansCheck(pPattern, cPattern) {
    if (pPattern == cPattern) {
        return true;
    } else {
        return false;
    }
}

$(document).keydown(function(e) {
    console.log(e.key)
    if (e.key ==' '){
        gameStart();
        nextSequence();
    }
})

function gameStart() {
    level = 0;
    $("h1").text("Level " + level);
    playerPattern = [];
    seqPattern = [];
}

function nextSequence() {
    var block = Math.floor(Math.random() * 4) + 1;
    switch(block) {
        case 1:
            $("#green").fadeOut(100).fadeIn(100);
            seqPattern.push("green");
            break;
        case 2:
            $("#red").fadeOut(100).fadeIn(100);
            seqPattern.push("red");
            break;
        case 3:
            $("#yellow").fadeOut(100).fadeIn(100);
            seqPattern.push("yellow");
            break;
        case 4:
            $("#blue").fadeOut(100).fadeIn(100);
            seqPattern.push("blue");
            break;

    }
    level++;
    $("h1").text("Level " + level);
    seqPattern.forEach((element) => console.log("CPU: " + element));
}