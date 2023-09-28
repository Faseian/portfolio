var count = 0;
var playerXPos = parseInt(document.getElementById("player").offsetLeft);
console.log(playerXPos);


button.addEventListener('click', (e) => {
    count++;
    document.getElementById("counter").textContent = "Counter: " + count;

    if (count > 100) {
        alert("Touch some grass");
    }
})

document.addEventListener('keydown', function(e) {
    movement(e.key);
});

function movement(key) {
    switch(key) {
        case 'd':
            var newXPos = playerXPos + 2;
            document.getElementById("player").style.left = newXPos + "px";
            playerXPos = parseInt(document.getElementById("player").offsetLeft);
            console.log(playerXPos);
            break;
        case 'a':
            var newXPos = playerXPos - 18;
            document.getElementById("player").style.left = newXPos + "px";
            playerXPos = parseInt(document.getElementById("player").offsetLeft);
            console.log(playerXPos);
            break;
    }
}