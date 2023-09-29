$(".btn").click(function() { //adds animation
    var button = $(this); 
    button.addClass("pressed");
    setTimeout(function() {
        button.removeClass("pressed");
    }, 100);
})

$(document).click(function() {
    sequence();
})

function sequence() {
    var block = Math.floor(Math.random() * 4) + 1;

    switch(block) {
        case 1:
            $("#green").fadeOut(100).fadeIn(100);
            break;
        case 2:
            $("#red").fadeOut(100).fadeIn(100);
            break;
        case 3:
            $("#yellow").fadeOut(100).fadeIn(100);
            break;
        case 4:
            $("#blue").fadeOut(100).fadeIn(100);
            break;

    }
}